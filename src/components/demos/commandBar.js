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
                    key: "newRequest",
                    name: "New",
                    icon: "Add",
                    ariaLabel: 'New. Use left and right arrow keys to navigate',
                    onClick: event => event.preventDefault(),
                    items: [
                        {
                            key: "emailMessage",
                            name: "Email Message",
                            icon: "Mail"
                        },
                        {
                            key: "calendarEvent",
                            name: "Calendar Event",
                            icon: "Calendar"
                        }
                    ]
                },
                {
                    key: "upload",
                    name: "Upload",
                    icon: "Upload"
                }
            ]}
            farItems={[
                {
                    key: "sort",
                    name: "Sort",
                    icon: "SortLines"
                },
                {
                    key: "grid",
                    name: "Grid View",
                    icon: "Tiles"
                },
                {
                    key: "info",
                    name: "Info",
                    icon: "Info"
                }
            ]}
        />
    );
};

export default CommandBarDemo;