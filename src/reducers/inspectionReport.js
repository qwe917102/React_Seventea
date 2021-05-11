const initstate = {
  reportList: [],
}

export function inspectionReportState(state = initstate, action) {
  state = JSON.parse(JSON.stringify(state));
  // console.log(action)
  switch (action.type) {
    case 'GET_REPORTLIST': {
      state.reportList = action.payload;
      return state;
    }
    default:
      return state
  }
}