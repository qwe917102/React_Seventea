const initstate = {
  fullScreen: [],
}

export function homePageState(state = initstate, action) {
  state = JSON.parse(JSON.stringify(state));
  // console.log(action)
  switch (action.type) {
    case 'GET_FULLSCREEN': {
      state.fullScreen = action.payload;
      return state;
    }
    default:
      return state
  }
}