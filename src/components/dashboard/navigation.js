import React from "react";
import BreadcrumbDemo from "../demos/breadcrumb";
import CalloutDemo from "../demos/callout";
import CheckboxDemo from "../demos/checkbox";
import ChoiceGroupDemo from "../demos/choiceGroup";
import ColorPickerDemo from "../demos/colorPicker";
import CommandBarDemo from "../demos/commandBar";
import ContextualMenuDemo from "../demos/contextualMenu";
import DatePickerDemo from "../demos/datePicker";
import DialogDemo from "../demos/dialog";
import DropdownDemo from "../demos/dropdown";
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
            <PivotItem linkText="Choice Group">
                <ChoiceGroupDemo />
            </PivotItem>
            <PivotItem linkText="Color Picker">
                <ColorPickerDemo />
            </PivotItem>
            <PivotItem linkText="Command Bar">
                <CommandBarDemo />
            </PivotItem>
            <PivotItem linkText="Contextual Menu">
                <ContextualMenuDemo />
            </PivotItem>
            <PivotItem linkText="Date Picker">
                <DatePickerDemo />
            </PivotItem>
            <PivotItem linkText="Dialog">
                <DialogDemo />
            </PivotItem>
            <PivotItem linkText="Dropdown">
                <DropdownDemo />
            </PivotItem>
        </Pivot>
    );
};

export default Navigation;