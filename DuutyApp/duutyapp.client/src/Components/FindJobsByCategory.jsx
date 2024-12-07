import { useState, useCallback } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardTitle,
  CardText,
} from "reactstrap";

const FindJobsByCategory = () => {
//   const debounce = (func, delay) => {
//     let timer;
//     return (...args) => {
//       clearTimeout(timer);
//       timer = setTimeout(() => {
//         func(...args);
//       }, delay);
//     };
//   };

//   const handleCitySelection = useCallback(
//     debounce((cityCode) => {
//       setSelectedCity(cityCode);
//     }, 10), // 300ms debounce delay
//     []
//   );

const handleCitySelection = useCallback((cityCode) => {
    setSelectedCity(cityCode);
  }, []);


  const [activeTab, setActiveTab] = useState("1");
  const [selectedCity, setSelectedCity] = useState("ch");

  const cities = [
    { code: "ch", name: "Chennai" },
    { code: "ban", name: "Banglore" },
    { code: "hyd", name: "Hyderabad" },
    { code: "cochin", name: "Cochin" },
  ];

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <div>
      <h1 className="page-heading">Find Jobs</h1>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={activeTab === "1" ? "active" : ""}
            onClick={() => toggle("1")}
          >
            By City
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "2" ? "active" : ""}
            onClick={() => toggle("2")}
          >
            By Type
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Card body>
            <CardTitle>Search Jobs By City</CardTitle>
            <div className="city-box-container">
              {cities.map((city) => (
                <div
                  key={city.code}
                  className={`city-box ${
                    selectedCity === city.code ? "selected" : ""
                  }`}
                  onClick={() => handleCitySelection(city.code)}
                >
                  <div className="city-name">{city.name}</div>
                </div>
              ))}
            </div>
          </Card>
        </TabPane>
        <TabPane tabId="2">
          <Card body>
            <CardTitle>Search Jobs By Type</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
          </Card>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default FindJobsByCategory;
