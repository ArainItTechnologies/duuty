import { useState } from 'react';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Mike Taylor',
      location: 'Lahore, Pakistan',
      content: 'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      content: 'The service was exceptional from start to finish. I would recommend this company to anyone looking for quality work.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: 3,
      name: 'David Wilson',
      location: 'London, UK',
      content: 'Absolutely brilliant experience. The team went above and beyond to deliver exactly what we needed.',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="testimonial-section py-[50px] sm:py-[70px] md:py-[100px]">
        <div className="container-wrapper mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 w-full">
                    <div className='testimonial-head text-[18px] font-semibold text-(--secondary-text-color) text-center lg:text-left'>Testimonials</div>
                    <h2 className='text-[28px] lg:text-[34px] xl:text-[50px] font-[AvenirNextBold] text-(--primary-text-color) mb-[35px] lg:mb-[70px] lg:max-w-[350px] text-center lg:text-left'>What users say about Us.</h2>
                    <div className="space-x-2 hidden lg:flex">
                    {testimonials.map((_, index) => (
                        <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-3 w-3 rounded-full cursor-pointer ${currentIndex === index ? 'bg-[#39425D]' : 'bg-[#E5E5E5]'}`}
                        aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                    </div>
                </div>

                <div className="max-w-[90%] sm:max-w-[100%] lg:w-1/2 lg:px-6 lg:mt-0">
                    <div className='testimonial-details lg:text-left text-center  bg-white max-w-[620px] rounded-[10px] p-[20px] sm:p-[30px] shadow-[0px_0px_12px_2px_var(--testimonial-border)]'>
                        <p className="testimonial-quotes max-w-lg text-gray-500 dark:text-gray-400 text-[16px] leading-[32px]">
                            “{testimonials[currentIndex].content}”
                        </p>

                        <img className="h-[54px] w-[54px] mt-[24px] mb-[14px] rounded-full mx-auto lg:mx-0 object-cover" src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                        <p className="text-[var(--testimonial-text-color)] font-medium customer-name text-[18px]">{testimonials[currentIndex].name}</p>
                        <p className="text-sm text-gray-500 mt-[5px]">{testimonials[currentIndex].location}</p>
                    </div>

                    <div className="flex items-center justify-between mt-6 md:mt-12 justify-center lg:justify-start">
                        <button onClick={prevTestimonial} aria-label="Previous testimonial" title="left arrow" className="p-2 text-[#E6E6F3] transition-colors duration-300 border rounded-full cursor-pointer rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#14183E" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button onClick={nextTestimonial} aria-label="Next testimonial" title="right arrow" className="p-2 text-[#E6E6F3] transition-colors duration-300 border rounded-full cursor-pointer rtl:-scale-x-100 dark:border-[#E6E6F3] dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100 prev-btn ml-[15px]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#14183E" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </section>
  );
};

export default TestimonialSection;