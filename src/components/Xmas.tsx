import { defineComponent, onUnmounted, ref, toRefs } from 'vue'
import './xmas.css'
import Tree from './Tree'
import type { BulbProp } from './Bulb'
import Bulb from './Bulb'
import Trunk from './Trunk'
import { bulb as bulbConfig } from '@/config.json'

export default defineComponent({
  name: 'Xmas',
  props: {
    twinkling: { type: Boolean, default: true },
  },
  setup(props) {
    const { twinkling } = toRefs(props)

    function generateBulbProps(coords: number[][]): BulbProp[] {
      const colors = bulbConfig.colors
      const count = new Map<string, number>()
      const getRandomColor = () => {
        let color = colors[Math.floor(Math.random() * colors.length)]
        while ((count.get(color) ?? 0) >= 2) {
          color = colors[Math.floor(Math.random() * colors.length)]
        }
        count.set(color, (count.get(color) ?? 0) + 1)
        return color
      }
      return coords.map(([x, y]) => ({
        x,
        y,
        color: getRandomColor(),
      }))
    }

    const coords: number[][] = [
      [25, 8],
      [15, 23],
      [30, 23],
      [10, 30],
      [20, 28],
      [35, 33],
      [17, 12],
      [24, 17],
    ]

    const bulbProps = ref(generateBulbProps(coords))
    const intervalID = ref<number | null>()
    if (twinkling.value) {
      intervalID.value = setInterval(() => {
        bulbProps.value = generateBulbProps(coords)
      }, 500)
    }
    onUnmounted(() => {
      if (intervalID.value) {
        clearInterval(intervalID.value)
      }
    })

    return () => (
      <div class='xmas'>
        <div class='tree'>
          <div class='bulbs'>
            {bulbProps.value.map(({ x, y, color }) => {
              return <Bulb x={x} y={y} color={color}></Bulb>
            })}
          </div>
          {Array.from({ length: 8 }, (_, index) => index + 1).map(i => {
            return <Tree width={i * 45} />
          })}
        </div>
        <Trunk />
      </div>
    )
  },
})
