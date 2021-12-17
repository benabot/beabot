export const state = () => ({
  tag: '',
});

export const mutations = {
  setTag: (state, tag) => {
    state.tag = tag;
  },
};

export const getters = {
  getTag: (state) => state.tag,
};
