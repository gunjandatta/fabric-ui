import ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";

/**
 * Contextual Menu Reducer
 */
export default function contextualMenuReducer(state = initialState, action) {
    // Handle the actions
    switch (action.type) {
        // Contextual Menu Actions
        case ActionTypes.Hide.ContextualMenu:
        case ActionTypes.Show.ContextualMenu:
            // Copy the state
            return Object.assign(
                // Start w/ a new object
                {},
                // Copy the state object
                state,
                // Update the state
                {
                    showContextualMenu: action.visible
                }
            );

        // Action is not handled by this reducer
        default:
            return state;
    }
}