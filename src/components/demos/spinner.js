import React from "react";
import {
    Label,
    Spinner,
    SpinnerType
} from "office-ui-fabric-react";

/**
 * Spinner Demo
 */
const SpinnerDemo = () => {
    // Render the component
    return (
        <div style={{width: "250px"}}>
            <Label>Default</Label>
            <Spinner
                label="Loading..."
            />

            <Label>Normal with label</Label>
            <Spinner
                label="Loading..."
                type={SpinnerType.normal}
            />

            <Label>Large</Label>
            <Spinner
                type={SpinnerType.large}
            />

            <Label>Large with label</Label>
            <Spinner
                label="Loading..."
                type={SpinnerType.large}
            />
        </div>
    );
};

export default SpinnerDemo;