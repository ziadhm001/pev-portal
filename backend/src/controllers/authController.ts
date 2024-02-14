/* eslint-disable indent */
import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from "../models/user";
import { IPayload, IUser } from "../types/IUser";
import { validationResult } from "express-validator";
import ProfileModel from "../models/profile";
import { IProfile } from "../types/IProfile";
import RefreshTokenModel from "../models/refreshToken";
import crypto from "crypto";
import { IExtendedRequest } from "../types/IExtendedRequest";

function isJwtPayload(payload: string | JwtPayload): payload is JwtPayload {
  return (payload as JwtPayload).exp !== undefined;
}

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0] });
  }

  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email.toLowerCase() });

    if (!user) {
      console.log(`[AUTH] [FAIL] User not found ${email}`);
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.log(`[AUTH] [FAIL] Wrong password ${email}`);
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const payload = {
      id: user._id,
      email: user.email,
    };

    const tokenExpiryTime = process.env.JWT_EXPIRATION
      ? process.env.JWT_EXPIRATION
      : "1d";
    const refreshTokenExpiryTime = process.env.REFRESH_TOKEN_EXPIRATION
      ? process.env.REFRESH_TOKEN_EXPIRATION
      : "7d";

    const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: tokenExpiryTime,
    });

    const refreshToken = jwt.sign(
      payload,
      process.env.REFRESH_TOKEN_SECRET as string,
      {
        expiresIn: refreshTokenExpiryTime,
      }
    );

    const newRefreshToken = new RefreshTokenModel({
      token: refreshToken,
      userId: user._id,
      expiresAt: new Date((jwt.decode(refreshToken) as any).exp * 1000),
    });
    await newRefreshToken.save();

    const decodedToken = jwt.decode(refreshToken);
    let expirationTimestamp;

    if (isJwtPayload(decodedToken)) {
      expirationTimestamp = decodedToken.exp * 1000;
    } else {
      throw new Error("Invalid token format");
    }

    try {
      const ip = req.clientIp;
      console.log(`[AUTH] [SUCCESS] User logged in ${email} from ${ip}`);
      user.lastLoginDate = new Date();
      user.lastLoginIpAddress = ip;

      await user.save();
    } catch (error) {
      console.error("Error getting IP address:", error);
      res.status(500).send("Error getting IP address");
    }

    res.status(200).json({
      token,
      refreshToken,
      expiresIn: tokenExpiryTime,
      expirationTimestamp,
      user,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const register = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0] });
  }

  const { firstName, lastName, password } = req.body;
  const email = req.body.email.toLowerCase();
  try {
    const existingUser = await UserModel.findOne({
      email: email.toLowerCase(),
    });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists." });
    }

    const saltRounds = process.env.BCRYPT_SALT_ROUNDS || "10";

    const hashedPassword = await bcrypt.hash(
      password,
      parseInt(saltRounds, 10)
    );

    const newUser: IUser = new UserModel({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Create a new profile instance for the registered user
    const newProfile: IProfile = new ProfileModel({
      user: newUser._id,
      fields: { firstName, lastName, email },
    });

    await newProfile.save();

    const payload = {
      id: newUser._id,
      email: newUser.email,
    };

    const tokenExpiryTime = process.env.JWT_EXPIRATION
      ? process.env.JWT_EXPIRATION
      : "1d";
    const refreshTokenExpiryTime = process.env.REFRESH_TOKEN_EXPIRATION
      ? process.env.REFRESH_TOKEN_EXPIRATION
      : "7d";

    const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: tokenExpiryTime,
    });

    const refreshToken = jwt.sign(
      payload,
      process.env.REFRESH_TOKEN_SECRET as string,
      {
        expiresIn: refreshTokenExpiryTime,
      }
    );

    const decodedToken = jwt.decode(refreshToken);
    let expirationTimestamp;

    if (isJwtPayload(decodedToken)) {
      expirationTimestamp = decodedToken.exp * 1000;
    } else {
      throw new Error("Invalid token format");
    }
    res.status(201).json({
      message: "User and profile created successfully",
      token: token,
      user: newUser,
      refreshToken,
      expiresIn: tokenExpiryTime,
      expirationTimestamp,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error, please try again later." });
  }
  return;
};

export const logout = async (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(400).json({ message: "No refresh token provided" });
  }

  try {
    const decodedRefreshToken = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET as string
    ) as IPayload;

    await RefreshTokenModel.deleteOne({ token: refreshToken });

    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      res.status(401).json({ message: "Refresh token expired" });
    } else if (error instanceof jwt.JsonWebTokenError) {
      res.status(401).json({ message: "Invalid refresh token" });
    } else {
      res.status(500).json({ message: "Server error" });
    }
  }
};

export const changePassword = async (req: IExtendedRequest, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const id = req.user.id;
  const { oldPassword, newPassword } = req.body;

  try {
    const user = await UserModel.findById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Incorrect old password" });
    }

    const saltRounds = process.env.BCRYPT_SALT_ROUNDS || "10";
    const hashedPassword = await bcrypt.hash(
      newPassword,
      parseInt(saltRounds, 10)
    );

    user.password = hashedPassword;
    await user.save();

    res.status(200).json({
      message: "Password changed successfully",
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const refreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { refreshToken } = req.body;
  if (!refreshToken) {
    return res.status(400).json({ error: "No token provided" });
  }

  try {
    const decodedRefreshToken = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET as string
    ) as IPayload;

    const storedRefreshToken = await RefreshTokenModel.findOne({
      token: refreshToken,
    });
    if (!storedRefreshToken) {
      console.log("invalid refresh token");
      return res.status(400).json({ error: "Invalid token" });
    }

    const user = await UserModel.findById(decodedRefreshToken.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const newToken = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET as string,
      {
        expiresIn: process.env.JWT_EXPIRATION
          ? process.env.JWT_EXPIRATION
          : "1d",
      }
    );

    const newRefreshToken = jwt.sign(
      { id: user._id, email: user.email },
      process.env.REFRESH_TOKEN_SECRET as string,
      {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRATION
          ? process.env.REFRESH_TOKEN_EXPIRATION
          : "7d",
      }
    );
    const decodedToken = jwt.decode(newRefreshToken);
    let expirationTimestamp;

    if (isJwtPayload(decodedToken)) {
      expirationTimestamp = decodedToken.exp * 1000;
    } else {
      throw new Error("Invalid token format");
    }

    await RefreshTokenModel.deleteOne({ token: refreshToken });

    const newStoredRefreshToken = new RefreshTokenModel({
      token: newRefreshToken,
      userId: user._id,
      expiresAt: new Date((jwt.decode(newRefreshToken) as any).exp * 1000),
    });
    await newStoredRefreshToken.save();

    res.status(200).json({
      token: newToken,
      refreshToken: newRefreshToken,
      expirationTimestamp,
    });
  } catch (error) {
    console.log(error);
    if (error instanceof jwt.JsonWebTokenError) {
      res.status(401).json({ message: "Invalid token Exp" });
    } else {
      res.status(500).json({ message: "Server error" });
    }
  }
};

export const requestPasswordReset = async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    const user = await UserModel.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(404).json({ error: "User with this email not found" });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");

    const hashedToken = await bcrypt.hash(resetToken, 10);
    user.passwordResetToken = hashedToken;
    user.passwordResetExpires = Date.now() + 3600000 * 24;

    await user.save();

    const resetURL = `https://${process.env.baseURL}/auth/reset-password/${resetToken}`;

    console.log(`Password reset link: ${resetURL}`);

    res.status(200).json({ message: "Password reset link sent to email" });
  } catch (error) {
    res.status(500).json({
      error: "Error resetting password",
      details: error.message,
    });
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  const { resetToken, newPassword } = req.body;

  try {
    if (!resetToken || !newPassword) {
      return res.status(400).json({
        error: "Reset token and new password must be provided",
      });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({
        error: "Password must be at least 8 characters long",
      });
    }

    const users = await UserModel.find({
      passwordResetExpires: { $gt: Date.now() },
    });

    for (const user of users) {
      if (await bcrypt.compare(resetToken, user.passwordResetToken)) {
        const saltRounds = process.env.BCRYPT_SALT_ROUNDS || "10";
        const hashedPassword = await bcrypt.hash(
          newPassword,
          parseInt(saltRounds, 10)
        );
        user.password = hashedPassword;
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;

        await user.save();

        return res.status(200).json({ message: "Password reset successfully" });
      }
    }

    return res.status(400).json({
      error:
        "Your password reset link has expired or is incorrect, please request a new one",
    });
  } catch (error) {
    res.status(500).json({
      error: "Error resetting password",
      details: error.message,
    });
  }
};
