const initstate = {
  storeList: [],
}

export function storeIntroState(state = initstate, action) {
  state = JSON.parse(JSON.stringify(state));
  // console.log(action)
  switch (action.type) {
    case 'GET_STORELIST': {
      state.storeList = action.payload;
      return state;
    }
    default:
      return state
  }
}