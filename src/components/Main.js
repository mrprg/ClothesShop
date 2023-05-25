import { useSession, signIn, signOut } from "next-auth/react";

export default function Main() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex space-x-4  text-center">
        <p className="text-lg">Signed in as {session.user.email}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    );
  }
  return (
    <div className=" flex space-x-4 text-center">
      <p className="text-lg text-gray-400">Not signed in</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        onClick={() => signIn()}
      >
        Sign up
      </button>
    </div>
  );
}
