import React from "react";
import ReactDOM from "react-dom/client";
import TopHeader from "./components/TopHeader";


const App = () => {
    return (
        <div>
            <TopHeader/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);