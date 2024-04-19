import api from "./api";
import TokenService from "./token.service";

class AuthService {
  login(email, password) {
    return api
      .post("/auth/login", {
        email,
        password
      })
      .then(response => {
        if (response.data.token) {
          TokenService.setUser(response.data);
        }

        return response.data;
      });
  }

  forgetPassword(email) {
    return api
      .post("/auth/request-password-reset", {
        email,
      })
      .then(response => {
        if (response.data.token) {
          TokenService.setUser(response.data);
        }

        return response.data;
      });
  }

  logout() {
    TokenService.removeUser();
  }

  register(firstName, lastName, email, password) {
    return api.post("/auth/register", {
      email,
      password,
      firstName,
      lastName
    }).then(response => {
      console.log(response.data)
      if (response.data.token) {
        TokenService.setUser(response.data);
      }

      return response.data;
    });
  }

  getCurrentUser() {
    return TokenService.getUser();
  }
}

export default new AuthService();
