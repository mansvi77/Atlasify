  import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import footerContact from "../../../api/FooterApi.json";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {/* Map footer contacts */}
        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;
          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}

        {/* Add your profile link right after Find Us */}
        <div className="footer-contact">
          <div className="icon">{footerIcon.MdPlace}</div> {/* Optional: same icon or custom */}
          <div className="footer-contact-text">
            <p>
              <NavLink
                to="https://www.linkedin.com/in/mansvi-thakur-a02584323/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Manasvi Thakur
              </NavLink>
            </p>
          </div>
        </div>
      </div>

      {/* Keep the remaining footer content as-is or remove copyright if not needed */}
      {/* ... */}
    </footer>
  );
};
