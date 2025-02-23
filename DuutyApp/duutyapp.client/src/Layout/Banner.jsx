import cap from "../assets/img/4.png"

const Banner = () => {
  return (
      <div className="topbar d-flex align-items-center">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="d-none d-md-flex align-items-center">
         
		   <i className="bi bi-phone me-1"></i> Call us now +91 8939785306
        </div>
        <div className="d-flex align-items-center">
            India&apos;s First Job Portal for Kitchen Staff Recruitment   <img src={cap} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
