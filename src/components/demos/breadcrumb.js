import React from "react";
import { Breadcrumb } from "office-ui-fabric-react";

/**
 * Breadcrumb Demo
 */
const BreadcrumbDemo = () => {
    // The click event
    let onClick = (event, item) => {
        // Disable postback
        event.preventDefault();

        // Add an alert        
        alert("You clicked on item: " + item.text);
    };

    // Render the component
    return (
        <Breadcrumb
            items={[
                {
                    key: "1",
                    onClick: (event, item) => onClick(event, item),
                    text: "Link 1"
                },
                {
                    key: "2",
                    onClick: (event, item) => onClick(event, item),
                    text: "Link 2"
                },
                {
                    key: "3",
                    onClick: (event, item) => onClick(event, item),
                    text: "Link 3"
                },
                {
                    key: "4",
                    onClick: (event, item) => onClick(event, item),
                    text: "Link 4"
                },
                {
                    key: "5",
                    onClick: (event, item) => onClick(event, item),
                    text: "Link 5"
                }
            ]}
        />
    );
};

export default BreadcrumbDemo;