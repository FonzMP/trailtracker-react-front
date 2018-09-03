export function fetchRatings() {
  return dispatch => {
    dispatch({ type: "LOADING_TRAIL_RATINGS" });
    return fetch("http://localhost:3001/trail_ratings.json")
      .then(response => response.json())
      .then(trails =>
        dispatch({ type: "FETCH_TRAIL_RATINGS", payload: trails })
      );
  };
}
