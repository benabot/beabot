// Composable to manage tags state (replaces Vuex store/tags.js)
export const useTags = () => {
  const tag = useState<string>('currentTag', () => '')

  const setTag = (newTag: string) => {
    tag.value = newTag
  }

  const getTag = () => tag.value

  return {
    tag,
    setTag,
    getTag,
  }
}
