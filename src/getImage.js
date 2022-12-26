const axios = require("axios");

// getImage("7782964a-eb74-4b8e-8a40-8de922dafced")
module.exports = async function getImage(_id) {
  try {
    const response = await axios.get(`https://paint.api.wombo.ai/api/v2/tasks/${_id}`);
    if (!response.data.state === "completed") return false;
    return response.data.result.final;
  } catch (error) {
    console.error(error);
    return false;
  }
};
