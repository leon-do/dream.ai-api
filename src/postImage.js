const axios = require("axios");

// postImage("Flying Sloth")
module.exports = async function postImage(_prompt, _authorization) {
  try {
    // style 4 = steampunk
    // style 9 = psychic
    // style 40 = malevolent (red/black)
    // style 65 = diorama
    const style = 40;
    const response = await axios.post("https://paint.api.wombo.ai/api/v2/tasks", `{"is_premium":false,"input_spec":{"prompt":"${_prompt}","style":${style},"display_freq":10}}`, {
      headers: {
        accept: "*/*",
        authorization: `bearer ${_authorization}`,
      },
    });
    if (!response.data.id) return false;
    return response.data.id;
  } catch (error) {
    console.error(error);
    return false;
  }
};
