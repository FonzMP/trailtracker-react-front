export default function ratingsReducer(state = [], action) {
  switch (action.type) {
    
    case "FETCH_TRAIL_RATINGS":
      return (state = action.payload);

    case "ADD_TRAIL_RATING":
      return [...state, action.payload]

    default:
      return state;
  }
}
