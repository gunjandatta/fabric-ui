import React, {PropTypes} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as contextualMenuActions from "../../actions/contextualMenuActions";
import {
    Button,
    ContextualMenu,
    DirectionalHint,
    IconName
} from "office-ui-fabric-react";

/**
 * Contextual Menu Demo
 */
const ContextualMenuDemo = (props) => {
    let {showContextualMenu} = props;

    // Method to hide the contextual menu
    let hide = () => {
        // Hide the contextual menu
        props.actions.hide();
    }

    // The button click event
    let onClick = (event) => {
        // Disable postback
        event.preventDefault();

        // Show the contextual menu
        props.actions.show();
    };

    // Render the component
    return (
        <div>
            <Button
                id="targetElement"
                onClick={event => onClick(event)}
            >Show Menu</Button>
            {
                showContextualMenu && <ContextualMenu
                    showFocuOnMount={true}
                    target="#targetElement"
                    onDismiss={hide}
                    directionalHint={DirectionalHint.bottomRightEdge}
                    items={[
                        {
                            key: 'newItem',
                            iconProps: {
                            iconName: IconName.Add
                            },
                            subMenuProps: {
                            items: [
                                {
                                key: 'emailMessage',
                                name: 'Email message',
                                title: 'Create an email'
                                },
                                {
                                key: 'calendarEvent',
                                name: 'Calendar event',
                                title: 'Create a calendar event',
                                }
                            ],
                            },
                            name: 'New'
                        },
                        {
                            key: 'upload',
                            onClick: () => {
                            this.setState({ showCallout: true });
                            },
                            iconProps: {
                            iconName: IconName.Upload,
                            style: {
                                color: 'salmon'
                            }
                            },
                            name: 'Upload (Custom Color)',
                            title: 'Upload a file'
                        },
                        {
                            key: 'divider_1',
                            name: '-',
                        },
                        {
                            key: 'rename',
                            name: 'Rename'
                        },
                        {
                            key: 'properties',
                            name: 'Properties'
                        },
                        {
                            key: 'disabled',
                            name: 'Disabled item',
                            disabled: true,
                        },
                        {
                            key: 'divider_2',
                            name: '-',
                        },
                        {
                            key: 'share',
                            iconProps: {
                            iconName: IconName.Share
                            },
                            subMenuProps: {
                            items: [
                                {
                                    key: 'sharetoemail',
                                    name: 'Share to Email',
                                    iconProps: {
                                        iconName: IconName.Mail
                                    },
                                },
                                {
                                    key: 'sharetofacebook',
                                    name: 'Share to Facebook',
                                },
                                {
                                    key: 'sharetotwitter',
                                    name: 'Share to Twitter',
                                    iconProps: {
                                        iconName: IconName.Share
                                    },
                                    subMenuProps: {
                                        items: [
                                            {
                                                key: 'sharetoemail_1',
                                                name: 'Share to Email',
                                                title: 'Share to Email',
                                                iconProps: {
                                                iconName: IconName.Mail
                                                },
                                            },
                                            {
                                                key: 'sharetofacebook_1',
                                                name: 'Share to Facebook',
                                                title: 'Share to Facebook',
                                            },
                                            {
                                                key: 'sharetotwitter_1',
                                                name: 'Share to Twitter',
                                                title: 'Share to Twitter',
                                                iconProps: {
                                                iconName: IconName.Share
                                                }
                                            },
                                        ],
                                    },
                                },
                            ],
                            },
                            name: 'Share'
                        },
                        {
                            key: 'print',
                            iconProps: {
                            iconName: IconName.Print
                            },
                            name: 'Print'
                        },
                        {
                            key: 'music',
                            iconProps: {
                            iconName: IconName.MusicInCollectionFill
                            },
                            name: 'Music',
                        },
                        {
                            key: 'divider_3',
                            name: '-',
                        },
                        {
                            key: 'Dattabase',
                            name: 'Go to Dattabase',
                            href: 'http://dattabase.com'
                        }
                    ]}
                />
            }                
        </div>
    );
};

/**
 * Properties
 */
ContextualMenuDemo.propTypes = {
    showContextualMenu: PropTypes.bool
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
            showContextualMenu: state.contextualMenu.showContextualMenu,
        };
    },
    /**
     * Actions Mapper
     */
    (dispatch) => {
        return {
            actions: bindActionCreators(contextualMenuActions, dispatch)
        };
    }
)(ContextualMenuDemo);