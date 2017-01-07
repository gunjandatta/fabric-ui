import ActionTypes from "./actionTypes";

// Action to hide the dialog
export function hide() {
    return {
        type: ActionTypes.Hide.Dialog,
        visible: false
    };
}

// Action to show the dialog
export function show() {
    return {
        type: ActionTypes.Show.Dialog,
        visible: true
    };
}