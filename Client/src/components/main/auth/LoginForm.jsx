import Input from "./Input.jsx";
import {
  FaEnvelope,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaKey,
  FaWhatsapp,
} from "react-icons/fa";
import RedBtn from "./RedBtn.jsx";

const LoginForm = ({ toggleForms }) => {
  const handleSubmit = (e) => {};
  return (
    <div
      className={` 
     ${toggleForms ? `-translate-x-[10rem] z-0` : `-translate-x-[0rem] z-10`} 
    flex flex-col items-center w-[40rem] h-[38rem] transition-all duration-1000 ease-in-out border- border-white`}
    >
      <h2
        className={`text-white text-[3rem] font-semibold  tracking-wide mt-15`}
      >
        SIGN IN.
      </h2>
      {/*input wrapper*/}
      <form className={`mt-20 flex flex-col items-center gap-8`}>
        <Input
          type={"email"}
          name={"email"}
          required={true}
          error={"Wrong Email"}
          placeholder={"Email"}
          icon={<FaEnvelope />}
        ></Input>

        <Input
          type={"password"}
          name={"password"}
          required={true}
          error={"Wrong Password"}
          placeholder={"Password"}
          icon={<FaKey />}
        ></Input>

        <RedBtn handler={handleSubmit} text={"Sign In"}></RedBtn>
      </form>
      <div className={"mt-5 flex items-center"}>
        <div className={`w-[8rem] h-[1px] bg-p_grey `}></div>
        <h1 className={`text-p_red ml-1 mr-1`}>OR</h1>
        <div className={`w-[8rem] h-[1px] bg-p_grey `}></div>
      </div>

      {/*  OAuth wrapper*/}
      <div className={"mt-5 flex gap-5"}>
        <FaGoogle
          className={`hover:text-blue-700  transition-all duration-500 ease-in-out  text-[2rem] text-p_grey `}
        ></FaGoogle>

        <FaFacebook
          className={`hover:text-blue-700  transition-all duration-500 ease-in-out  text-[2rem] text-p_grey `}
        ></FaFacebook>

        <FaWhatsapp
          className={`hover:text-green-700  transition-all duration-500 ease-in-out  text-[2rem] text-p_grey `}
        ></FaWhatsapp>

        <div className={`group flex flex-col items-center cursor-pointer`}>
          <FaInstagram
            className={` group-hover:text-black group-hover:bg-gradient-to-br from-pink via-blue to-yellow  transition-all duration-500 ease-in-out text-p_grey  text-[2rem] rounded`}
          ></FaInstagram>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
