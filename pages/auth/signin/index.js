import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  Player,
  Controls,
} from "@lottiefiles/react-lottie-player";
import { toast } from "react-toastify";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // Form submission handler
  const onSubmit = async (data) => {
    setIsLoading(true);
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res?.error) {
      toast.error("Email or Password is incorrect", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      setIsLoading(false);
    } else {
      router.push("/");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-[100vh] w-full">
      <div className="flex">
        <div className="mr-[100px] max-[840px]:hidden">
          <Player
            autoplay
            loop
            src="https://assets3.lottiefiles.com/packages/lf20_nc1bp7st.json"
            className=""></Player>
        </div>
        <div className="">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center">
              <svg
                className="w-[40px] mr-2"
                viewBox="0 0 1024 1024"
                class="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M351.8 663.1h-38.3C159.2 663.1 33 536.9 33 382.6V314C33 159.7 159.2 33.5 313.5 33.5h38.3c154.3 0 280.5 126.2 280.5 280.5v68.6c0 154.3-126.2 280.5-280.5 280.5z"
                  fill="#60C13D"
                />
                <path
                  d="M351.8 673.1h-38.3c-77.3 0-150.2-30.3-205.2-85.3S23 459.9 23 382.6V314c0-77.3 30.3-150.2 85.3-205.2s127.9-85.3 205.2-85.3h38.3c77.3 0 150.2 30.3 205.2 85.3s85.3 127.9 85.3 205.2v68.6c0 77.3-30.3 150.2-85.3 205.2s-127.9 85.3-205.2 85.3zM313.5 43.5c-71.9 0-139.8 28.2-191 79.5C71.2 174.2 43 242 43 314v68.6c0 71.9 28.2 139.8 79.5 191 51.2 51.2 119.1 79.5 191 79.5h38.3c71.9 0 139.8-28.2 191-79.5 51.2-51.2 79.5-119.1 79.5-191V314c0-71.9-28.2-139.8-79.5-191-51.2-51.2-119.1-79.5-191-79.5h-38.3z"
                  fill=""
                />
                <path
                  d="M332.7 865c-5.5 0-10-4.5-10-10V306.5c0-5.5 4.5-10 10-10s10 4.5 10 10V855c0 5.5-4.5 10-10 10z"
                  fill=""
                />
                <path
                  d="M332.7 560.4c-2.3 0-4.6-0.8-6.5-2.4l-116.4-99.2c-4.2-3.6-4.7-9.9-1.1-14.1 3.6-4.2 9.9-4.7 14.1-1.1l116.4 99.2c4.2 3.6 4.7 9.9 1.1 14.1-2 2.3-4.8 3.5-7.6 3.5zM332.7 470.7c-2.7 0-5.4-1.1-7.4-3.3-3.7-4.1-3.4-10.4 0.6-14.1l93.4-85.4c4.1-3.7 10.4-3.4 14.1 0.6 3.7 4.1 3.4 10.4-0.6 14.1L339.4 468c-1.9 1.8-4.3 2.7-6.7 2.7zM392.5 865H272.8c-5.5 0-10-4.5-10-10s4.5-10 10-10h119.7c5.5 0 10 4.5 10 10s-4.5 10-10 10z"
                  fill=""
                />
                <path
                  d="M707.3 732H669c-153.7 0-279.5-125.8-279.5-279.5v-69.6c0-154.3 126.2-280.5 280.5-280.5h38.3c154.3 0 280.5 126.2 280.5 280.5v67.6c0 154.8-126.7 281.5-281.5 281.5z"
                  fill="#63CC37"
                />
                <path
                  d="M707.3 742H669c-77 0-149.6-30.2-204.5-85-54.8-54.8-85-127.5-85-204.5v-69.6c0-77.3 30.3-150.2 85.3-205.2S592.7 92.4 670 92.4h38.3c77.3 0 150.2 30.3 205.2 85.3s85.3 127.9 85.3 205.2v67.6c0 77.6-30.4 150.7-85.6 205.9-55.3 55.2-128.4 85.6-205.9 85.6z m-37.4-629.6c-71.9 0-139.8 28.2-191 79.5-51.2 51.2-79.5 119.1-79.5 191v69.6c0 71.7 28.1 139.3 79.2 190.3 51.1 51.1 118.7 79.2 190.3 79.2h38.3c72.2 0 140.3-28.3 191.7-79.8 51.4-51.4 79.8-119.5 79.8-191.7v-67.6c0-71.9-28.2-139.8-79.5-191-51.2-51.2-119.1-79.5-191-79.5h-38.3z"
                  fill=""
                />
                <path
                  d="M689.1 933.9c-5.5 0-10-4.5-10-10V375.4c0-5.5 4.5-10 10-10s10 4.5 10 10v548.5c0 5.5-4.5 10-10 10z"
                  fill=""
                />
                <path
                  d="M689.1 629.4c-2.3 0-4.6-0.8-6.5-2.4l-116.4-99.2c-4.2-3.6-4.7-9.9-1.1-14.1 3.6-4.2 9.9-4.7 14.1-1.1l116.4 99.2c4.2 3.6 4.7 9.9 1.1 14.1-2 2.3-4.8 3.5-7.6 3.5zM689.1 539.6c-2.7 0-5.4-1.1-7.4-3.3-3.7-4.1-3.4-10.4 0.6-14.1l93.4-85.4c4.1-3.7 10.4-3.4 14.1 0.6 3.7 4.1 3.4 10.4-0.6 14.1L695.8 537c-1.9 1.7-4.3 2.6-6.7 2.6zM748.9 933.9H629.2c-5.5 0-10-4.5-10-10s4.5-10 10-10h119.7c5.5 0 10 4.5 10 10s-4.4 10-10 10zM541.6 1005.6H421.9c-5.5 0-10-4.5-10-10s4.5-10 10-10h119.7c5.5 0 10 4.5 10 10s-4.5 10-10 10z"
                  fill=""
                />
                <path
                  d="M499.9 800.9h-38.3C307.8 800.9 182 675.2 182 521.4v-69.6c0-154.3 126.2-280.5 280.5-280.5h38.3c154.3 0 280.5 126.2 280.5 280.5v67.6c0.1 154.9-126.6 281.5-281.4 281.5z"
                  fill="#6FE852"
                />
                <path
                  d="M499.9 810.9h-38.3c-77 0-149.6-30.2-204.5-85-54.8-54.8-85-127.5-85-204.5v-69.6c0-77.3 30.3-150.2 85.3-205.2s127.9-85.3 205.2-85.3h38.3c77.3 0 150.2 30.3 205.2 85.3s85.3 127.9 85.3 205.2v67.6c0 77.6-30.4 150.7-85.6 205.9-55.2 55.2-128.4 85.6-205.9 85.6z m-37.4-629.6c-71.9 0-139.8 28.2-191 79.5-51.2 51.2-79.5 119.1-79.5 191v69.6c0 71.7 28.1 139.3 79.2 190.3 51.1 51.1 118.7 79.2 190.3 79.2h38.3c72.2 0 140.3-28.3 191.7-79.8 51.4-51.4 79.8-119.5 79.8-191.7v-67.6c0-71.9-28.2-139.8-79.5-191-51.2-51.2-119.1-79.5-191-79.5h-38.3z"
                  fill=""
                />
                <path
                  d="M481.7 1002.8c-5.5 0-10-4.5-10-10V444.3c0-5.5 4.5-10 10-10s10 4.5 10 10v548.5c0 5.5-4.5 10-10 10z"
                  fill=""
                />
                <path
                  d="M481.7 698.3c-2.3 0-4.6-0.8-6.5-2.4l-116.4-99.2c-4.2-3.6-4.7-9.9-1.1-14.1s9.9-4.7 14.1-1.1l116.4 99.2c4.2 3.6 4.7 9.9 1.1 14.1-2 2.3-4.8 3.5-7.6 3.5zM481.7 608.5c-2.7 0-5.4-1.1-7.4-3.3-3.7-4.1-3.4-10.4 0.6-14.1l93.4-85.4c4.1-3.7 10.4-3.4 14.1 0.6 3.7 4.1 3.4 10.4-0.6 14.1l-93.4 85.4c-1.9 1.8-4.3 2.7-6.7 2.7z"
                  fill=""
                />
              </svg>
              <h1 className="font-bold text-[30px] mt-[10px] mb-[20px] mr-[15px] text-blue-800">
                خوش آمدید
              </h1>
            </div>
            <div className="mb-[18px] flex items-center justify-center">
              <svg
                className="w-[20px] animate-bounce"
                viewBox="-25 0 98 98"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.3411 74.1924C18.3411 72.0809 18.3411 69.7582 18.3411 67.6467C18.5525 49.0651 18.9754 30.2725 19.1869 11.6909C19.1869 9.57939 19.1869 7.679 19.3984 5.56747C19.6098 2.82247 20.2442 -0.555987 23.8389 0.0774737C25.3191 0.288627 27.0108 3.45593 27.2222 5.35632C28.0681 20.9817 28.7024 36.3959 29.3368 52.0213C29.5483 55.6109 29.3368 59.2005 31.2399 63.0013C33.7774 58.7782 35.892 54.344 38.6409 50.332C39.9096 48.4317 43.0815 46.3201 44.9846 46.7424C48.7908 47.5871 48.3679 51.8101 47.0992 54.344C41.6013 67.0132 36.1034 79.8936 29.5483 92.1405C25.3191 99.9532 18.9754 99.9532 14.7463 92.1405C9.03698 81.7939 4.80785 70.6028 0.155803 59.834C-0.478567 58.567 1.00163 56.4555 1.42454 54.7663C3.11619 55.3997 5.65367 55.3997 6.4995 56.6667C8.61407 59.2005 9.88281 62.579 11.5745 65.5351C13.2661 68.7024 14.9578 71.8697 16.6494 74.8259C17.0723 74.4036 17.7067 74.1924 18.3411 74.1924Z"
                  fill="#0D1927"
                />
              </svg>
              <h2 className="font-bold text-[24px] ml-[5px]">
                عضویت
              </h2>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="">
              {/* Email */}
              <div className="flex flex-col items-center justify-center mr-[10px]">
                <div className="mb-[15px]">
                  <label
                    htmlFor="email"
                    className="mr-[10px] font-semibold text-[18px]">
                    ایمیل
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="E-mail"
                    className="bg-blue-100 outline-none pl-3 w-[220px] h-[35px] rounded-xl placeholder:font-medium"
                  />
                  {errors.email && (
                    <p className="text-red-500 font-medium ml-[50px] mt-[5px]">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              {/* password */}
              <div className="flex flex-col items-center justify-center mr-[30px]">
                <div className="mb-[15px]">
                  <label
                    htmlFor="password"
                    className="mr-[10px] font-semibold text-[18px]">
                    رمز عبور
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "",
                      },
                    })}
                    placeholder="Password"
                    className="bg-blue-100 outline-none pl-3 w-[220px] h-[35px] rounded-xl placeholder:font-medium"
                  />
                  {errors.password && (
                    <p className="text-red-500 font-medium ml-[72px] mt-[5px]">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-center mt-6">
                <button
                  type="submit"
                  className={` 
                  bg-blue-500 text-white font-medium text-[20px] rounded-2xl px-8 py-4 hover:bg-green-500 active:scale-90 transition-all
                  ${isLoading ? "صبر کنید" : ""} `}>
                  {isLoading ? "...صبر کنید" : "عضویت"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
