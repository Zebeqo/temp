import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Example } from "./Example";
import { Refresh } from "./refresh";
import "./styles.css";

const App = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <Example key={count} />
            <Refresh onClick={() => setCount(count + 1)} />
        </>
    );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
