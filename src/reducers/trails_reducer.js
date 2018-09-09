export default function trailsReducer(state = {isLoading: false, trails: []}, action) {
  switch (action.type) {
    case "LOADING_TRAILS":
      return state = {isLoading: true, trails: []}

    case "FETCH_TRAILS":
      return (state = {isLoading: false, trails: action.payload});

    case "ADD_TRAIL":
      return (state = {isLoading: false, trails: [...state.trails, action.payload]})

    case "EDIT_TRAIL":
      return state = {isLoading: false, trails: [
        ...state.trails.filter(trail => trail.id !== action.payload.id),
        Object.assign({}, action.payload)
      ]}

    case "DELETE_TRAIL":
      return state = {isLoading: false, trails: [...state.trails.filter(trail => trail.id !== action.payload.id)]}

    default:
      return state;
  }
}
