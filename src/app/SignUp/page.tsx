import { FaGoogle } from "react-icons/fa";
import Link from "next/link";

export default function Signup() {
  const inputStyle = "bg-white rounded-2xl w-full mb-6 text-lg h-9";

  return (
    <div className="w-full h-dvh flex items-center justify-center bg-neutral-600">
      <div className="w-auto h-auto py-14 px-8 bg-emerald-950 rounded-3xl">
        <div className="text-neutral-300 font-bold text-2xl w-full mb-5">
          Sign Up
        </div>
        <div className="w-full block sm:flex m-auto">
          <div className="w-80 h-auto sm:mr-12">
            <div className="w-full h-10 bg-white rounded-2xl mb-4"><input className="h-full w-full ml-4 bg-transparent outline-0" placeholder="Username"/></div>
            <div className="w-full h-10 bg-white rounded-2xl mb-4"><input className="h-full w-full ml-4 bg-transparent outline-0" placeholder="Email Adress"/></div>
            <div className="w-full h-10 bg-white rounded-2xl mb-4"><input className="h-full w-full ml-4 bg-transparent outline-0" placeholder="Password"/></div>
            <div className="w-full h-10 bg-white rounded-2xl mb-4"><input className="h-full w-full ml-4 bg-transparent outline-0" placeholder="Confirm Password"/></div>
          </div>
          <div className="w-56 h-auto mt-4 mx-auto">
            <button className="w-full h-10 bg-black rounded-2xl mb-1  flex items-center justify-center"><span className=" text-white ">Sign In</span></button>
            <div className="text-sm">Already Have An Account? <Link href="/Login" className="font-bold">Log in</Link></div>
            <div className="mt-6 mb-3">Or</div>
            <button className="w-full h-10 bg-black rounded-2xl mb-1 flex items-center justify-center text-white"><FaGoogle className="mr-2" /><span className="   text-sm">Sign Up With Google</span></button>

          </div>
        </div>
      </div>
    </div>
  );
}
