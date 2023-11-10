import React from "react";

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className="w-[325px] px-[4.65px] justify-start items-center gap-[6.19px] inline-flex">
      <div className="w-[15.48px] h-[15.48px] relative">
        <div className="w-[15.48px] h-[15.48px] left-0 top-0 absolute bg-black rounded-sm" />
        <div className="w-[15.48px] h-[15.48px] left-0 top-0 absolute" />
      </div>
      <div className="text-slate-500 text-base font-light font-['Inter'] leading-normal">
        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
          />
          {" "}{label}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
