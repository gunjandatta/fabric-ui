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
            <h1>Office Fabric UI</h1>
            <h3>React Code Examples</h3>
            <Label>
                This <Link href="https://github.com/gunjandatta/fabric-ui">github project</Link> will give examples of using the Microsoft Office Fabric UI components using React and Redux. Refer to
                my <Link href="http://dattabase.com/office-fabric-ui-reactredux-part-1-5">blog post</Link> for a tutorial of developing SharePoint Hosted Add-Ins using the Microsoft Office UI Fabric React framework and Redux.
            </Label>
            <Navigation />
        </div>
    );
};

export default Dashboard;