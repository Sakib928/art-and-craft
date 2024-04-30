import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { BiSolidHide } from "react-icons/bi";
import { FaEye } from "react-icons/fa";

const Register = () => {
  const { createUser, profileUpdate, reload, setReload } =
    useContext(AuthContext);
  console.log(reload);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photourl = form.get("photourl");
    const password = form.get("password");
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!regex.test(password)) {
      toast.error(
        "Password should contain at least 1 uppercase, 1 lowercase and should be at least 6 characters long"
      );
    } else {
      createUser(email, password)
        .then((res) => {
          console.log(res.user);
          toast.success("Successfully registerd");
          profileUpdate(name, photourl);
          setTimeout(() => {
            setReload(!reload);
          }, 2000);
        })
        .catch((err) => {
          console.log(err.message);
          toast.error("Already have an account");
        });
    }
  };

  const [passState, setPassState] = useState(false);

  const handleShowPass = () => {
    setPassState(!passState);
  };

  return (
    <div>
      <Toaster />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <h1 className="font-bold text-4xl">Register Now</h1>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photourl"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label ">
                  <span className="label-text">Password</span>
                </label>
                <div className="flex place-items-center w-full">
                  <input
                    type={passState ? "text" : "password"}
                    placeholder="password"
                    name="password"
                    className="input input-bordered w-full"
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
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
            <p className="p-4">
              Already Have an account ? Login{" "}
              <Link className="text-blue-600 underline" to="/login">
                Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
