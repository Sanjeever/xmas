import { Howl, type HowlOptions } from "howler";

const howlOptions: HowlOptions = {
  src: [
    "https://files-1251985639.cos.ap-shanghai.myqcloud.com/xmas/music/Christmas%20bell%20mp3.mp3",
  ],
  html5: true,
  autoplay: false,
  loop: false,
  volume: 0.1,
};
const sound: Howl = new Howl(howlOptions);
export { sound };
