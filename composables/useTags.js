import { ref } from 'vue'

const tag = ref('')

export const useTags = () => {
  const setTag = (newTag) => {
    tag.value = newTag
  }

  const getTag = () => tag.value

  return {
    tag,
    setTag,
    getTag,
  }
}
