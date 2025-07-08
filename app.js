import React from "react";
import ReactDOM from "react-dom/client";


const App = () => {
    return (
        <div>
            hello react
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);