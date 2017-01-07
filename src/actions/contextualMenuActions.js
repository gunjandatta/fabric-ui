import ActionTypes from "./actionTypes";

// Action to hide the contextual menu
export function hide() {
    return {
        type: ActionTypes.Hide.ContextualMenu,
        visible: false
    };
}

// Action to show the contextual menu
export function show() {
    return {
        type: ActionTypes.Show.ContextualMenu,
        visible: true
    };
}