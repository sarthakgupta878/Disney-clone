import styled from "styled-components";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";

const ImgSlider = (props) => {
    let settings = {
        dots: true,
        Infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <Carousel {...settings}>
           <Wrap>
            <a>
                <img src="/images/slider-badging.jpg" alt="" />
            </a>
           </Wrap>
           <Wrap>
            <a>
                <img src="/images/slider-scale.jpg" alt="" />
            </a>
           </Wrap>
           <Wrap>
            <a>
                <img src="/images/slider-badag.jpg" alt="" />
            </a>
           </Wrap>
           <Wrap>
            <a>
                <img src="/images/slider-scales.jpg" alt="" />
            </a>
           </Wrap>
        </Carousel>
    );

    
}
const Carousel = styled(Slider)`

    margin-top:20px;

    & > button{
        opacity: 0;
        height:100%;
        z-index:1;
        width:5vw;
        
        &:hover {
            opacity: 1;
            transition: opacity 0.2s ease 0s; 
        }
    }

    ul li button{
        &:before{
            font-size:10px;
        }
    }

    ul li.slick-active button:before{
        color:white;
    }

    .slick-list{
        overflow: initial;
    }

    .slick-prev{
        left:-55px;

    }
    .slick-next{
        right:-55px;
    }
`;

const Wrap =styled.div`
    border-radius:5px;
    cursor:pointer;
    position: relative;

    a{
        border-radius:5px;
        padding: 5px;
        // position: relative;
    }

    img{
        width: 100%;
        height: 100%;
    }

    &:hover{
        padding: 0px;
        border: 4px solid white;
        transition-duration:350ms;
    }

`;
export default ImgSlider;