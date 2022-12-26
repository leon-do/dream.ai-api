const axios = require("axios");

module.exports = async function getAuth() {
  try {
    const response = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp",
      {
        returnSecureToken: true,
      },
      {
        params: {
          key: "AIzaSyDCvp5MTJLUdtBYEKYWXJrlLzu1zuKM6Xw",
        },
      }
    );
    return response.data.idToken;
  } catch (error) {
    console.error(error);
    return false;
  }
};
