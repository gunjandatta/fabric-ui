import React, {PropTypes} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as dialogActions from "../../actions/dialogActions";
import {
    Button, ButtonType,
    Dialog, DialogType
} from "office-ui-fabric-react";

/**
 * Dialog Demo
 */
const DialogDemo = (props) => {
    let {showDialog} = props;

    // Method to hide the dialog
    let hide = () => {
        // Hide the dialog
        props.actions.hide();
    }

    // The button click event
    let onClick = (event) => {
        // Disable postback
        event.preventDefault();

        // Show the dialog
        props.actions.show();
    };

    // Render the component
    return (
        <div>
            <Button
                buttonType={ButtonType.normal}
                onClick={event => onClick(event)}
                >Open Dialog</Button>
            <Dialog
                onDismiss={hide}
                isBlocking={true}
                isOpen={showDialog}
                title="Dialog Example"
                type={DialogType.close}>
                <h5>This is where you dialog components go.</h5>
            </Dialog>
        </div>
    );
};

/**
 * Properties
 */
DialogDemo.propTypes = {
    showDialog: PropTypes.bool
};

/**
 * Connections
 */
export default connect(
    /**
     * State to Property Mapper
     */
    (state, ownProps) => {
        return {
            showDialog: state.dialog.showDialog,
        };
    },
    /**
     * Actions Mapper
     */
    (dispatch) => {
        return {
            actions: bindActionCreators(dialogActions, dispatch)
        };
    }
)(DialogDemo);