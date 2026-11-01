
const sharp = require("sharp");

sharp("public/profile.png.png")
  .resize({
    width: 900,
    withoutEnlargement: true
  })
  .webp({
    quality: 82,
    effort: 6
  })
  .toFile("public/profile.webp")
  .then((info) => {
    console.log("Image optimized successfully!");
    console.log("New file size:", (info.size / 1024).toFixed(2), "KB");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
