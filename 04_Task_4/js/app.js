import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
    return(<main>
        <h1>Hello World!</h1>
        <span>React Rules!</span>
    </main>)
};



/**
 * Do not modify the code below!
 */
 const container = document.getElementById("app");
 const root = createRoot(container);
 root.render(<App />);