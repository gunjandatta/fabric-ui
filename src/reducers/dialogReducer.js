import ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";

/**
 * Dialog Reducer
 */
export default function dialogReducer(state = initialState, action) {
    // Handle the actions
    switch (action.type) {
        // Dialog Actions
        case ActionTypes.Hide.Dialog:
        case ActionTypes.Show.Dialog:
            // Copy the state
            return Object.assign(
                // Start w/ a new object
                {},
                // Copy the state object
                state,
                // Update the state
                {
                    showDialog: action.visible
                }
            );

        // Action is not handled by this reducer
        default:
            return state;
    }
}