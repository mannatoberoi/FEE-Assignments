import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>

            <h1>Counter App</h1>

            <h2 style={{ fontSize: "50px" }}>
                {count}
            </h2>

            <button onClick={() => setCount(count - 1)}>
                −
            </button>

            <button onClick={() => setCount(0)}>
                Reset
            </button>

            <button onClick={() => setCount(count + 1)}>
                +
            </button>

        </div>
    );
}

export default App;