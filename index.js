const fs = require("fs");
const generateName = require("./src/generateName");
const getAuth = require("./src/getAuth");
const postImage = require("./src/postImage");
const getImage = require("./src/getImage");
const urlToBase64 = require("./src/urlToBase64");

main();
async function main() {
  // generate random name
  const name = generateName();
  console.log({ name });

  // get authorization bearer
  const authorization = await getAuth();
  console.log({ authorization });
  if (!authorization) {
    await new Promise((resolve) => setTimeout(resolve, 1000 * 10));
    return main();
  }

  // post to generate AI image
  const id = await postImage(name, authorization);
  console.log({ id });
  if (!id) {
    await new Promise((resolve) => setTimeout(resolve, 1000 * 10));
    return main();
  }

  // wait for image to be generated
  await new Promise((resolve) => setTimeout(resolve, 1000 * 15));

  // get image url
  const imageUrl = await getImage(id);
  console.log({ imageUrl });
  if (!imageUrl) {
    await new Promise((resolve) => setTimeout(resolve, 1000 * 10));
    return main();
  }

  // get base64 image
  const image = await urlToBase64(imageUrl);
  console.log({ image });
  if (!image) {
    await new Promise((resolve) => setTimeout(resolve, 1000 * 10));
    return main();
  }

  // save image
  fs.writeFileSync(`./images/${name}.png`, image, "base64");

  // restart
  await new Promise((resolve) => setTimeout(resolve, 1000 * 10));
  return main();
}
