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

export function addTrailRating(user_id, trail_id, rating) {
  return dispatch => {
    let body = JSON.stringify({
      trail_rating: { user_id: user_id, trail_id: trail_id, rating: rating }
    });
    return fetch("http://localhost:3001/trail_ratings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"      },
      body: body
    })
      .then(response => {
        return response.json();
      })
      .then(trail_rating => 
        dispatch({ type: "ADD_TRAIL_RATING", payload: trail_rating }))
  }
}