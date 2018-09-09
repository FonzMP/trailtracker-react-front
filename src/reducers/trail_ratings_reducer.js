export default function ratingsReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_TRAIL_RATINGS":
      return (state = action.payload);

    case "ADD_TRAIL_RATING":
      return [...state, action.payload];

    case "EDIT_TRAIL_RATING":
      return [
        ...state.filter(trail_rating => trail_rating.id !== action.payload.id),
        Object.assign({}, action.payload)
      ];

    case "DELETE_RATING":
      return state.filter(rating => rating.id !== action.payload.id);

    default:
      return state;
  }
}
