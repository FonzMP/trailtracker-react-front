export default function trailsReducer(state = [], action) {
  switch (action.type) {
    case "LOADING_TRAILS":
      return (state = []);

    case "FETCH_TRAILS":
      return (state = action.payload);

    case "ADD_TRAIL":
      return [...state, action.payload]

    case "DELETE_TRAIL":
      return state.filter(trail => trail.id !== action.payload.id)

    default:
      return state;
  }
}
