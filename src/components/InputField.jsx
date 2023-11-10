import React from "react";

const InputField = ({ label, value, onChange, type = "text" }) => {
  return (
    <div className="flex-col justify-start items-end gap-1 flex">
      <div className="pr-1.5 justify-center items-center inline-flex">
        <div className="origin-top-left rotate-180 text-black text-base font-medium font-['Inter'] leading-snug">
          {label}
        </div>
      </div>
      <div className="w-[325px] h-[42px] pl-2.5 pr-[15px] py-2.5 rounded-md border border-slate-600 justify-end items-start gap-2.5 inline-flex">
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="origin-top-left rotate-180 text-slate-600 text-xs font-normal font-['Inter'] leading-none"
        />
      </div>
    </div>
  );
};

export default InputField;
