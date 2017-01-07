import React from "react";
import BreadcrumbDemo from "../demos/breadcrumb";
import CalloutDemo from "../demos/callout";
import CheckboxDemo from "../demos/checkbox";
import CommandBarDemo from "../demos/commandBar";
import DialogDemo from "../demos/dialog";
import {
    Pivot,
    PivotItem
} from "office-ui-fabric-react";

/**
 * Navigation
 */
const Navigation = () => {
    // Render the component
    return (
        <Pivot>
            <PivotItem linkText="Breadcrumb">
                <BreadcrumbDemo />
            </PivotItem>
            <PivotItem linkText="Callout">
                <CalloutDemo />
            </PivotItem>
            <PivotItem linkText="Checkbox">
                <CheckboxDemo />
            </PivotItem>
            <PivotItem linkText="Command Bar">
                <CommandBarDemo />
            </PivotItem>
            <PivotItem linkText="Dialog">
                <DialogDemo />
            </PivotItem>
        </Pivot>
    );
};

export default Navigation;