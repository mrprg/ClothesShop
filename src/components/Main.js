import { useSession, signIn, signOut } from "next-auth/react";

export default function Main() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex space-x-4  text-center">
        <p className="text-sm">Signed in as {session.user.email}</p>
        <button
          className="w-100 h-70 bg-black text-white hover:bg-red-600 hover:text-white
          transition-colors duration-500 ease-in-out hover:transition-delay-100 px-4 py-2 rounded-full"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-space w-28 ">
      <p className="text-sm text-gray-400 mb-1 ml-5 ">Not signed in</p>
      <button
        className="ml-3 w-100 h-70 text-sm bg-black text-white hover:bg-red-600 hover:text-white
    transition-colors duration-500 ease-in-out hover:transition-delay-100 px-2 py-2 rounded-full"
        onClick={() => signIn()}
      >
        Sign up
      </button>
    </div>
  );
}
