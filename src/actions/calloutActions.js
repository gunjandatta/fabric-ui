import ActionTypes from "./actionTypes";

// Action to hide the callout
export function hide() {
    return {
        type: ActionTypes.Hide.Callout,
        visible: false
    };
}

// Action to show the callout
export function show() {
    return {
        type: ActionTypes.Show.Callout,
        visible: true
    };
}