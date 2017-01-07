import React from "react";
import { CommandBar } from "office-ui-fabric-react";

/**
 * Command Bar Demo
 */
const CommandBarDemo = () => {
    // Render the component
    return (
        <CommandBar
            isSearchBoxVisible={true}
            items={[
                {
                    key: "test",
                    name: "Test"
                }
            ]}
        />
    );
};

export default CommandBarDemo;