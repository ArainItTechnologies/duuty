import { useState } from "react";
import {Link} from "react-router-dom";
import BannerImage from "../assets/image-banner.png";
import BannerImageMob from "../assets/banner-image-mob.png";
import RegisterImg from "../assets/register-img.png";
import HotelImg from "../assets/hotel-img.png";
import PayImg from "../assets/pay-img.png";
import FindEmp from "../assets/find-employer.png";
import Emp1 from "../assets/emp-1.png";
import Emp2 from "../assets/emp-2.png";
import Notion from "../assets/notion.png";
import Unsplash from "../assets/unsplash.png";
import Grammarly from "../assets/grammarly.png";
import Descript from "../assets/descript.png";
import Intercom from "../assets/intercom.png";
import FaqImg from "../assets/faq-img.png";
import WavePatten1 from "../assets/wave-patten1.svg";
import WavePatten2 from "../assets/wave-patten2.svg";

import TabsWithForm from '../components/TabsWithForm';
import Testiminal from "../components/Testimonial";

export const Home = () => {
    return (
        <section className="main-wrapper bg-linear-[180deg,#F4F3FF,#FFFFFF]">
            <div id="overview" className="banner-section px-3 sm:px-6 py-6 pb-[50px] sm:pb-[70px] md:pb-[100px] mx-auto bg-linear-[180deg,#F4F3FF,#FFFFFF]">
                <div className="container-wrapper items-center lg:items-start flex flex-col lg:flex-row justify-center sm:gap-[50px] xl:gap-[100px] ">
                    <div className="block sm:hidden text-center relative w-full">
                        <h1 className="text-[30px] lg:text-[40px] xl:text-[47px] font-[AvenirNextBold] pt-0 pb-6 font-bold">Employeed With Us</h1>
                        <img className="w-full h-auto" src={BannerImageMob} alt="Duuty banner image" />
                    </div>
                    <div className="hidden sm:block w-full lg:mt-0 lg:w-1/2 xl:w-3/5 max-w-[500px] lg:max-w-[700px] text-center lg:max-w-[600px] lg:text-left">
                        <img className="w-full h-full lg:max-w-3xl" src={BannerImage} alt="Duuty banner image" />
                        <span className="md:text-[27px] font-medium text-(--teritary-text-color)">Let’s start the Duuty”</span>
                        <h1 className="text-[32px] lg:text-[40px] xl:text-[47px] font-[AvenirNextBold] pt-3 pb-3 font-bold">Employeed With us</h1>
                        <p className="text-(--secondary-text-color) mb-[22px]" >Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        <Link
                          to="/find-job"
                          className="hidden text-[15px] text-white font-medium sm:inline-block rounded-[11px] bg-linear-(--gradient-bg) px-[25px] py-[15px] mr-[12px]"
                        >
                          Find a Job
                        </Link>
                        <Link
                            to="/job-listing" 
                            className="hidden hover:bg-[#ECEFFF] text-[15px] text-[#3B31FF] font-medium sm:inline-block rounded-[11px] px-[25px] py-[15px] border-1 border-[#ECEFFF"
                        >
                          Hire us
                        </Link>

                    </div>
                    <div className="w-full lg:w-1/2 xl:w-2/5 flex justify-center lg:justify-end max-w-[500px] lg:max-w-[100%]">
                        <TabsWithForm/>
                    </div>
                </div>
                
            </div>

            <div id="benefits" className="employee-benifits-section relative">
                <svg className="hidden sm:block absolute right-[0px] top-[0px]" width="94" height="177" viewBox="0 0 94 177" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="83" cy="23" r="78" stroke="#232962" strokeWidth="10"/>
                    <circle cx="104" cy="94" r="78" stroke="#232962" strokeWidth="10"/>
                </svg>
                <div className="top-employee-benifits text-center sm:py-[50px] px-[20px] py-[25px] bg-[var(--employee-bg)]">
                    <h3 className="text-white text-[28px] sm:text-[32px] font-[AvenirNextMedium]">Employee Benefits</h3>
                    <p className="mt-[10px] max-w-[calc(100%-100px)] m-auto text-[var(--employee-para-color)]">Benefits that employees receive as a result of their employment are referred to as employee benefits</p>
                </div>
                <div className="benifits-wrapper sm:pr-[30px] pr-[20px] sm:pb-[90px] sm:pl-[80px] pl-[20px] relative before:content-[''] before:absolute before:left-0 before:top-[-40px] sm:before:top-0  before:w-full before:h-[150px] sm:before:h-[100px] before:bg-(--employee-bg) bg-[var(--benefit-bg)]">
                    <div className="container-wrapper">
                        <div className="benifits-list flex relative sm:pt-[40px] pt-[60px] sm:pr-[40px] pr-[20px] sm:pb-[40px] pb-[25px] md:pl-[110px] sm:pl-[85px] pl-[20px] w-[750px] max-w-full rounded-[35px] bg-white mt-[40px] sm:mt-[unset] border-[1px] border-[var(--benefit-card-border)]">
                            <div className="list-count shadow-[inset_0px_0px_0px_12px_var(--neutral-white)] text-[28px] sm:text-[46px] font-medium rounded-full w-[80px] h-[80px] sm:w-[123px] sm:h-[123px] flex items-center justify-center absolute sm:left-[-55px] sm:right-[unset] left-0 right-0 m-auto top-[-40px] sm:top-[unset] text-[var(--benefit-list-color)] bg-[var(--benefit-list-bg)] border-[1px] border-[var(--benefit-list-border)]">01</div>
                            <div className="benifits-content flex flex-col sm:flex-row items-center gap-[25px]">
                                <img className="sm:size-[124px] size-100 max-w-[160px] max-h-[160px] sm:max-w-[100%] sm:max-w-[100%]" src={RegisterImg} alt="Register your role" />
                                <div className="max-w-[100%] text-center sm:text-left sm:max-w-[340px]">
                                    <h4 className="text-[20px] sm:text-[22px] lg:text-[26px] font-[AvenirNextBold] mb-2.5">Register your role</h4>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer</p>
                                </div>

                            </div>
                        </div>
                        <div className="benifits-list flex relative sm:pt-[40px] pt-[60px] sm:pr-[40px] pr-[20px] sm:pb-[40px] pb-[25px] md:pl-[110px] sm:pl-[85px] pl-[20px] w-[750px] max-w-full rounded-[35px] bg-white sm:mt-[40px] sm:mb-[40px] mt-[60px] mb-[60px] ml-auto before:content-[''] before:absolute lg:before:left-0 before:top-0 before:z-1 before:rounded-[35px] before:w-[70px] before:h-full before:bg-white md:before:left-[50px] before:hidden md:before:block border-[1px] border-[var(--benefit-card-border)]">
                            <svg className="hidden md:block absolute top-[-43px] lg:left-[-24px] md:left-[50px] z-0" width="52" height="290" viewBox="0 0 52 290" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1C10.5 12.3333 31.3 40 38.5 60C47.5 85 70 217 14.5 289.5" stroke="#B7B0FF" strokeDasharray="4 4"/>
                            </svg>
                            <div className="list-count shadow-[inset_0px_0px_0px_12px_var(--neutral-white)] text-[28px] sm:text-[46px] font-medium rounded-full w-[80px] h-[80px] sm:w-[123px] sm:h-[123px] flex items-center justify-center absolute sm:left-[-55px] sm:right-[unset] left-0 right-0 m-auto top-[-40px] sm:top-[unset] z-1 text-[var(--benefit-list-color)] bg-[var(--benefit-list-bg)] border-[1px] border-[var(--benefit-list-border)]">02</div>
                            <div className="benifits-content flex flex-col sm:flex-row items-center gap-[25px] relative z-1">
                                <img className="sm:size-[124px] size-100 max-w-[160px] max-h-[160px] sm:max-w-[100%] sm:max-w-[100%]" src={HotelImg} alt="Find your dream hotel" />
                                <div className="max-w-[100%] text-center sm:text-left sm:max-w-[340px]">
                                    <h4 className="text-[20px] sm:text-[22px] lg:text-[26px] font-[AvenirNextBold] mb-2.5">Find your dream hotel</h4>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer</p>
                                </div>

                            </div>
                        </div>
                        <div className="benifits-list flex relative sm:pt-[40px] pt-[60px] sm:pr-[40px] pr-[20px] sm:pb-[40px] pb-[25px] md:pl-[110px] sm:pl-[85px] pl-[20px] w-[750px] max-w-full rounded-[35px] bg-white border-[1px] border-[var(--benefit-card-border)]">
                            <div className="list-count shadow-[inset_0px_0px_0px_12px_var(--neutral-white)] text-[28px] sm:text-[46px] font-medium rounded-full w-[80px] h-[80px] sm:w-[123px] sm:h-[123px] flex items-center justify-center absolute sm:left-[-55px] sm:right-[unset] left-0 right-0 m-auto top-[-40px] sm:top-[unset] text-[var(--benefit-list-color)] bg-[var(--benefit-list-bg)] border-[1px] border-[var(--benefit-list-border)]">03</div>
                            <div className="benifits-content flex flex-col sm:flex-row items-center gap-[25px] gap-[25px]">
                                <img className="sm:size-[124px] size-100 max-w-[160px] max-h-[160px] sm:max-w-[100%] sm:max-w-[100%]" src={PayImg} alt="Get Good Pay" />
                                <div className="max-w-[100%] text-center sm:text-left sm:max-w-[340px]">
                                    <h4 className="text-[20px] sm:text-[22px] lg:text-[26px] font-[AvenirNextBold] mb-2.5">Get Good Pay</h4>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="find-employer-wrapper pt-[50px] pb-[50px] sm:pt-[70px] sm:pb-[70px]">
                <div className="container-wrapper text-center lg:text-left flex lg:flex-row flex-col-reverse items-center lg:items-start xl:items-center justify-center lg:justify-between gap-[100px] lg:gap-[50px] xl:gap-[0px]">
                    <div className="w-full max-w-[600px] lg:max-w-[100%] lg:w-2/5 xl:w-1/2 flex justify-center relative">
                        <img className="max-w-[300px] sm:max-w-[90%] xl:w-[380px] 2xl:w-[410px]" src={FindEmp} width="410" height="563" alt="Find your Employer" />
                        <div className="border-[1px] border-[var(--neutral-black)] emp-img emp-img1 bg-white absolute rounded-[16px] flex items-center p-4 sm:p-6 gap-4 right-0 top-[-20px]">
                            <img className="size-[48px]" src={Emp2} alt="Find your Employer" />
                            <p className="max-w-[180px] text-left sm:text-[16px] text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>
                        <div className="border-[1px] border-[var(--neutral-black)] emp-img emp-img2 bg-white absolute rounded-[16px] flex items-center p-4 sm:p-6 gap-4 left-0 bottom-[60px]">
                            <img className="size-[48px]" src={Emp1} alt="Find your Employer" />
                            <p className="max-w-[180px] text-left sm:text-[16px] text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>
                        
                    </div>
                    <div className="find-employer-right w-full lg:w-3/5 xl:w-1/2 max-w-[580px]">
                        <h2 className="text-[28px] lg:text-[34px] xl:text-[40px] font-[AvenirNextBold]">Find your Employer</h2>
                        <p className="text-[var(--secondary-text-color)] mt-[18px] mb-[35px]">Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially.</p>
                        <div className="employer-card-wrapper flex flex-wrap gap-x-[30px] sm:gap-y-[50px] gap-y-[30px] justify-center lg:justify-start">
                            <div className="employer-card w-[255px] xl:w-[275px] flex items-center justify-center gap-[15px] rounded-[16px] py-[12px] px-[26px] border-[1px] border-[var(--neutral-black)] bg-[var(--employee-card-bg)] shadow-[8px_8px_0_var(--employee-card-border)]">
                                <span className="text-[22px] font-semibold">351K</span>
                                <p className="text-[14px] text-left text-[var(--secondary-text-color)]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="employer-card w-[255px] xl:w-[275px] flex items-center justify-center gap-[15px] rounded-[16px] py-[12px] px-[26px] border-[1px] border-[var(--neutral-black)] bg-[var(--employee-card-child1)] shadow-[8px_8px_0_var(--employee-card-border)]">
                                <span className="text-[22px] font-semibold">99%</span>
                                <p className="text-[14px] text-left text-[var(--secondary-text-color)]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="employer-card w-[255px] xl:w-[275px] flex items-center justify-center gap-[15px] rounded-[16px] py-[12px] px-[26px] border-[1px] border-[var(--neutral-black)] bg-[var(--employee-card-child2)] shadow-[8px_8px_0_var(--employee-card-border)]">
                                <span className="text-[22px] font-semibold">4.89</span>
                                <p className="text-[14px] text-left text-[var(--secondary-text-color)]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="employer-card w-[255px] xl:w-[275px] flex items-center justify-center gap-[15px] rounded-[16px] py-[12px] px-[26px] border-[1px] border-[var(--neutral-black)] bg-[var(--employee-card-child3)] shadow-[8px_8px_0_var(--employee-card-border)]">
                                <span className="text-[22px] font-semibold">4.89</span>
                                <p className="text-[14px] text-left text-[var(--secondary-text-color)]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="trusted-companies" className="trusted-brands-wrapper lg:pt-[70px] lg:pb-[70px]">
                <div className="container-wrapper">
                    <h2 className="text-[28px] lg:text-[34px] xl:text-[40px] font-[AvenirNextBold] text-center">Trusted by 25+ Popular Companies</h2>
                    <div className="trusted-brands-list flex flex-wrap justify-center items-center mt-[50px] mx-auto gap-y-[40px] lg:gap-y-[50px] xl:gap-y-[70px] gap-x-[50px] lg:gap-x-[60px] xl:gap-x-[75px] 2xl:gap-x-[100px]">
                        <img className="h-[30px] lg:h-[38px]" src={Notion} alt="Notion Logo" />
                        <img className="h-[30px] lg:h-[38px]" src={Unsplash} alt="Unsplash Logo" />
                        <img className="h-[30px] lg:h-[38px]" src={Grammarly} alt="Grammarly Logo" />
                        <img className="h-[30px] lg:h-[38px]" src={Descript} alt="Descript Logo" />
                        <img className="h-[30px] lg:h-[38px]" src={Intercom} alt="Intercom Logo" />
                        <img className="h-[30px] lg:h-[38px]" src={Notion} alt="Notion Logo" />
                        <img className="h-[30px] lg:h-[38px]" src={Unsplash} alt="Unsplash Logo" />
                        <img className="h-[30px] lg:h-[38px]" src={Grammarly} alt="Grammarly Logo" />
                        <img className="h-[30px] lg:h-[38px]" src={Descript} alt="Descript Logo" />
                        <img className="h-[30px] lg:h-[38px]" src={Intercom} alt="Intercom Logo" />
                    </div>
                </div>
            </div>

            <Testiminal />
            <div className="faq-wrapper flow-root pb-[0px] lg:pb-[100px]">
                <div className="container-wrapper flex justify-center flex-col-reverse px-[20px] lg:px-[0px] lg:flex-row lg:justify-between items-center lg:items-start relative gap-[80px]">
                    <div className="hidden lg:block w-full lg:w-1/2 lg:sticky lg:top-[90px] max-w-[90%] sm:max-w-[500px] lg:max-w-[100%]">
                        <div className="faq-img-container relative">
                            <img className="rounded-[20px] relative w-full" src={FaqImg} alt="Frequently Asked Questions" />
                            <svg className="faq-plus-patten absolute bottom-[-100px] hidden md:block md:left-[-20px] left-[-30px] z-[-1]" xmlns="http://www.w3.org/2000/svg" width="153" height="166" viewBox="0 0 153 166" fill="none">
                                <path d="M141.441 152.61V154.479H152.162V152.61H141.441ZM145.803 148.045V159.432H147.79V148.045H145.803Z" fill="#6246E5"/>
                                <path d="M106.441 117.61V119.479H117.162V117.61H106.441ZM110.803 113.045V124.432H112.79V113.045H110.803Z" fill="#6246E5"/>
                                <path d="M106.441 152.61V154.479H117.162V152.61H106.441ZM110.803 148.045V159.432H112.79V148.045H110.803Z" fill="#6246E5"/>
                                <path d="M71.4414 12.6104V14.4795H82.1621V12.6104H71.4414ZM75.8027 8.04492V19.4316H77.79V8.04492H75.8027Z" fill="#6246E5"/>
                                <path d="M71.4414 47.6104V49.4795H82.1621V47.6104H71.4414ZM75.8027 43.0449V54.4316H77.79V43.0449H75.8027Z" fill="#6246E5"/>
                                <path d="M71.4414 82.6104V84.4795H82.1621V82.6104H71.4414ZM75.8027 78.0449V89.4316H77.79V78.0449H75.8027Z" fill="#6246E5"/>
                                <path d="M71.4414 117.61V119.479H82.1621V117.61H71.4414ZM75.8027 113.045V124.432H77.79V113.045H75.8027Z" fill="#6246E5"/>
                                <path d="M71.4414 152.61V154.479H82.1621V152.61H71.4414ZM75.8027 148.045V159.432H77.79V148.045H75.8027Z" fill="#6246E5"/>
                                <path d="M36.4414 12.6104V14.4795H47.1621V12.6104H36.4414ZM40.8027 8.04492V19.4316H42.79V8.04492H40.8027Z" fill="#6246E5"/>
                                <path d="M36.4414 47.6104V49.4795H47.1621V47.6104H36.4414ZM40.8027 43.0449V54.4316H42.79V43.0449H40.8027Z" fill="#6246E5"/>
                                <path d="M36.4414 82.6104V84.4795H47.1621V82.6104H36.4414ZM40.8027 78.0449V89.4316H42.79V78.0449H40.8027Z" fill="#6246E5"/>
                                <path d="M36.4414 117.61V119.479H47.1621V117.61H36.4414ZM40.8027 113.045V124.432H42.79V113.045H40.8027Z" fill="#6246E5"/>
                                <path d="M36.4414 152.61V154.479H47.1621V152.61H36.4414ZM40.8027 148.045V159.432H42.79V148.045H40.8027Z" fill="#6246E5"/>
                                <path d="M1.44141 12.6104V14.4795H12.1621V12.6104H1.44141ZM5.80273 8.04492V19.4316H7.79004V8.04492H5.80273Z" fill="#6246E5"/>
                                <path d="M1.44141 47.6104V49.4795H12.1621V47.6104H1.44141ZM5.80273 43.0449V54.4316H7.79004V43.0449H5.80273Z" fill="#6246E5"/>
                                <path d="M1.44141 82.6104V84.4795H12.1621V82.6104H1.44141ZM5.80273 78.0449V89.4316H7.79004V78.0449H5.80273Z" fill="#6246E5"/>
                                <path d="M1.44141 117.61V119.479H12.1621V117.61H1.44141ZM5.80273 113.045V124.432H7.79004V113.045H5.80273Z" fill="#6246E5"/>
                                <path d="M1.44141 152.61V154.479H12.1621V152.61H1.44141ZM5.80273 148.045V159.432H7.79004V148.045H5.80273Z" fill="#6246E5"/>
                            </svg>
                        </div>
                    </div>
                    <div className="-my-4 w-full lg:w-1/2  flex flex-col faq-right-content divide-y-2 lg:divide-y-4 divide-[#D7DEF0] max-w-[700px] lg:max-w-[570px]">
                        <h2 className="text-[28px] lg:text-[34px] xl:text-[40px] font-[AvenirNextBold] pb-8">Frequently Asked Questions</h2>
                        <details className="group py-4 lg:py-8 [&_summary::-webkit-details-marker]:hidden" open>
                        <summary className="flex items-center justify-between gap-1.5 text-black cursor-pointer">
                            <h5 className="text-[18px] font-semibold font-[AvenirNextMedium]">Where can I watch?</h5>
                            <svg className="shrink-0 transition-transform duration-300 group-open:-rotate-43" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.54534 12.5674H11.1408V17.1628C11.1408 17.6299 11.525 18.0216 11.9996 18.0216C12.4742 18.0216 12.8584 17.6299 12.8584 17.1628V12.5674H17.4538C17.9209 12.5674 18.3126 12.1832 18.3126 11.7086C18.3126 11.234 17.9209 10.8497 17.4538 10.8497H12.8584V6.25432C12.8584 5.78725 12.4742 5.39551 11.9996 5.39551C11.525 5.39551 11.1408 5.78725 11.1408 6.25432V10.8497H6.54534C6.07826 10.8497 5.68652 11.234 5.68652 11.7086C5.68652 12.1832 6.07826 12.5674 6.54534 12.5674Z" fill="#3E2E4D"/>
                            </svg>
                        </summary>

                        <p className="pt-4 font-normal text-[var(--faq-text-color)] sm:text-[18px] text-[16px]">
                        Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!
                        </p>
                        </details>

                        <details className="group py-4 lg:py-8 [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between gap-1.5 text-black cursor-pointer">
                            <h5 className="text-[18px] font-semibold font-[AvenirNextMedium]">Lorem ipsum dolor sit amet consectetur adipisicing?</h5>
                            <svg className="shrink-0 transition-transform duration-300 group-open:-rotate-43" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.54534 12.5674H11.1408V17.1628C11.1408 17.6299 11.525 18.0216 11.9996 18.0216C12.4742 18.0216 12.8584 17.6299 12.8584 17.1628V12.5674H17.4538C17.9209 12.5674 18.3126 12.1832 18.3126 11.7086C18.3126 11.234 17.9209 10.8497 17.4538 10.8497H12.8584V6.25432C12.8584 5.78725 12.4742 5.39551 11.9996 5.39551C11.525 5.39551 11.1408 5.78725 11.1408 6.25432V10.8497H6.54534C6.07826 10.8497 5.68652 11.234 5.68652 11.7086C5.68652 12.1832 6.07826 12.5674 6.54534 12.5674Z" fill="#3E2E4D"/>
                            </svg>
                        </summary>

                        <p className="pt-4 font-normal sm:text-[18px] text-[16px] text-[var(--faq-text-color)]">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa
                            in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis
                            explicabo consequuntur distinctio corporis earum similique!
                        </p>
                        </details>

                        <details className="group py-4 lg:py-8 [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between gap-1.5 text-black cursor-pointer">
                            <h5 className="text-[18px] font-semibold font-[AvenirNextMedium]">Lorem ipsum dolor sit amet consectetur adipisicing?</h5>
                            <svg className="shrink-0 transition-transform duration-300 group-open:-rotate-43" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.54534 12.5674H11.1408V17.1628C11.1408 17.6299 11.525 18.0216 11.9996 18.0216C12.4742 18.0216 12.8584 17.6299 12.8584 17.1628V12.5674H17.4538C17.9209 12.5674 18.3126 12.1832 18.3126 11.7086C18.3126 11.234 17.9209 10.8497 17.4538 10.8497H12.8584V6.25432C12.8584 5.78725 12.4742 5.39551 11.9996 5.39551C11.525 5.39551 11.1408 5.78725 11.1408 6.25432V10.8497H6.54534C6.07826 10.8497 5.68652 11.234 5.68652 11.7086C5.68652 12.1832 6.07826 12.5674 6.54534 12.5674Z" fill="#3E2E4D"/>
                            </svg>
                        </summary>

                        <p className="pt-4 font-normal sm:text-[18px] text-[16px] text-[var(--faq-text-color)]">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa
                            in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis
                            explicabo consequuntur distinctio corporis earum similique!
                        </p>
                        </details>
                        <details className="group py-4 lg:py-8 [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between gap-1.5 text-black cursor-pointer">
                            <h5 className="text-[18px] font-semibold font-[AvenirNextMedium]">Lorem ipsum dolor sit amet consectetur adipisicing?</h5>
                            <svg className="shrink-0 transition-transform duration-300 group-open:-rotate-43" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.54534 12.5674H11.1408V17.1628C11.1408 17.6299 11.525 18.0216 11.9996 18.0216C12.4742 18.0216 12.8584 17.6299 12.8584 17.1628V12.5674H17.4538C17.9209 12.5674 18.3126 12.1832 18.3126 11.7086C18.3126 11.234 17.9209 10.8497 17.4538 10.8497H12.8584V6.25432C12.8584 5.78725 12.4742 5.39551 11.9996 5.39551C11.525 5.39551 11.1408 5.78725 11.1408 6.25432V10.8497H6.54534C6.07826 10.8497 5.68652 11.234 5.68652 11.7086C5.68652 12.1832 6.07826 12.5674 6.54534 12.5674Z" fill="#3E2E4D"/>
                            </svg>
                        </summary>

                        <p className="pt-4 font-normal sm:text-[18px] text-[16px] text-[var(--faq-text-color)]">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa
                            in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis
                            explicabo consequuntur distinctio corporis earum similique!
                        </p>
                        </details>
                        <details className="group py-4 lg:py-8 [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between gap-1.5 text-black cursor-pointer">
                            <h5 className="text-[18px] font-semibold font-[AvenirNextMedium]">Lorem ipsum dolor sit amet consectetur adipisicing?</h5>
                            <svg className="shrink-0 transition-transform duration-300 group-open:-rotate-43" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.54534 12.5674H11.1408V17.1628C11.1408 17.6299 11.525 18.0216 11.9996 18.0216C12.4742 18.0216 12.8584 17.6299 12.8584 17.1628V12.5674H17.4538C17.9209 12.5674 18.3126 12.1832 18.3126 11.7086C18.3126 11.234 17.9209 10.8497 17.4538 10.8497H12.8584V6.25432C12.8584 5.78725 12.4742 5.39551 11.9996 5.39551C11.525 5.39551 11.1408 5.78725 11.1408 6.25432V10.8497H6.54534C6.07826 10.8497 5.68652 11.234 5.68652 11.7086C5.68652 12.1832 6.07826 12.5674 6.54534 12.5674Z" fill="#3E2E4D"/>
                            </svg>
                        </summary>

                        <p className="pt-4 font-normal sm:text-[18px] text-[16px] text-[var(--faq-text-color)]">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa
                            in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis
                            explicabo consequuntur distinctio corporis earum similique!
                        </p>
                        </details>
                        <details className="group py-4 lg:py-8 [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between gap-1.5 text-black cursor-pointer">
                            <h5 className="text-[18px] font-semibold font-[AvenirNextMedium]">Lorem ipsum dolor sit amet consectetur adipisicing?</h5>
                            <svg className="shrink-0 transition-transform duration-300 group-open:-rotate-43" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.54534 12.5674H11.1408V17.1628C11.1408 17.6299 11.525 18.0216 11.9996 18.0216C12.4742 18.0216 12.8584 17.6299 12.8584 17.1628V12.5674H17.4538C17.9209 12.5674 18.3126 12.1832 18.3126 11.7086C18.3126 11.234 17.9209 10.8497 17.4538 10.8497H12.8584V6.25432C12.8584 5.78725 12.4742 5.39551 11.9996 5.39551C11.525 5.39551 11.1408 5.78725 11.1408 6.25432V10.8497H6.54534C6.07826 10.8497 5.68652 11.234 5.68652 11.7086C5.68652 12.1832 6.07826 12.5674 6.54534 12.5674Z" fill="#3E2E4D"/>
                            </svg>
                        </summary>

                        <p className="pt-4 font-normal sm:text-[18px] text-[16px] text-[var(--faq-text-color)]">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa
                            in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis
                            explicabo consequuntur distinctio corporis earum similique!
                        </p>
                        </details>
                        
                    </div>

                </div>
            </div>

            <div className="interesting-offers-section relative my-[50px] sm:my-[80px] mx-auto py-[50px] sm:py-[80px] px-[20px] sm:rounded-[130px_20px_20px] rounded-[90px_20px_20px] max-w-[90%] xl:max-w-[85%] bg-[var(--interesting-offer-bg)]">
                <img className="hidden sm:block w-[360px] absolute bottom-[0px] left-[0px]" src={WavePatten1} alt="Wave Patten" />
                <img className="hidden sm:block w-[246px] absolute top-[0px] right-[0px]" src={WavePatten2} alt="Wave Patten" />
                <div className="content-wrapper text-center mx-auto relative">
                    <h2 className="text-[22px] sm:text-[28px] lg:text-[33px] lg:leading-[54px] text-(--secondary-text-color) mb-[30px] sm:mb-[54px]">Start to get information, latest news and other interesting offers about <span className="text-[var(--interesring-offer-special)]">Duuty</span></h2>
                    <input id="phone-num" name="phone number" type="text" required autoComplete="phone number" placeholder="Your Phone Number" className="w-[420px] max-w-[100%] md:mr-[24px] rounded-xl h-[50px] sm:h-[68px] bg-white py-3 px-4 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                    <button type="submit" className="w-[180px] mt-[20px] justify-center rounded-xl h-[50px] sm:h-[68px] bg-linear-(--gradient-bg) p-3 text-sm/6 font-normal text-white shadow-xs hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer">Sign Up</button>
                </div>
                <svg className="w-[50px] sm:w-[70px] fly-svg absolute right-[-20px] top-[-13px]" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="url(#paint0_linear_3410_637)"/>
                    <path d="M52.6105 23.9904C53.3018 25.1878 53.2092 26.6136 52.3677 27.711L33.8939 51.8182C33.1321 52.8123 31.8776 53.3191 30.5948 53.0729C29.3387 52.8313 28.3427 51.9156 27.997 50.6841L25.2635 40.9555L24.9789 39.9435L24.2449 39.191L17.1864 31.9595C16.2927 31.0444 15.9977 29.724 16.4166 28.5154C16.8311 27.3206 17.8708 26.4536 19.1527 26.2856L49.267 22.3404C50.6381 22.1604 51.9192 22.793 52.6105 23.9904Z" fill="white"/>
                    <path d="M25.2636 40.9552L27.997 50.6839C28.3427 51.9154 29.3386 52.831 30.5948 53.0727C31.8776 53.319 33.1321 52.8121 33.8939 51.818L52.3677 27.7109C53.2092 26.6134 53.3018 25.1876 52.6105 23.9902L24.9789 39.9433L25.2636 40.9552Z" fill="white"/>
                    <path d="M36.2234 33.4515C36.5045 33.9385 36.3381 34.5616 35.8505 34.8431L25.2638 40.9553L24.9791 39.9434L24.2451 39.1909L34.8318 33.0787C35.3194 32.7973 35.9422 32.9646 36.2234 33.4515Z" fill="url(#paint1_linear_3410_637)"/>
                    <path d="M25.2632 40.9554L35.85 34.8432C36.3375 34.5617 36.504 33.9387 36.2228 33.4517L24.9786 39.9435L25.2632 40.9554Z" fill="url(#paint2_linear_3410_637)"/>
                    <defs>
                    <linearGradient id="paint0_linear_3410_637" x1="0.992909" y1="6.99981" x2="70.3198" y2="7.41987" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3B31FF"/>
                    <stop offset="1" stopColor="#9239FF"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_3410_637" x1="32.4079" y1="34.5441" x2="33.5455" y2="36.8251" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#747DEF"/>
                    <stop offset="1" stopColor="#5E3BE1"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_3410_637" x1="32.9024" y1="35.4017" x2="33.5065" y2="36.5259" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#747DEF"/>
                    <stop offset="1" stopColor="#5E3BE1"/>
                    </linearGradient>
                    </defs>
                </svg>
                <svg className="plus-svg absolute bottom-[-70px] right-[-90px] hidden xl:block" width="153" height="166" viewBox="0 0 153 166" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.19727 152.61H11.5586V154.49H7.19727V159.432H5.19922V154.49H0.837891V152.61H5.19922V148.045H7.19727V152.61Z" fill="#E5E5E5"/>
                    <path d="M42.1973 117.61H46.5586V119.49H42.1973V124.432H40.1992V119.49H35.8379V117.61H40.1992V113.045H42.1973V117.61Z" fill="#E5E5E5"/>
                    <path d="M77.1973 12.6104H81.5586V14.4902H77.1973V19.4316H75.1992V14.4902H70.8379V12.6104H75.1992V8.04492H77.1973V12.6104Z" fill="#E5E5E5"/>
                    <path d="M77.1973 47.6104H81.5586V49.4902H77.1973V54.4316H75.1992V49.4902H70.8379V47.6104H75.1992V43.0449H77.1973V47.6104Z" fill="#E5E5E5"/>
                    <path d="M77.1973 82.6104H81.5586V84.4902H77.1973V89.4316H75.1992V84.4902H70.8379V82.6104H75.1992V78.0449H77.1973V82.6104Z" fill="#6246E5"/>
                    <path d="M77.1973 117.61H81.5586V119.49H77.1973V124.432H75.1992V119.49H70.8379V117.61H75.1992V113.045H77.1973V117.61Z" fill="#E5E5E5"/>
                    <path d="M77.1973 152.61H81.5586V154.49H77.1973V159.432H75.1992V154.49H70.8379V152.61H75.1992V148.045H77.1973V152.61Z" fill="#E5E5E5"/>
                    <path d="M112.197 12.6104H116.559V14.4902H112.197V19.4316H110.199V14.4902H105.838V12.6104H110.199V8.04492H112.197V12.6104Z" fill="#E5E5E5"/>
                    <path d="M112.197 47.6104H116.559V49.4902H112.197V54.4316H110.199V49.4902H105.838V47.6104H110.199V43.0449H112.197V47.6104Z" fill="#E5E5E5"/>
                    <path d="M112.197 82.6104H116.559V84.4902H112.197V89.4316H110.199V84.4902H105.838V82.6104H110.199V78.0449H112.197V82.6104Z" fill="#E5E5E5"/>
                    <path d="M112.197 117.61H116.559V119.49H112.197V124.432H110.199V119.49H105.838V117.61H110.199V113.045H112.197V117.61Z" fill="#E5E5E5"/>
                    <path d="M112.197 152.61H116.559V154.49H112.197V159.432H110.199V154.49H105.838V152.61H110.199V148.045H112.197V152.61Z" fill="#E5E5E5"/>
                    <path d="M151.559 12.6104V14.4795H140.838V12.6104H151.559ZM147.197 8.04492V19.4316H145.21V8.04492H147.197Z" fill="#8D39FF"/>
                    <path d="M147.197 47.6104H151.559V49.4902H147.197V54.4316H145.199V49.4902H140.838V47.6104H145.199V43.0449H147.197V47.6104Z" fill="#E5E5E5"/>
                    <path d="M147.197 82.6104H151.559V84.4902H147.197V89.4316H145.199V84.4902H140.838V82.6104H145.199V78.0449H147.197V82.6104Z" fill="#E5E5E5"/>
                    <path d="M147.197 117.61H151.559V119.49H147.197V124.432H145.199V119.49H140.838V117.61H145.199V113.045H147.197V117.61Z" fill="#E5E5E5"/>
                    <path d="M147.197 152.61H151.559V154.49H147.197V159.432H145.199V154.49H140.838V152.61H145.199V148.045H147.197V152.61Z" fill="#E5E5E5"/>
                </svg>
            </div>            
        </section>


    );
};

export default Home;
