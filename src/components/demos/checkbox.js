import React from "react";
import { Checkbox } from "office-ui-fabric-react";

/**
 * Checkbox Demo
 */
const CheckboxDemo = () => {
    // Render the component
    return (
        <div>
            <Checkbox label="Demo" />
            <Checkbox label="Checked by Default" defaultChecked={true} />
            <Checkbox label="Disabled" disabled={true} />
        </div>
    );
};

export default CheckboxDemo;