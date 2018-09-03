import { combineReducers } from "redux";
import manageTrails from "./trails_reducer";
import manageTrailRatings from "./trail_ratings_reducer";

const rootReducer = combineReducers({
  trails: manageTrails,
  trail_ratings: manageTrailRatings
});

export default rootReducer;
