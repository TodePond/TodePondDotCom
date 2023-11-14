// Replace all image data images with pngs

const loadImage = async (image) => {
  const extension = image.src.split(".").pop();
  if (extension !== "json") return;
  const response = await fetch(image.src);
  const json = await response.json();
  const imageData = new ImageData(
    new Uint8ClampedArray(json.data),
    json.width,
    json.height
  );

  const canvas = new OffscreenCanvas(imageData.width, imageData.height);
  const context = canvas.getContext("2d");
  context.putImageData(imageData, 0, 0);
  const blob = await canvas.convertToBlob();
  const url = URL.createObjectURL(blob);
  image.src = url;
  image.onload = () => (image.style.visibility = "visible");
};

const images = document.querySelectorAll("img");
for (const image of images) {
  loadImage(image);
}
