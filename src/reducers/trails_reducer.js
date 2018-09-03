export default function trailsReducer(
  state = { loading: false, trails: [] },
  action
) {
  switch (action.type) {
    case "LOADING_TRAILS":
      return (state = { loading: true, trails: [] });

    case "FETCH_TRAILS":
      action.payload.map(trail => {
        return (state = {
          ...state,
          trails: [...state.trails, trail]
        });
      });

    default:
      return state;
  }
}
