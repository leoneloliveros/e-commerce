import { Carousel } from "react-bootstrap";

const MainSlider = () => {
    const images = [
        "https://s3.amazonaws.com/makeitreal/projects/e-commerce/banner-slider-1.jpg",
        "https://s3.amazonaws.com/makeitreal/projects/e-commerce/banner-slider-2.jpg",
        "https://s3.amazonaws.com/makeitreal/projects/e-commerce/banner-slider-3.jpg"
    ];
    return (
        <>
            <Carousel>
                {images.map((elem, index) => (                    
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={elem}
                            alt="First slide"
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
};
export default MainSlider;
