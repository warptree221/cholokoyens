import React, { useState } from "react";
import InputField from "./InputField";
import Checkbox from "./Checkbox";
import SignUpButton from "./SignUpButton";
import "./SignUpForm.css";

const SignUpForm = () => {
  const [name, setName] = useState("Juan Dela Cruz");
  const [email, setEmail] = useState("johndoe@email.com");
  const [password, setPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTermsChange = () => {
    setAgreedToTerms(!agreedToTerms);
  };

  const handleSignUp = () => {
    if (name && email && password && agreedToTerms) {
      
      console.log("Signing up...");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Password:", password);

      setName("");
      setEmail("");
      setPassword("");
      setAgreedToTerms(false);
    } else {
      console.log("Please fill in all the required fields and agree to the terms.");
    }
  };

  return (
    <div className="w-[430px] h-[932px] relative origin-top-left rotate-180 bg-white">
      <InputField label="Name" value={name} onChange={handleNameChange} />
      <InputField label="Email Address" value={email} onChange={handleEmailChange} />
      <InputField label="Password" type="password" value={password} onChange={handlePasswordChange} />
      <Checkbox label="Do you Agree with the Terms and Conditions" checked={agreedToTerms} onChange={handleTermsChange} />
      <SignUpButton onClick={handleSignUp} />
    </div>
  );
};

export default SignUpForm;


