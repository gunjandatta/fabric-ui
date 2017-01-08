import React from "react";
import { Slider } from "office-ui-fabric-react";

/**
 * Slider Demo
 */
const SliderDemo = () => {
    // Render the component
    return (
        <div style={{width: "250px"}}>
            <Slider
                label="Demo Slider"
                defaultValue={50}
                min={0}
                max={100}
                step={1}
                showValue={true}
            />
        </div>
    );
};

export default SliderDemo;