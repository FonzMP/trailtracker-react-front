export function fetchTrails() {
  return dispatch => {
    dispatch({ type: "LOADING_TRAILS" });
    return fetch("http://localhost:3001/trails.json")
      .then(response => response.json())
      .then(trails => dispatch({ type: "FETCH_TRAILS", payload: trails }));
  };
}

export function addTrail(name, length) {
  console.log(name, length);
  return dispatch => {
    let body = JSON.stringify({
      trail: { name: name, length: length, created_by: 1 }
    });
    return fetch("http://localhost:3001/trails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    })
      .then(response => {
        response.json();
      })
      .then(trail => dispatch({ type: "ADD_TRAIL", payload: trail }));
  };
}
