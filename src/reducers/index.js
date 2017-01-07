import {combineReducers} from "redux";
import callout from "./calloutReducer";
import dialog from "./dialogReducer";

const rootReducer = combineReducers({
    callout,
    dialog
});

export default rootReducer;