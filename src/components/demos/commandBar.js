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
                            key: 'emailMessage',
                            name: 'Email message',
                            icon: 'Mail'
                        },
                        {
                            key: 'calendarEvent',
                            name: 'Calendar event',
                            icon: 'Calendar'
                        }
                    ]
                },
                {
                    key: "upload",
                    name: 'Upload',
                    icon: "Upload"
                }
            ]}
            farItems={[
                {
                    key: 'sort',
                    name: 'Sort',
                    icon: 'SortLines'
                },
                {
                    key: 'tile',
                    name: 'Grid view',
                    icon: 'Tiles'
                },
                {
                    key: 'info',
                    name: 'Info',
                    icon: 'Info'
                }
            ]}
        />
    );
};

export default CommandBarDemo;