const Input = ({ type, name, required, error, icon, placeholder }) => {
  return (
    <div className={`relative w-[20rem] h-[2.2rem]  rounded-md bg-p_darkgrey`}>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className={`z-5 bg-p_darkgrey w-[18rem] h-[2rem] text-[14px] text-white cursor-pointer pl-1 rounded-md border-none focus:outline-none`}
      />
      <span className={`z-3 absolute top-2 right-2 text-white`}>{icon}</span>
      <span className={`text-p_red text-[12px] pl-1 opacity-0`}>{error}</span>
    </div>
  );
};

export default Input;
