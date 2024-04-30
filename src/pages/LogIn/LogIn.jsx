import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaGoogle, FaGithub, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { BiSolidHide } from "react-icons/bi";
const LogIn = () => {
  const { userLogin, googleLogin, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    userLogin(email, password)
      .then(() => {
        // console.log(res.user);
        toast.success("Login Successful");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const [passState, setPassState] = useState(false);

  const handleShowPass = () => {
    setPassState(!passState);
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        toast.success("Login Successful");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then((res) => {
        console.log(res.user);
        toast.success("Login Successful");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div>
      <Toaster></Toaster>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <h1 className="font-bold text-4xl">Login Now</h1>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                  <span className="label-text">Password </span>
                </label>
                <div className="flex place-items-center">
                  <input
                    type={passState ? "text" : "password"}
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />

                  <span onClick={handleShowPass}>
                    {passState ? (
                      <BiSolidHide className="relative right-6 text-lg" />
                    ) : (
                      <FaEye className="relative right-6 text-lg" />
                    )}
                  </span>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="mt-4 flex">
                <p
                  onClick={handleGoogleLogin}
                  className="flex place-items-center gap-3 btn btn-ghost"
                >
                  <FaGoogle></FaGoogle>Google
                </p>
                <p
                  onClick={handleGithubLogin}
                  className="flex place-items-center gap-3 btn btn-ghost"
                >
                  <FaGithub></FaGithub>Github
                </p>
              </div>
            </form>
            <p className="p-4 -mt-10">
              New to this site ? Register{" "}
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
