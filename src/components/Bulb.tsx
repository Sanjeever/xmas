import { defineComponent, toRefs } from 'vue'

export type BulbProp = {
  x: number
  y: number
  color: string
}

export default defineComponent({
  name: 'Bulb',
  props: {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    color: { type: String, required: true },
  },
  setup(props) {
    const { x, y, color } = toRefs(props)

    return () => (
      <div
        class='bulb'
        style={`--x: ${x.value};--y: ${y.value}; background-color: ${color.value} `}></div>
    )
  },
})
