'use-client'
import Image from "next/image";
import Link from "next/link";
import { FaGoogle,FaFacebookSquare  } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const page = () => {
  const handleLogin = async () => {
    console.log('login')
  }
  return (
    <div className="container mx-auto py-24">
      <div className="grid grid-cols-2 gap-12">
        <div>
          <Image
            src="/assets/images/login/login.svg"
            width={540}
            height={540}
            alt=""
          />
        </div>
        <div className=" p-12">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div>
                <p className="text-center">Or Sign Up with</p>
            <hr className="mt-2" />
            <div className="flex justify-center items-center gap-5 p-5">
            <button className='btn btn-primary'><FaGoogle /></button>
            <button className='btn btn-primary'><IoLogoGithub /></button>
            <button className='btn btn-primary'><FaFacebookSquare /></button>
            </div>
           <p className="text-center mb-4">Do you have an account? <Link className="text-primary font-semibold" href={'/signup'}>Sign Up</Link> </p> 
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default page;
