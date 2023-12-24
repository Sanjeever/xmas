import { defineComponent, toRefs } from 'vue'

export default defineComponent({
  name: 'Tree',
  props: {
    width: { type: Number, required: true },
  },
  setup(props) {
    const { width } = toRefs(props)

    return () => <div class='trees' style={`width: ${width.value}px`}></div>
  },
})
