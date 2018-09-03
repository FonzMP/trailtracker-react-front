export function fetchTrails() {
  return dispatch => {
    dispatch({ type: "LOADING_TRAILS" });
    return fetch("http://localhost:3001/trails.json")
      .then(response => response.json())
      .then(trails => dispatch({ type: "FETCH_TRAILS", payload: trails }));
  };
}
