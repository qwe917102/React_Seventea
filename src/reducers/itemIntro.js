const initstate = {
  itemList: [],
}

export function itemIntroState(state = initstate, action) {
  state = JSON.parse(JSON.stringify(state));
  // console.log(action)
  switch (action.type) {
    case 'GET_ITEMLIST': {
      state.itemList = action.payload;
      return state;
    }
    default:
      return state
  }
}