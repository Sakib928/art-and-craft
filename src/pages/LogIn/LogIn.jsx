import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const LogIn = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <h1 className="font-bold text-4xl">Login Now</h1>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
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
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="mt-4 flex">
                <p className="flex place-items-center gap-3 btn btn-ghost">
                  <FaGoogle></FaGoogle>Google
                </p>
                <p className="flex place-items-center gap-3 btn btn-ghost">
                  <FaGithub></FaGithub>Github
                </p>
              </div>
            </form>
            <p className="p-4 -mt-10">
              New Here ? Register{" "}
              <Link className="text-blue-600 underline" to="/register">
                here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
