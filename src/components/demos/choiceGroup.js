import React from "react";
import { ChoiceGroup } from "office-ui-fabric-react";

/**
 * Choice Group Demo
 */
const ChoiceGroupDemo = () => {
    // Render the component
    return (
        <div>
            <ChoiceGroup
                options={[
                    {
                        key: 'A',
                        text: 'Option A'
                    },
                    {
                        key: 'B',
                        text: 'Option B',
                        checked: true
                    },
                    {
                        key: 'C',
                        text: 'Option C'
                    },
                    {
                        key: 'D',
                        text: 'Option D',
                        disabled: true
                    }
                ]}
            />
        </div>
    );
};

export default ChoiceGroupDemo;