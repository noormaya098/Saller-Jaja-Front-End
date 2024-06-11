import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import All from "../../assets/login/All.png"
import BG from "../../assets/login/Login.png"
import Logo from "../../assets/login/LogoJaja.png"
import Saller from "../../assets/login/shop.png"
import Forgot from "../../assets/dompetku/Forgot.png"


export function SignIn() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${BG})` }}>
      
      <div className="bg-white rounded-[3rem] m-10 p-5 flex gap-4">
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src={All}
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      <div className="w-full lg:w-3/5 mt-24">
        <div className="text-center">
          <div className="flex justify-center items-center mb-10">
            <img src={Logo} alt="" className="w-52 h-28" />
          </div>
          <div className=" text-[#6A6A6A] mb-4 text-xl">Welcome to</div>
          <div className="flex justify-center items-center space-x-6">
            <img src={Saller} alt="" className="w-10 h-8"/> <span>
              <i className="font-bold text-3xl">Saller</i> <i className="text-3xl ">Center</i>
            </span>
          </div>
        </div>
       
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
          <div className="relative mb-3">
            <input
              type="text"
              className="peer block w-full min-h-[auto] rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 peer-focus:text-primary placeholder-opacity-0 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary border border-[#438196]"
              id="exampleFormControlInput2"
              placeholder="Email"
            />
            <label
              htmlFor="exampleFormControlInput2"
              className="text-lg font-semibold bg-white pointer-events-none absolute left-3 top-[-3px] mb-0 max-w-[90%] truncate origin-[0_0] pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary dark:text-neutral-400 dark:peer-focus:text-primary -translate-y-[1.15rem] scale-[0.8]"
            >
              Email
            </label>
          </div>   
          <div className="relative mb-3">
            <input
              type="text"
              className="peer block w-full min-h-[auto] rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 peer-focus:text-primary placeholder-opacity-0 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary border border-[#438196]"
              id="exampleFormControlInput2"
              placeholder="Password"
            />
            <label
              htmlFor="exampleFormControlInput2"
              className="text-lg font-semibold bg-white pointer-events-none absolute left-3 top-[-3px] mb-0 max-w-[90%] truncate origin-[0_0] pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary dark:text-neutral-400 dark:peer-focus:text-primary -translate-y-[1.15rem] scale-[0.8]"
            >
              Password
            </label>
          </div>   

          <div className="w-full flex  justify-end items-end">
           <div className="flex">
              <img src={Forgot} alt="" className="w-9 h-9" /> <span className="text-lg ml-2 text-[#FDB739] font-bold">
              <Link to="/auth/forgort-password" className="text-[#FDB739] ml-1">Lupa Password?</Link>  
                </span>
           </div>
          </div>
          </div>
          
          <Button className="mt-6 bg-[#438196] h-12" fullWidth >
            Login
          </Button>
          <Button className="mt-6 bg-transparent border border-[#FDB739] text-[#FDB739] h-12" fullWidth >
            Login Via Google
          </Button>

          {/* <div className="flex items-center justify-between gap-2 mt-6">
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center justify-start font-medium"
                >
                  Subscribe me to newsletter
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Typography variant="small" className="font-medium text-gray-900">
              <a href="#">
                Forgot Password
              </a>
            </Typography>
          </div> */}
          {/* <div className="space-y-4 mt-8">
            <Button size="lg" color="white" className="flex items-center gap-2 justify-center shadow-md" fullWidth>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1156_824)">
                  <path d="M16.3442 8.18429C16.3442 7.64047 16.3001 7.09371 16.206 6.55872H8.66016V9.63937H12.9813C12.802 10.6329 12.2258 11.5119 11.3822 12.0704V14.0693H13.9602C15.4741 12.6759 16.3442 10.6182 16.3442 8.18429Z" fill="#4285F4" />
                  <path d="M8.65974 16.0006C10.8174 16.0006 12.637 15.2922 13.9627 14.0693L11.3847 12.0704C10.6675 12.5584 9.7415 12.8347 8.66268 12.8347C6.5756 12.8347 4.80598 11.4266 4.17104 9.53357H1.51074V11.5942C2.86882 14.2956 5.63494 16.0006 8.65974 16.0006Z" fill="#34A853" />
                  <path d="M4.16852 9.53356C3.83341 8.53999 3.83341 7.46411 4.16852 6.47054V4.40991H1.51116C0.376489 6.67043 0.376489 9.33367 1.51116 11.5942L4.16852 9.53356Z" fill="#FBBC04" />
                  <path d="M8.65974 3.16644C9.80029 3.1488 10.9026 3.57798 11.7286 4.36578L14.0127 2.08174C12.5664 0.72367 10.6469 -0.0229773 8.65974 0.000539111C5.63494 0.000539111 2.86882 1.70548 1.51074 4.40987L4.1681 6.4705C4.8001 4.57449 6.57266 3.16644 8.65974 3.16644Z" fill="#EA4335" />
                </g>
                <defs>
                  <clipPath id="clip0_1156_824">
                    <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <span>Sign in With Google</span>
            </Button>
            <Button size="lg" color="white" className="flex items-center gap-2 justify-center shadow-md" fullWidth>
              <img src="/img/twitter-logo.svg" height={24} width={24} alt="" />
              <span>Sign in With Twitter</span>
            </Button>
          </div> */}
          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            Belum Punya Akun?
            <Link to="/auth/sign-up" className="text-gray-900 ml-1">Buat akun disini!</Link>
          </Typography>

          <div className="flex justify-center items-center mt-8">
                <div className="text-center w-[17rem] text-[#BEBEBE]">
                    Copyright © 2024 All Right Reserved Jaja ID.
                </div>
          </div>
        </form>

      </div>
      </div>

    </section>
  );
}

export default SignIn;
