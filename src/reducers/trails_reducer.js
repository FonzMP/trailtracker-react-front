export default function trailsReducer(state = [], action) {
  switch (action.type) {
    case "LOADING_TRAILS":
      return (state = []);

    case "FETCH_TRAILS":
      return (state = action.payload);

    case "ADD_TRAIL":
      console.log(state);
      console.log(action);

    default:
      return state;
  }
}
