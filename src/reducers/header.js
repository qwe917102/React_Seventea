const initstate = {
  navRoute: [],
}

export function headerState(state = initstate, action) {
  state = JSON.parse(JSON.stringify(state));
  // console.log(action)
  switch (action.type) {
    case 'GET_NAVBAR': {
      state.navRoute = action.payload;
      return state;
    }
    default:
      return state
  }
}