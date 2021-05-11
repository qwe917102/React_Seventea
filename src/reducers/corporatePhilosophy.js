const initstate = {
  philosophy: [],
}

export function corporatePhilosophyState(state = initstate, action) {
  state = JSON.parse(JSON.stringify(state));
  // console.log(action)
  switch (action.type) {
    case 'GET_PHILOSOPHY': {
      state.philosophy = action.payload;
      return state;
    }
    default:
      return state
  }
}