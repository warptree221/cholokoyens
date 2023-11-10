import React from "react";

const SignUpButton = ({ onClick }) => {
  return (
    <div className="w-[325px] h-[42px] px-3 py-4 bg-black rounded-md justify-center items-center inline-flex">
      <button onClick={onClick} className="w-40 text-center text-white text-base font-semibold font-['Inter'] leading-normal">
        Sign Up
      </button>
    </div>
  );
};

export default SignUpButton;
