import React from "react";
import strings from "../../data/datePickerData";
import {
    Label,
    MessageBar,
    MessageBarType
} from "office-ui-fabric-react";

/**
 * Message Bar Demo
 */
const MessageBarDemo = () => {
    // Render the component
    return (
        <div>
            <MessageBar>
                <Label>This is the 'default' message bar.</Label>
            </MessageBar>
            <MessageBar messageBarType={MessageBarType.blocked}>
                <Label>This is the 'blocked' message bar.</Label>
            </MessageBar>
            <MessageBar messageBarType={MessageBarType.error}>
                <Label>This is the 'error' message bar.</Label>
            </MessageBar>
            <MessageBar messageBarType={MessageBarType.info}>
                <Label>This is the 'info' message bar.</Label>
            </MessageBar>
            <MessageBar messageBarType={MessageBarType.remove}>
                <Label>This is the 'remove' message bar.</Label>
            </MessageBar>
            <MessageBar messageBarType={MessageBarType.severeWarning}>
                <Label>This is the 'severe warning' message bar.</Label>
            </MessageBar>
            <MessageBar messageBarType={MessageBarType.success}>
                <Label>This is the 'success' message bar.</Label>
            </MessageBar>
            <MessageBar messageBarType={MessageBarType.warning}>
                <Label>This is the 'warning' message bar.</Label>
            </MessageBar>
        </div>
    );
};

export default MessageBarDemo;