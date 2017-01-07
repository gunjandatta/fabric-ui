import {combineReducers} from "redux";
import callout from "./calloutReducer";
import contextualMenu from "./contextualMenuReducer";
import dialog from "./dialogReducer";

const rootReducer = combineReducers({
    callout,
    contextualMenu,
    dialog
});

export default rootReducer;