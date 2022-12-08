import { Howl, type HowlOptions } from "howler";

const howlOptions: HowlOptions = {
  src: [
    "https://files-1251985639.cos.ap-shanghai.myqcloud.com/Rook1e%2CJ'san%20-%20Have%20Yourself%20a%20Merry%20Little%20Christmas%20(feat.%20j'san).mp3",
  ],
  html5: true,
  autoplay: false,
  loop: true,
};
const sound: Howl = new Howl(howlOptions);
export { sound };
