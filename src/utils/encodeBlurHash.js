import { encode } from "blurhash";

const loadImage = async (src) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = (...args) => reject(args);
    img.src = src;
  });

const getImageData = (image) => {
  const canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;
  const context = canvas.getContext("2d");
  context.drawImage(image, 0, 0);
  return context.getImageData(0, 0, image.width, image.height);
};

const encodeImageToBlurhash = async (imageUrl) => {
  const image = await loadImage(imageUrl);
  const imageData = getImageData(image);
  return encode(imageData.data, imageData.width, imageData.height, 4, 4);
};

export const defaultAvatarHash = () => {
  return [
    "UFG,6GxGGcI:NQoyxUs99Ds,00bv.AIpMws.",
    "ULKc6T}]0L-UE1O=-Vs9019[S]NF],v%9tV@",
    "UJLghSxuL2Rj%#t7Q-Rj00WB4TM{~WM{9ZRj",
    "UOIWK9W;IAoLnPShNtsA1Hso5*so}ZW;9uR*",
    "UFH_}W:]PC-p~psq4nNF00EK4TNxojxn%2tS",
    "UGHV3hRj0Nj]AdRO-Poz00s;*xtS~DtS56x]",
    "UCJ?]$f80DbE0af8}$f$0Jf70Jf%I~ays4kB",
    "UCLWtpxV00$w9Qfi-|br00S#uls+5_RVISxV",
    "UEK^4s$|B1Wmo{t5wIja02IX03oz~9Ir57j]",
  ];
};

export default encodeImageToBlurhash;
