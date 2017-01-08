import {combineReducers} from "redux";
import callout from "./calloutReducer";
import contextualMenu from "./contextualMenuReducer";
import dialog from "./dialogReducer";
import panel from "./panelReducer";

const rootReducer = combineReducers({
    callout,
    contextualMenu,
    dialog,
    panel
});

export default rootReducer;