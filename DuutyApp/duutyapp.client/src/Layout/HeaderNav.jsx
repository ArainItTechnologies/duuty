import { TfiMenu } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import { BsTranslate } from "react-icons/bs";
import { useTranslation } from "../translations/TranslationHook";
import Logo from "../assets/Logo-2.0.png";

const HeaderNav = () => {
  const { t } = useTranslation();

  const employerSubMenuItems = [
    { to: "/Employer/hire-now", title: "Hire Now" },
    { to: "/Employer/pricing", title: "Pricing" },
    { to: "/employer/refundpolicy", title: "Refund Policy" },
  ];

  const employeeSubMenuItems = [
    { to: "/employee/find-jobs", title: "Find Jobs" },
    { to: "/employee/apply-now", title: "Apply Now" },
  ];

  return (
    <header>
      <nav>
        <ul className="nav-bar">
          <li className="logo">
            <a href="#">
              <img src={Logo} alt="Logo" />
            </a>
          </li>
          <span className="hero-menu">
            <BsTranslate className="translate" size={25} color="#6200ea" />
            <li>
              <a href="">{t("joboptions.findjob")}</a>
            </li>
            <li>
              <a href="">{t("joboptions.hirenow")}</a>
            </li>
          </span>
          <input type="checkbox" id="check" />
          <span className="menu">
            <li>
              <a href="">Home</a>
            </li>
            <li className="has-submenu">
              <a href="#">{t("navbar.employer.heading")}</a>
              <ul className="submenu">
                {employerSubMenuItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.to}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="has-submenu">
              <a href="#">{t("navbar.employee.heading")}</a>
              <ul className="submenu">
                {employeeSubMenuItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.to}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <label htmlFor="check" className="close-menu">
              <TfiClose />
            </label>
          </span>
          <label htmlFor="check" className="open-menu">
            <TfiMenu />
          </label>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNav;
