import React from "react";
import {TextField} from "office-ui-fabric-react";

/**
 * Text Field Demo
 */
const TextFieldDemo = () => {
    // Render the component
    return (
        <div style={{width: "250px"}}>
            <TextField
                label="Default Textfield"
            />
            <TextField
                disabled={true}
                label="Disabled Textfield"
            />
            <TextField
                ariaLabel="This text field is required"
                errorMessage="Please enter a value"
                label="Required Textfield"
                required={true}
            />
            <TextField
                label="Textfield with Placeholder"
                placeholder="Enter a Value"
            />
            <TextField
                label="Resizable Multiline Textfield"
                multiline
                resizable={true}
            />
            <TextField
                label="Unresizable Multiline Textfield"
                multiline
                resizable={false}
            />
            <TextField
                label="Underlined Textfield"
                underlined
            />
        </div>
    );
};

export default TextFieldDemo;