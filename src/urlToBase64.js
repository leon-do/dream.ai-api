const axios = require("axios");

module.exports = async function urlToBase64(_url) {
  try {
    const response = await axios.get(_url, {
      responseType: "arraybuffer",
    });
    return Buffer.from(response.data, "binary").toString("base64");
  } catch (error) {
    console.error(error);
    return false;
  }
};
