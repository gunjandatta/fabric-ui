import ActionTypes from "./actionTypes";

// Action to hide the panel
export function hide() {
    return {
        type: ActionTypes.Hide.Panel,
        visible: false
    };
}

// Action to show the panel
export function show() {
    return {
        type: ActionTypes.Show.Panel,
        visible: true
    };
}