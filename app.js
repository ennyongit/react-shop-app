import React from "react";
import ReactDOM from "react-dom/client";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";

const App = () => {
    return (
        <div>
            <TopHeader/>
            <Header/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);