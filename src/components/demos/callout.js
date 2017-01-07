import React, {PropTypes} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as calloutActions from "../../actions/calloutActions";
import {
    Button, ButtonType,
    Callout,
    DirectionalHint
} from "office-ui-fabric-react";

/**
 * Callout Demo
 */
const CalloutDemo = (props) => {
    let targetElement;
    let {showCallout} = props;

    // Method to hide the callout
    let hide = () => {
        // Hide the callout
        props.actions.hide();
    };

    // The click event
    let onClick = (event, item) => {
        // Disable postback
        event.preventDefault();

        // Show the callout
        props.actions.show();
    };

    // Render the component
    return (
        <div>
            <Button
                id="targetElement"
                buttonType={ButtonType.normal}
                onClick={event => onClick(event)}
                >Show Callout</Button>
            {
                showCallout && (
                    <Callout
                        directionalHint={DirectionalHint.bottomRightEdge}
                        isBeakVisible={true}
                        target="#targetElement"
                        onDismiss={hide}>
                        <h5>This is where the callout componets go.</h5>
                    </Callout>
                )
            }
        </div>
    );
};

/**
 * Properties
 */
CalloutDemo.propTypes = {
    showCallout: PropTypes.bool
}

/**
 * Connections
 */
export default connect(
    /**
     * State to Property Mapper
     */
    (state, ownProps) => {
        return {
            showCallout: state.callout.showCallout,
        };
    },
    /**
     * Actions Mapper
     */
    (dispatch) => {
        return {
            actions: bindActionCreators(calloutActions, dispatch)
        };
    }
)(CalloutDemo);