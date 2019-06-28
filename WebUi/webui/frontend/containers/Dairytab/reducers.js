{
    id: 7,
    programme: 'News',
    controlPoint: 'HAL Studio',
    startTime: 0,
    endTime: 3
  }
]
}

export const itemReducer = (state, action) => {
if (!state) {
  state = Immutable.fromJS(itemInitialState)
}
export const itemReducer = (state = itemInitialState, action) => {
switch (action.type) {
  case ActionTypes.LOAD_ITEMS:
    return state.set('items', state)
    return state
  default:
    return state
}
}

export const timeReducer = (state, action) => {
if (!state) {
  state = Immutable.fromJS(timeInitialState)
}
export const timeReducer = (state = timeInitialState, action) => {
switch (action.type) {
  case ActionTypes.UPDATE_TIME:
    return state.set('time', action.time)
    return action.time
  default:
    return state
}
}