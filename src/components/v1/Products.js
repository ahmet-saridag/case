// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// some-inner-component.jsx
import { React } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowIcon from '../../assets/public/products/ion_arrow-back-sharp.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Products() {
  const prdoucts = [
    {
      title: 'ICEWAYS',
      desc: 'City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.',
      morePath: '#',
      findPath: '#',
    },
    {
      title: 'ICEWAYS',
      desc: 'City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.',
      morePath: '#',
      findPath: '#',
    },
    {
      title: 'ICEWAYS',
      desc: 'City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.',
      morePath: '#',
      findPath: '#',
    },
    {
      title: 'ICEWAYS',
      desc: 'City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.',
      morePath: '#',
      findPath: '#',
    },
    {
      title: 'ICEWAYS',
      desc: 'City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.',
      morePath: '#',
      findPath: '#',
    },
    {
      title: 'ICEWAYS',
      desc: 'City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.',
      morePath: '#',
      findPath: '#',
    },
    {
      title: 'ICEWAYS',
      desc: 'City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.',
      morePath: '#',
      findPath: '#',
    },
  ];
  return (
    <div className="products">
      <h1 className="products__title">Featured Products</h1>
      <div className="swiper-container">
        <Swiper
          allowTouchMove={true} // disable touch / drag swiping
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },

            375: {
              slidesPerView: 1,
              loop: true,
            },
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={12}
          navigation={{ prevEl: '.prev-button', nextEl: '.next-button' }}
          pagination={{ clickable: true }}
          effect="fade"
        >
          {prdoucts.map((product, idx) => {
            return (
              <SwiperSlide>
                <div className="products__card">
                  <div className="products__card-title">{product.title}</div>
                  <div className="products__card-description">{product.desc}</div>
                  <div className="products__card-cta">
                    <a href={product.morePath} className="products__more">
                      Learn More
                    </a>
                    <a href={product.findPath} className="products__find">
                      Find a Dealer
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="swiper-navigation">
          <div className="prev-button">
            <img src={ArrowIcon} alt="Prev button" />
          </div>
          <div className="next-button">
            <img src={ArrowIcon} alt="Next button" />
          </div>
        </div>
      </div>
    </div>
  );
}
