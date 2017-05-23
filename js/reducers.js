const DEFAULT_STATE = {
    searchTerm: ''
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  state = state || DEFAULT_STATE
  switch (action.type) {
    default:
      return state
  }
}

export default rootReducer
