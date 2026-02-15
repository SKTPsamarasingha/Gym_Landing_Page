import { useState } from "react";
import RegistrationForm from "../../components/main/auth/RegistrationForm.jsx";
import LoginForm from "../../components/main/auth/LoginForm.jsx";
import RedBtn from "../../components/main/auth/RedBtn.jsx";


const AuthPage = ({}) => {
  const [toggleWidth, setToggleWidth] = useState(false);
  const [toggleSide, setToggleSide] = useState(false);
  const [toggleForms, setToggleForms] = useState(false);

  const handleToggle = () => {
    setToggleWidth(true);

    setTimeout(() => {
      setToggleSide(!toggleSide);
      setToggleWidth(false);
    }, 1050);

    setTimeout(() => {
      setToggleForms(!toggleForms);
    }, 1200);
  };

  return (
    //   main container
    <div className={`bg-p_black flex items-center justify-center h-screen `}>
      {/*animation container*/}
      <div
        className={`relative w-[80rem] h-[38.7rem] flex items-center justify-center overflow-hidden rounded-[1rem]`}
      >
        {/*[pages*/}
        <RegistrationForm toggleForms={toggleForms}></RegistrationForm>
        <LoginForm toggleForms={toggleForms}></LoginForm>

        {/*cover*/}

        <div
          className={` border-none z-11
          ${toggleSide ? `rounded-l-[10rem] rounded-r-[0rem]` : `rounded-l-[0rem] rounded-r-[10rem]`}
          ${toggleWidth ? ` w-[110rem] translate-none` : `w-[50rem]`}
         ${toggleSide ? `translate-x-[50%] ` : `-translate-x-[50%]`}
         bg-gradient-to-br from-[#010203] via-[#303841] to-[#DA0037
         absolute  h-full  flex justify-between bg-p_grey  transition-all duration-1000 ease-in`}
        ></div>

        {/*cta container*/}
        <div className={`absolute h-full w-full flex  `}>
          {/*  cta btns*/}

          <div
            className={` z-12 ${toggleSide ? `-translate-x-[100%] opacity-0` : `-translate-x-[0%] opacity-100`} 
            flex flex-col items-center justify-center
            bg-transparent text-white w-[50%] h-[40rem] transition-all duration-1200 ease-in-out  `}
          >
            <h1
              className={`text-[3rem] text-p_red   font-semibold tracking-wide mb-1`}
            >
              Hello Welcome to <span className={"text-p_black"}>RP!</span>
            </h1>
            <h3
              className={`mb-10 text-[18px] text-white  font-semibold tracking-wide mb-1`}
            >
              Don't Have an Account ?
            </h3>
            <RedBtn handler={handleToggle} text={"Sign Up"} />
          </div>

          {/*register*/}
          <div
            className={`z-12 ${toggleSide ? `translate-x-[0%] opacity-100` : `translate-x-[100%] opacity-0 `} 
             flex flex-col items-center justify-center
             bg-transparent text-p_gray  w-[50%] h-[40rem] transition-all duration-1200 ease-in-out`}
          >
            <h1
              className={`text-[3rem] text-p_red font-semibold tracking-wide mb-1`}
            >
              Welcome Back to <span className={"text-black"}>RP !</span>
            </h1>
            <h3
              className={`mb-10 text-[18px] text-white font-semibold tracking-wide mb-1`}
            >
              Already have an Account ?
            </h3>
            <RedBtn handler={handleToggle} text={"Sign In"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
