import React from "react";
import { Toggle } from "office-ui-fabric-react";

/**
 * To<ggle Demo
 */
const ToggleDemo = () => {
    // Render the component
    return (
        <div>
            <Toggle
                label="Default"
                onText="On"
                offText="Off"
            />
            <Toggle
                defaultChecked={true}
                label="Enabled"
                onText="On"
                offText="Off"
            />
            <Toggle
                disabled={true}
                label="Disabled"
                onText="On"
                offText="Off"
            />
        </div>
    );
};

export default ToggleDemo;