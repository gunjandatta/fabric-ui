/**
 * Action Types
 */
const ActionTypes = {
    // Code
    Code: {
        breadcrumb: "breadcrumb",
        callout: "callout",
        checkbox: "checkbox",
        choiceGroup: "choiceGroup",
        colorPicker: "colorPicker",
        commandBar: "commandBar",
        contextualMenu: "contextualMenu",
        datePicker: "datePicker",
        dialog: "dialog",
        dropdown: "dropdown",
        dialog: "dialog",
        dropdown: "dropdown",
        messageBar: "messageBar",
        nav: "nav",
        slider: "slider",
        spinner: "spinner",
        textField: "textField",
        toggle: "toggle"
    },
    // Hide Actions
    Hide: {
        Dialog: "HideDialog",
        Callout: "HideCallout",
        ContextualMenu: "HideContextualMenu",
        Panel: "HidePanel"
    },
    // Show Actions
    Show: {
        Dialog: "ShowDialog",
        Callout: "ShowCallout",
        ContextualMenu: "ShowContextualMenu",
        Panel: "ShowPanel"
    }
};

export default ActionTypes;