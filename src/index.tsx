import React from 'react';
import "./assets/index.scss";
import Pages from './Pages';
import ReactDOM from "react-dom/client";

const Application: React.FC<{}>  = () => (
    <Pages/>
)
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<Application />);