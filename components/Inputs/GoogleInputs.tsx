import React from "react";


type GoogleInputs = {
  placeholder: string
  name: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  defaultValue?: string
}
const GoogleInputs = ({placeholder,name,value,onChange, defaultValue, }: GoogleInputs) => {
  return (
    <div className="relative mb-3" data-te-input-wrapper-init>
    <input
      type="text"
      className="peer block min-h-[auto] w-full rounded border bg-transparent focus:border-cyan-600 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-cyan-600 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-cyan-600 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
      id="exampleFormControlInput1"
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      
      placeholder="Example label" 
      name={name}/>
    <label
      htmlFor="exampleFormControlInput1"
      className="pointer-events-none peer-focus:px-2 absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:bg-white peer-focus:text-cyan-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-cyan-600"
      >
        {placeholder}
    </label>
  </div>
  );
};

export default GoogleInputs;
