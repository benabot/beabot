export const state = () => ({
  home: true,
});

export const mutations = {
  sethome: (state, home) => {
    state.home = home;
  },
};

export const getters = {
  gethome: (state) => state.home,
};
