const initstate = {
  jobList: [],
}

export function contactUsState(state = initstate, action) {
  state = JSON.parse(JSON.stringify(state));
  // console.log(action)
  switch (action.type) {
    case 'GET_JOBLIST': {
      state.jobList = action.payload;
      return state;
    }
    default:
      return state
  }
}