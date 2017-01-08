import React from "react";
import ActionTypes from "../../actions/actionTypes";
import BreadcrumbDemo from "../demos/breadcrumb";
import CalloutDemo from "../demos/callout";
import CheckboxDemo from "../demos/checkbox";
import ChoiceGroupDemo from "../demos/choiceGroup";
import CodePanel from "./codePanel";
import ColorPickerDemo from "../demos/colorPicker";
import CommandBarDemo from "../demos/commandBar";
import ContextualMenuDemo from "../demos/contextualMenu";
import DatePickerDemo from "../demos/datePicker";
import DialogDemo from "../demos/dialog";
import DropdownDemo from "../demos/dropdown";
import MessageBarDemo from "../demos/messageBar";
import NavDemo from "../demos/nav";
import SliderDemo from "../demos/slider";
import SpinnerDemo from "../demos/spinner";
import TextFieldDemo from "../demos/textField";
import ToggleDemo from "../demos/toggle";
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
        <div>
            <Pivot>
                <PivotItem linkText="Breadcrumb">
                    <CodePanel codeFile={ActionTypes.Code.breadcrumb} />
                    <BreadcrumbDemo />
                </PivotItem>
                <PivotItem linkText="Callout">
                    <CodePanel codeFile={ActionTypes.Code.callout} />
                    <CalloutDemo />
                </PivotItem>
                <PivotItem linkText="Checkbox">
                    <CodePanel codeFile={ActionTypes.Code.checkbox} />
                    <CheckboxDemo />
                </PivotItem>
                <PivotItem linkText="Choice Group">
                    <CodePanel codeFile={ActionTypes.Code.choiceGroup} />
                    <ChoiceGroupDemo />
                </PivotItem>
                <PivotItem linkText="Color Picker">
                    <CodePanel codeFile={ActionTypes.Code.colorPicker} />
                    <ColorPickerDemo />
                </PivotItem>
                <PivotItem linkText="Command Bar">
                    <CodePanel codeFile={ActionTypes.Code.commandBar} />
                    <CommandBarDemo />
                </PivotItem>
                <PivotItem linkText="Contextual Menu">
                    <CodePanel codeFile={ActionTypes.Code.contextualMenu} />
                    <ContextualMenuDemo />
                </PivotItem>
                <PivotItem linkText="Date Picker">
                    <CodePanel codeFile={ActionTypes.Code.datePicker} />
                    <DatePickerDemo />
                </PivotItem>
                <PivotItem linkText="Dialog">
                    <CodePanel codeFile={ActionTypes.Code.dialog} />
                    <DialogDemo />
                </PivotItem>
                <PivotItem linkText="Dropdown">
                    <CodePanel codeFile={ActionTypes.Code.dropdown} />
                    <DropdownDemo />
                </PivotItem>
                <PivotItem linkText="Message Bar">
                    <CodePanel codeFile={ActionTypes.Code.messageBar} />
                    <MessageBarDemo />
                </PivotItem>
                <PivotItem linkText="Nav">
                    <CodePanel codeFile={ActionTypes.Code.nav} />
                    <NavDemo />
                </PivotItem>
                <PivotItem linkText="Slider">
                    <CodePanel codeFile={ActionTypes.Code.slider} />
                    <SliderDemo />
                </PivotItem>
                <PivotItem linkText="Spinner">
                    <CodePanel codeFile={ActionTypes.Code.spinner} />
                    <SpinnerDemo />
                </PivotItem>
                <PivotItem linkText="Text Field">
                    <CodePanel codeFile={ActionTypes.Code.textField} />
                    <TextFieldDemo />
                </PivotItem>
                <PivotItem linkText="Toggle">
                    <CodePanel codeFile={ActionTypes.Code.toggle} />
                    <ToggleDemo />
                </PivotItem>
            </Pivot>
        </div>
    );
};

export default Navigation;