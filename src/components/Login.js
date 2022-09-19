import styled from "styled-components";

const Login = (props)=>{
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt="logo1"/>
                    <SIGNUP>GET ALL THERE</SIGNUP>
                    <DESCRIPTION>Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.</DESCRIPTION>
                <CTALogoTwo src="/images/cta-logo-two.png" alt="logo2"/>
                </CTA>
                <BgImage/>
            </Content>
        </Container>
    );
};

const Container = styled.section`
    overflow:hidden;
    display:flex;
    flex-direction:column;
    text-align :center;
    height:100vh;
`;

const Content = styled.div`
    // margin-bottom:10vw;
    width:100%;
    // position:relative;
    // min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding:40px 80px;
    height :100%;
`;

const BgImage = styled.div`
    height:100%;
    // background-position:top;
    background-size:cover;
    background-repeat:no-repeat;
    background-image:url("/images/login-background.jpg");
    position:absolute;
    top:0;
    right:0;
    left:0;   
    z-index:-1;
    
`;

const CTA=styled.div`
    
    max-width:700px;
    display:flex;
    flex-direction:column;
    width:100%
    // flex-wrap:wrap;
    // justify-content:center;
    // align-items:center;
    // text-align :center;
    // margin:1vw auto;
    // transition-timing-function:ease-out;
    // transition:opacity 0.2s;

`;

const CTALogoOne= styled.img`
    margin-bottom: 10px;
    min-height:2px;
    max-width:600px;
    display:block;
    margin:1vw auto;
    width:100%
`;

const SIGNUP = styled.a`
font-weight:bolder;
color: #f9f9f9;
background-color: #0063e5;
margin: 5px auto;
width:80%;
letter-spacing:2px;
font-size:25px;
padding:15px;
border:2px solid black;
border-radius:12px;

 &:hover{
background-color: #0483ee;
cursor:pointer;

 }
`;
const DESCRIPTION = styled.h5`
letter-spacing:1px;
line-height:1.5;

`;
const CTALogoTwo= styled.img`
margin-bottom: 10px;
min-height:2px;
display:block;
margin:2px auto;
vertical-align:bottom;
width:100%
`;


export default Login;