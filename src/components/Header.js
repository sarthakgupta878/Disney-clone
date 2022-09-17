import styled from "styled-components";

const Header = (props) =>{
    return(
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="disney logo"/>
            </Logo>
        </Nav>
    );
}

const Nav = styled.nav`
    position:fixed;
    top:0;
    left:0;
    right:0;
    height :90px;
    background-color:black;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 2px 40px;
    z-index:1;
`;

const Logo = styled.a`
    padding 2px;
    width:120px;
    margin-top:9px;
    // max-height:50px;
    display:inline-block;
    img{
        display:block;
        width:100%;
    }
`;

export default Header;