import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Autoplay } from "swiper"
import "swiper/css/autoplay"

const Slider = () => {
  return (
    <section className="galeria">
      <Swiper
        id='description'
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false
        }}
        preloadImages={true}
        breakpoints={{
          1100: {
            slidesPerView : 5
          },
          550:{
            slidesPerView: 1
          }
        }}
      >
        <SwiperSlide>
          <img src="./images/galeria/date-2 (1).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (2).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (3).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (4).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (5).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (6).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (7).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (8).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (9).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (10).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (30).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (31).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (32).jpg" />
        </SwiperSlide>

      </Swiper>
      <Swiper
        id='description'
        modules={[Autoplay]}
        loop={true}
        preloadImages={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          reverseDirection: true
        }}
        breakpoints={{
          1100: {
            slidesPerView: 5
          },
          550: {
            slidesPerView: 1
          }
        }}
      >
        <SwiperSlide>
          <img src="./images/galeria/date-2 (11).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (12).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (13).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (14).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (15).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (16).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (17).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (18).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (19).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (20).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (33).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (34).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (35).jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        id='description'
        modules={[Autoplay]}
        preloadImages={true}
        breakpoints={{
          1100: {
            slidesPerView: 5
          },
          550: {
            slidesPerView: 1
          }
        }}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false
        }}
      >
        <SwiperSlide>
          <img src="./images/galeria/date-2 (21).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (22).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (23).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (24).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (25).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (26).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (27).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (28).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (29).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (36).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (37).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (38).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (39).jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/galeria/date-2 (40).jpg" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Slider