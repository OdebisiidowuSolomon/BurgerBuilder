import Axios from "axios";

const authStart = () => {
  return {
    type: "AUTH_START",
  };
};

const authSuccess = (token, userId) => {
  return {
    type: "AUTH_SUCCESS",
    idToken: token,
    userId,
  };
};

const authFail = (error) => {
  return {
    type: "AUTH_FAIL",
    error,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  return {
    type: "AUTH_LOGOUT",
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const auth = (email, password, isSignup) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email,
      password,
      returnSecureToken: true,
    };
    let base = "https://identitytoolkit.googleapis.com/v1/accounts:";
    let url = `${base}signUp?key=AIzaSyBimjvNVRySiO1N9VsrLIIp6cDDf6k7DQI`;
    if (!isSignup) {
      url = `${base}signInWithPassword?key=AIzaSyBimjvNVRySiO1N9VsrLIIp6cDDf6k7DQI`;
    }
    Axios.post(url, authData)
      .then((response) => {
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", response.data.localId);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch((err) => {
        dispatch(authFail(err.response?.data.error));
        // : dispatch(authFail(err));
      });
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: "SET_AUTH_REDIRECT_PATH",
    path,
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem("userId");
        dispatch(authSuccess(token, userId));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
