import React from "react";
import Navigation from "./navigation";
import {
    Label,
    Link
} from "office-ui-fabric-react";

/**
 * Dashboard
 */
const Dashboard = () => {
    // Render the component
    return (
        <div>
            <Label>Office Fabric UI</Label>
            <Label>This <Link href="https://github.com/gunjandatta/fabric-ui">github project</Link> will give examples of using the Microsoft Office Fabric UI React framework and Redux.</Label>
            <Navigation />
        </div>
    );
};

export default Dashboard;