import styled from "styled-components";
import ImgSlider from "./ImgSlider";

const Home =(props)=>{
    return (
        <Container>
            <ImgSlider/>
        </Container>
    );

};
const Container = styled.main `
    position: relative;
    min-height:calc(100vh - 90px);
    overflow-x :hidden;
    top:87px;
    padding: calc(3.5vh + 5px);
    // display: block;

    &:after{
        background: url("/images/home-background.png") ;
        background-size:cover;
        background-repeat:no-repeat;
        content:'';
        position: absolute;
        inset:0px;
        opacity:1;
        z-index:-1;
    }
`;

export default Home;