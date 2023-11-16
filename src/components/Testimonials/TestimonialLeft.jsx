import testimonial from '../../assets/images/testimonial/testimonial.jpg';

const TestimonialLeft = () => {
    return (
        <div className='mt-11 relative mx-auto'>
            <img src={testimonial} alt="" className='md:w-80 md:top-0 md:left-[40px] w-56 left-[50px] top-16 rotate-12' />
            <div className=''>
                <img src={testimonial} alt="" className='absolute md:w-80 left-14 md:top-48 -rotate-6' />
            </div>
        </div>
    );
};

export default TestimonialLeft;