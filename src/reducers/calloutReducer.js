import ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";

/**
 * Callout Reducer
 */
export default function calloutReducer(state = initialState, action) {
    // Handle the actions
    switch (action.type) {
        // Callout Actions
        case ActionTypes.Hide.Callout:
        case ActionTypes.Show.Callout:
            // Copy the state
            return Object.assign(
                // Start w/ a new object
                {},
                // Copy the state object
                state,
                // Update the state
                {
                    showCallout: action.visible
                }
            );

        // Action is not handled by this reducer
        default:
            return state;
    }
}