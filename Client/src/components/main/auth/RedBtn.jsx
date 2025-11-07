const RedBtn = ({ handler, text }) => {
  return (
    <button
      className={`hover:bg-p_red text-white bg-transparent border-2 border-p_red tracking-wider font-semibold w-[15rem] h-[2.5rem] rounded-[0.5em] transition-all duration-300 ease-in`}
      onClick={handler}
    >
      {text}
    </button>
  );
};
export default RedBtn;
