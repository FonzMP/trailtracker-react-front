export default function ratingsReducer(state = {isLoading: false, ratings: []}, action) {
  switch (action.type) {
    case "LOADING_TRAIL_RATINGS":
      return state = {isLoading: true, ratings: []}
    case "FETCH_TRAIL_RATINGS":
      return (state = {isLoading: false, ratings: action.payload});
    case "ADD_TRAIL_RATING":
    return (state = {isLoading: false, ratings: [...state.ratings, action.payload]})

    case "EDIT_TRAIL_RATING":
      return state = {isLoading: false, ratings: [
        ...state.ratings.filter(trail_rating => trail_rating.id !== action.payload.id),
        Object.assign({}, action.payload)
      ]}

    case "DELETE_RATING":
      return state = {isLoading: false, ratings: [...state.ratings.filter(rating => rating.id !== action.payload.id)]}

    default:
      return state;
  }
}
