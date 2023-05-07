import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";

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
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="card w-96 bg-white shadow-2xl rounded-md">
        <div className="card-body p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 items-center"
          >
            <div className="input-wrapper flex flex-col w-full max-w-md">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-700"
              >
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
                className="input input-bordered w-full text-gray-700 bg-gray-200 border-gray-400 focus:bg-white focus:border-blue-500"
              />
              {errors.email && (
                <p className="text-xs italic text-red-500 pt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="input-wrapper flex flex-col w-full max-w-md">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-gray-700"
              >
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
                className="input input-bordered w-full text-gray-700 bg-gray-200 border-gray-400 focus:bg-white focus:border-blue-500 "
              />
              {errors.password && (
                <p className="text-xs italic text-red-500 pt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="input-wrapper flex justify-center pt-6">
              <button
                type="submit"
                className={`btn bg-blue-500 text-white ${
                  isLoading ? "loading" : ""
                } bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
              >
                {isLoading ? "Loading..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
