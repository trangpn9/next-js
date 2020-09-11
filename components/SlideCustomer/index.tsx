import React, { useRef } from 'react'
import { withTranslation } from '../../i18n'
import Slider from "react-slick"
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const SampleNextArrow:any = ({ className, style, onClick }) => {  
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#cccccc", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

const SamplePrevArrow:any = ({ className, style, onClick }) => {  
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#cccccc", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

const SlideCustomer = () => {
  const slideRef:any = useRef({});

  const settingSlide = {
    dots: false,
    infinite: true,
    speed: 500,    
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],    
  };

  const handleNext = () => {    
    slideRef.current.slickNext();
  }

  const handlePrevious = () => {
    slideRef.current.slickPrev();
  }
  
  return (
    <Container>
      <div style={{ textTransform: 'uppercase' }}>Đối tác</div>    
      <div>
        <div>
          <Slider ref={slideRef} {...settingSlide}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>        
        </div>
        <br/>
        
        <Button variant="danger" onClick={handleNext}>Next</Button>
        <Button variant="success" onClick={handlePrevious}>Previous</Button>        
      </div>
    </Container>
  )
}

SlideCustomer.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default withTranslation()(SlideCustomer)
