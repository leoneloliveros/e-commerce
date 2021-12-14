import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';

import getEvenElement from '../utils/getEvenElement';

function CarouselView({ images }) {
  const [click, setClick] = useState() 


  const handleClick = () => {
    setClick(false)
  }

  const handleDelete = () => {
     
  }

  useEffect(()=> {
    console.log('Corrio el componente del carousel')
  }, [click])

  return (
    <>
      <a onClick={handleClick}>Click</a>
      <a onClick={handleDelete}></a>
      <Carousel>
        { images.map((element, index) => (  //[0, 1, 2, 3]
           getEvenElement(index) && (   
            <Carousel.Item>
            <img
              className="d-block w-100"
              src={element}
              alt="First slide"
            />
          </Carousel.Item>
           )) 
          
        )}
      </Carousel>
    </>
  );
}

export default CarouselView