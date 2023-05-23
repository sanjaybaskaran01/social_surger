import Slider from "react-slick";

const Testimonials = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div id="testimonials">
      <h1>Our Collaborations</h1>
      <Slider {...settings}>
        {/* Replace the following with the logos of the companies */}
        <div>
          <img src="/heroPage.svg" alt="Logo 1" />
        </div>
        <div>
          <img src="/heroPage.svg" alt="Logo 2" />
        </div>
        <div>
          <img src="/heroPage.svg" alt="Logo 3" />
        </div>
        <div>
          <img src="/heroPage.svg" alt="Logo 4" />
        </div>
      </Slider>

      <style jsx>{`
        /* add your CSS here */
      `}</style>
    </div>
  );
};

export default Testimonials;
