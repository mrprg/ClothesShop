
import { signIn } from "next-auth/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useSession } from "next-auth/react";

interface IFormInput {
  username: String;
  email: String;
  password: String;
}

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // Form submission handler
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
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
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title pb-6">Login</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2"
          >
            <div className="input-wrapper flex flex-col">
              <label htmlFor="email" className="block text-sm text-black">
                Email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="input input-bordered w-full text-black border-black"
              />
              {errors.email && (
                <p className="text-xs italic text-red-500 pt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="input-wrapper flex flex-col">
              <label htmlFor="password" className="block text-sm text-black">
                Password
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                className="input input-bordered w-full text-black border-black"
              />
              {errors.password && (
                <p className="text-xs italic text-red-500 pt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="input-wrapper flex justify-center pt-6">
              {
                <button
                  type="submit"
                  className={`btn ${isLoading ? "loading" : ""}`}
                >
                  Submit
                </button>
              }
            </div>
          </form>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          pauseOnHover={false}
          theme="light"
        />
      </div>
    </div>
  );
}






// import { NextPage } from "next";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/router";
// import { FormEventHandler, useState } from "react";
// import { useForm } from "react-hook-form";



// interface IFormInput {
//     username: String;
//     email: String;
//     password: String;
//   }
// interface Props {}

// const SignIn: NextPage = (props): JSX.Element => {
//     // console.log("test");

// const [userInfo, setUserInfo] = useState({ email: "", password: "" });
// const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
//     // validate your userinfo
//     e.preventDefault();

//     const res = await signIn("credentials", {
//     email: userInfo.email,
//     password: userInfo.password,
//     redirect: false,
//     });

//     console.log(res);
// };
// export default function SignIn() {
//     const {
//       register,
//       handleSubmit,
//       formState: { errors },
//     } = useForm<IFormInput>();
//     const router = useRouter();
//     const [isLoading, setIsLoading] = useState(false);
// return (
//     <div className="sign-in-form">
//     <form onSubmit={handleSubmit}>
//         <h1>Login</h1>
//         <input
//         value={userInfo.email}
//         onChange={({ target }) =>
//             setUserInfo({ ...userInfo, email: target.value })
//         }
//         type="email"
//         placeholder="john@email.com"
//         />
//         <input
//         value={userInfo.password}
//         onChange={({ target }) =>
//             setUserInfo({ ...userInfo, password: target.value })
//         }
//         type="password"
//         placeholder="********"
//         />
//         <input type="submit" value="Login" />
//     </form>
//     </div>
// );
// };

// export default SignIn;