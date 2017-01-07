import React from "react";
import Navigation from "./navigation";
import { Label } from "office-ui-fabric-react";

/**
 * Dashboard
 */
const Dashboard = () => {
    // Render the component
    return (
        <div>
            <Label>Office Fabric UI</Label>
            <Label>This github project will give examples of using the Microsoft Office Fabric UI React framework and Redux.</Label>
            <Navigation />
        </div>
    );
};

export default Dashboard;