import { defineComponent, onMounted } from 'vue'
import { useInstance } from '@sanjeever/vue-hook'
import APlayer from 'aplayer'
import Xmas from '@/components/Xmas'
import { twinkling } from '@/config.json'

export default defineComponent({
  name: 'App',
  setup() {
    const player = useInstance<typeof HTMLDivElement>()
    onMounted(() => {
      new APlayer({
        container: player.value,
        fixed: true,
        autoplay: true,
        audio: [
          {
            name: 'Mambo Santa Mambo',
            artist: 'The Enchanters',
            url: 'https://files-1251985639.cos.ap-shanghai.myqcloud.com/xmas/music/Mambo%20Santa%20Mambo.mp3',
            cover: 'https://pic.imgdb.cn/item/639add6eb1fccdcd365b276b.jpg',
          },
          {
            name: "Have Yourself a Merry Little Christmas (feat. j'san)",
            artist: "Rook1e / J'san",
            url: 'https://files-1251985639.cos.ap-shanghai.myqcloud.com/xmas/music/Rook1e%2CJ%27san%20-%20Have%20Yourself%20a%20Merry%20Little%20Christmas%20%28feat.%20j%27san%29.mp3',
            cover: 'https://pic.imgdb.cn/item/639ae0a0b1fccdcd36602363.jpg',
          },
        ],
        volume: 1.0,
      })
    })

    return () => (
      <div class='w-screen h-screen flex flex-col flex-justify-center flex-items-center'>
        <Xmas twinkling={twinkling} />
        <div ref={player}></div>
      </div>
    )
  },
})
