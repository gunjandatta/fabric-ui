import ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";

/**
 * Panel Reducer
 */
export default function panelReducer(state = initialState, action) {
    // Handle the actions
    switch (action.type) {
        // Panel Actions
        case ActionTypes.Hide.Panel:
        case ActionTypes.Show.Panel:
            // Copy the state
            return Object.assign(
                // Start w/ a new object
                {},
                // Copy the state object
                state,
                // Update the state
                {
                    showPanel: action.visible
                }
            );

        // Action is not handled by this reducer
        default:
            return state;
    }
}