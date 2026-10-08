import { useState } from "react";

function ProductCard({ emoji, name, description, price }) {

    const [added, setAdded] = useState(false);

    return (
        <div style={{
            width: "250px",
            padding: "20px",
            background: "white",
            borderRadius: "15px",
            boxShadow: "0 5px 15px #ccc",
            textAlign: "center"
        }}>

            <div style={{
                height: "180px",
                background: "#eee",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "70px"
            }}>
                {emoji}
            </div>

            <h2>{name}</h2>

            <p>{description}</p>

            <h3>₹{price}</h3>

            <button
                onClick={() => setAdded(true)}
                style={{
                    width: "100%",
                    padding: "12px",
                    background: added ? "green" : "black",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer"
                }}
            >
                {added ? "Added ✓" : "Add to Cart"}
            </button>

        </div>
    );
}


function App() {

    return (
        <div>

            <h1 style={{ textAlign: "center" }}>
                Products
            </h1>

            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "25px",
                flexWrap: "wrap"
            }}>

                <ProductCard
                    emoji="👟"
                    name="Running Shoes"
                    description="Comfortable running shoes"
                    price="2,999"
                />

                <ProductCard
                    emoji="⌚"
                    name="Smart Watch"
                    description="Modern smartwatch"
                    price="4,999"
                />

                <ProductCard
                    emoji="🎧"
                    name="Headphones"
                    description="Wireless headphones"
                    price="1,999"
                />

            </div>

        </div>
    );
}

export default App;