import React, {PropTypes} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as panelActions from "../../actions/panelActions";
import {
    Button, ButtonType,
    Panel, PanelType
} from "office-ui-fabric-react";

/**
 * Code Panel
 */
const CodePanel = (props) => {
    let {codeFile, showPanel} = props;

    // Read the code file from github
    window.handleCORSRequest = (res) => {
        document.querySelector("#codePanel").innerText = atob(res.data.content);
    }
    let script = document.createElement("script");
    script.src = "https://api.github.com/repos/gunjandatta/fabric-ui/contents/src/components/demos/" + codeFile + ".js?callback=handleCORSRequest";
    document.head.appendChild(script);

    // Method to hide the panel
    let hide = () => {
        // Hide the panel
        props.actions.hide();
    };

    // The button click event
    let onClick = (event) => {
        // Show the panel
        props.actions.show();
    };

    // Render the component
    return (
        <div className="ms-u-textAlignRight">
            <Button
                buttonType={ButtonType.primary}
                onClick={event => onClick(event)}
                >Show Code
            </Button>
            <Panel
                isOpen={showPanel}
                onDismiss={hide}
                type={PanelType.large}>
                <code id="codePanel">Loading the code...</code>
            </Panel>
        </div>
    );
};

/**
 * Properties
 */
CodePanel.propTypes = {
    showPanel: PropTypes.bool
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
            showPanel: state.panel.showPanel,
        };
    },
    /**
     * Actions Mapper
     */
    (dispatch) => {
        return {
            actions: bindActionCreators(panelActions, dispatch)
        };
    }
)(CodePanel);
