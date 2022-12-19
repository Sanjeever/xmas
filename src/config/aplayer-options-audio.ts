import type { VNode } from "vue";
type AudioType = "auto" | "hls" | "normal";
interface Audio {
  [index: number]: this;

  id?: number;
  name: string | VNode; // eslint-disable-line no-restricted-globals
  artist: string | VNode;
  url: string;
  cover?: string;
  lrc?: string;
  theme?: string;
  type?: AudioType;
  speed?: number;
}

export const audioList: Audio[] = [
  {
    name: "Mambo Santa Mambo",
    artist: "The Enchanters",
    url: "https://files-1251985639.cos.ap-shanghai.myqcloud.com/xmas/music/Mambo%20Santa%20Mambo.mp3",
    cover: "https://pic.imgdb.cn/item/639add6eb1fccdcd365b276b.jpg",
  },
  {
    name: "Have Yourself a Merry Little Christmas (feat. j'san)",
    artist: "Rook1e / J'san",
    url: "https://files-1251985639.cos.ap-shanghai.myqcloud.com/xmas/music/Rook1e%2CJ%27san%20-%20Have%20Yourself%20a%20Merry%20Little%20Christmas%20%28feat.%20j%27san%29.mp3",
    cover: "https://pic.imgdb.cn/item/639ae0a0b1fccdcd36602363.jpg",
  },
];
