import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import './testimonialSlider.css'
import { testimonials } from '../../data'
import {Autoplay, Pagination} from 'swiper/modules'



const TestimonialsSlider = () => {
  return (
    <Swiper pagination={{dynamicBullets:true,
    clickable:true}}
    autoplay={{
      delay: 4000,
      disableOnInteraction: false
    }} modules={[Autoplay, Pagination]}
    className='mySwiper'
    >
      {
        testimonials.map(({text, name, image, position}, i) => (
          <SwiperSlide key={i}>
            <div className="relative lg:mt-[32px] before:content-quote p-8">
              <div>
                <p>{text}</p>
              <div className="flex items-center mt-[18px] mb-8">
              <img src={image} alt="profile" />
              <div className='ml-4'>
              <h6 className='font-bold'>
                {name}
                </h6> 
                <p className='text-sm'>{position}</p>
                </div>
              </div>
              </div>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper> 
  )
}

export default TestimonialsSlider