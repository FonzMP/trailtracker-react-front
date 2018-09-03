export default function ratingsReducer(state = [], action) {
  switch (action.type) {
    case "LOADING_TRAIL_RATINGS":
      return (state = []);

    case "FETCH_TRAIL_RATINGS":
      return (state = action.payload);

    default:
      return state;
  }
}
