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
import MessageBarDemo from "../demos/messageBar";
import NavDemo from "../demos/nav";
import SliderDemo from "../demos/slider"
import SpinnerDemo from "../demos/spinner";
import TextFieldDemo from "../demos/textField";
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
            <PivotItem linkText="Message Bar">
                <MessageBarDemo />
            </PivotItem>
            <PivotItem linkText="Nav">
                <NavDemo />
            </PivotItem>
            <PivotItem linkText="Slider">
                <SliderDemo />
            </PivotItem>
            <PivotItem linkText="Spinner">
                <SpinnerDemo />
            </PivotItem>
            <PivotItem linkText="Text Field">
                <TextFieldDemo />
            </PivotItem>
        </Pivot>
    );
};

export default Navigation;