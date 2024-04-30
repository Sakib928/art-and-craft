import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLongArrowAltRight,
  FaRegCopyright,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <nav>
          <h6 className="footer-title">Newsletter</h6>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
            <FaLongArrowAltRight />
          </label>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <a className="link link-hover">Email : scribble@gmail.com</a>
          <a className="link link-hover">Phone : +9934334343</a>
          <a className="link link-hover"></a>
          <div className="flex gap-4 mt-4">
            <FaFacebook className="text-2xl"></FaFacebook>
            <FaTwitter className="text-2xl"></FaTwitter>
            <FaLinkedin className="text-2xl"></FaLinkedin>
            <FaInstagram className="text-2xl"></FaInstagram>
          </div>
        </nav>
      </footer>
      <p className="flex gap-2 mx-auto justify-center items-center">
        <FaRegCopyright />
        copyright : all rights reserved
      </p>
    </div>
  );
};

export default Footer;
