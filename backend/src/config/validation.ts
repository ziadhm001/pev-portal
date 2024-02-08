import { body } from "express-validator"

export const loginValidators = [
    body("email").isEmail().withMessage("Invalid email address"),
    body("password").notEmpty().withMessage("Password is required")
]

export const registerValidators = [
    body("firstName").notEmpty().withMessage("First name is required"),
    body("lastName").notEmpty().withMessage("Last name is required"),
    body("email").isEmail().withMessage("Invalid email address"),
    body("password")
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long")
]

export const changePasswordValidators = [
    body("oldPassword").notEmpty().withMessage("Old password is required"),
    body("newPassword")
        .notEmpty()
        .withMessage("New password is required")
        .isLength({ min: 6 })
        .withMessage("New password must be at least 6 characters long")
        .custom((newPassword, { req }) => {
            if (newPassword === req.body.oldPassword) {
                throw new Error(
                    "New password must be different from the old password"
                )
            }
            return true
        })
]