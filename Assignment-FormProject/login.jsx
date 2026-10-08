import React, { createContext, useReducer, useState } from "react";
const UserContext = createContext();
const initialState = {
  name: "",
  email: "",
  phone: "",
  password: ""
};
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}
function Input({ type, name, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
function Login() {
  const [user, dispatch] = useReducer(reducer, initialState);
  const [errors, setErrors] = useState({});
  function handleChange(e) {
    dispatch({
      name: e.target.name,
      value: e.target.value
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    let newErrors = {};
    if (user.name === "") {
      newErrors.name = "Name is required";
    }
    if (user.email === "") {
      newErrors.email = "Email is required";
    } else if (!user.email.includes("@")) {
      newErrors.email = "Enter valid email";
    }
    if (user.phone === "") {
      newErrors.phone = "Phone number is required";
    } else if (user.phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (user.password === "") {
      newErrors.password = "Password is required";
    } else if (user.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      localStorage.setItem("user", JSON.stringify(user));
      alert("Login Successful");
    }
  }
  return (
    <UserContext.Provider value={user}>
      <div>
       <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={user.name}
            onChange={handleChange}
          />
          <p>{errors.name}</p>
          <Input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={user.email}
            onChange={handleChange}
          />
          <p>{errors.email}</p>
          <Input
            type="text"
            name="phone"
            placeholder="Enter Phone Number"
            value={user.phone}
            onChange={handleChange}
          />
          <p>{errors.phone}</p>
          <Input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={user.password}
            onChange={handleChange}
          />
          <p>{errors.password}</p>
          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </UserContext.Provider>
  );
}

export default Login;