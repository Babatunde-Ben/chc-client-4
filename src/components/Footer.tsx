import { ReactComponent as FacebookIcon } from "../assets/svgs/facebook.svg";
import { ReactComponent as TwitterIcon } from "../assets/svgs/twitter.svg";
import { ReactComponent as InstagramIcon } from "../assets/svgs/instagram.svg";
import { ReactComponent as MessageIcon } from "../assets/svgs/envelope.svg";
import { ReactComponent as Logo } from "../assets/svgs/CHC-logo-full.svg";

const Footer = () => {
  const copyrightYear = new Date().getFullYear();
  const socialMedia = [
    {
      path: "https://www.facebook.com/",
      name: "facebook",
      icon: <FacebookIcon />,
    },
    {
      path: "https://twitter.com/",
      name: "twitter",
      icon: <TwitterIcon />,
    },

    {
      path: "https://www.instagram.com/",
      name: "instagram",
      icon: <InstagramIcon />,
    },
  ];
  return (
    <footer className="px-5 py-20 bg-secondary-100 sm:px-10 md:px-16 lg:px-40 ">
      <div className=" flex flex-col gap-12 items-center mb-20 md:flex-row md:justify-between  lg:max-w-[1500px] lg:mx-auto">
        <Logo
          className="w-40 h-20"
          onClick={() => (window.location.href = "#")}
        />

        <div className="flex gap-2 items-center text-secondary-900">
          <MessageIcon />
          <p className="">contactemail@email.com</p>
        </div>
        <div className=" md:flex-1 md:text-right">
          <ul className="inline-flex gap-5 items-center md:ml-auto ">
            {socialMedia.map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full transition duration-150 bg-secondary-200 text-secondary-800 hover:bg-secondary-300"
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-center pt-10 border-t border-gray-400 lg:max-w-[1500px] lg:mx-auto">
        <p className="font-medium text-gray-500 text-sm">
          &copy; {copyrightYear}, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
