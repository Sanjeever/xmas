import APlayer from "aplayer";
import { audioList } from "@/config/aplayer-options-audio";

export const aplayer = new APlayer({
  container: document.querySelector(".player"),
  fixed: true,
  autoplay: true,
  audio: audioList,
  volume: 1.0,
});
