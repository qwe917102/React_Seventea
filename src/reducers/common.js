const initstate = {
  isLoading: false,
  isLogin: false,
  isModalActive: false,
}

export function commonState(state = initstate, action) {
  state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'CHANGE_EFFECT_ISLOADING': {
      state.isLoading ? state.isLoading : action.payload;
      return state;
    }
    case 'CHANGE_MODAL_ISACTIVE': {
      state.isModalActive ? state.isModalActive : action.payload;
      return state;
    }
    default:
      return state
  }
}