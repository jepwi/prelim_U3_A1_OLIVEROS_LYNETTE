import React, { useState } from "react";
const InputComponent = () => {
  // State for the individual name parts and full name
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [isFullNameVisible, setIsFullNameVisible] = useState(false); // State to manage visibility
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "middleName") {
      setMiddleName(value);
    } else if (name === "lastName") {
      setLastName(value);
    }
  };
  // Handle click to submit the full name
  const handleClick = () => {
    setFullName(`${firstName} ${middleName} ${lastName}`);
  };
  // Handle toggle visibility of full name
  const toggleVisibility = () => {
    setIsFullNameVisible(!isFullNameVisible);
  };
  return (
    <div>
      <input
        type="text"
        name="firstName"
        value={firstName}
        onChange={handleInputChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="middleName"
        value={middleName}
        onChange={handleInputChange}
        placeholder="Middle Name"
      />
      <input
        type="text"
        name="lastName"
        value={lastName}
        onChange={handleInputChange}
        placeholder="Last Name"
      />
      <button onClick={handleClick}>Submit</button>
      {/* Show or hide the full name */}
      {isFullNameVisible && <p>Full Name: {fullName}</p>}
      <button onClick={toggleVisibility}>
        {isFullNameVisible ? "Hide" : "Show"} Full Name
      </button>
    </div>
  );
};
export default InputComponent;
