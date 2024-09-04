import React from "react";
import AppRoutes from "./routes";

const App = () => {
    if (window.location.protocol === 'http:') {
        window.location.href = `https://${window.location.host}${window.location.pathname}`;
    }

    return (
        <div>
            <AppRoutes />
        </div>
    );
};

export default App;
