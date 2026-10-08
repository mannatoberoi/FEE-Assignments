import React, { useState } from "react";

function App() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    });

    const [errors, setErrors] = useState({});


    function handleChange(e) {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }


    function handleSubmit(e) {

        e.preventDefault();

        let newErrors = {};

        // Name validation
        if (formData.name === "") {
            newErrors.name = "Name is required";
        }
        else if (!/^[A-Za-z ]+$/.test(formData.name)) {
            newErrors.name = "Name should contain only letters";
        }


        // Email validation
        if (formData.email === "") {
            newErrors.email = "Email is required";
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email";
        }


        // Phone validation
        if (formData.phone === "") {
            newErrors.phone = "Phone number is required";
        }
        else if (!/^[0-9]{10}$/.test(formData.phone)) {
            newErrors.phone = "Phone number must be 10 digits";
        }


        // Password validation
        if (formData.password === "") {
            newErrors.password = "Password is required";
        }
        else if (formData.password.length < 6) {
            newErrors.password =
                "Password must be at least 6 characters";
        }


        setErrors(newErrors);


        // If no errors
        if (Object.keys(newErrors).length === 0) {

            alert("Sign Up Successful!");

            console.log(formData);
        }
    }


    return (

        <div className="container">

            <h1>Sign Up</h1>

            <form onSubmit={handleSubmit}>

                {/* NAME */}

                <label>Name</label>

                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                />

                {errors.name && (
                    <p className="error">{errors.name}</p>
                )}


                {/* EMAIL */}

                <label>Email</label>

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                />

                {errors.email && (
                    <p className="error">{errors.email}</p>
                )}


                {/* PHONE */}

                <label>Phone Number</label>

                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter 10 digit phone number"
                />

                {errors.phone && (
                    <p className="error">{errors.phone}</p>
                )}


                {/* PASSWORD */}

                <label>Password</label>

                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                />

                {errors.password && (
                    <p className="error">{errors.password}</p>
                )}


                <button type="submit">
                    Sign Up
                </button>

            </form>

        </div>
    );
}

export default App;