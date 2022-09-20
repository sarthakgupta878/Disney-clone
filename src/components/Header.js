import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import { selectUserEmail, selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from "../features/user/userSlice";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
    const navigate = useNavigate();
    const Dispatch = useDispatch();
    // const History = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                navigate('/home');
            }
        });
    }, [userName])

    const handleAuth = () => {
        if(!userName){

            auth.signInWithPopup(provider)
            .then((result) => {
                setUser(result.user);
                console.log(result);
            })
            .catch((error) => {
                alert(error.message);
            });
        }else if(userName){
            auth.signOut().then(()=>{
                Dispatch(setSignOutState());
                navigate('/');
            })
            .catch((err)=>{
                alert(err.message);
            });
        }

    };

    const setUser = (user) => {
        Dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            })
        )
    }

    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="disney logo" />
            </Logo>

            {
                !userName ? (<Login onClick={handleAuth}>LOGIN</Login>
                ) : (
                    <>

                        <Navmenu>
                            <a href="/home" >
                                <img src="/images/home-icon.svg" alt="home" />
                                <span>HOME</span>
                            </a>
                            <a href="/search" >
                                <img src="/images/search-icon.svg" alt="search" />
                                <span>SEARCH</span>
                            </a>
                            <a href="/watchlist" >
                                <img src="/images/watchlist-icon.svg" alt="watchlist" />
                                <span>WATCHLIST</span>
                            </a>
                            <a href="/originals" >
                                <img src="/images/original-icon.svg" alt="original" />
                                <span>ORIGINALS</span>
                            </a>
                            <a href="/movies" >
                                <img src="/images/movie-icon.svg" alt="movie" />
                                <span>MOVIES</span>
                            </a>
                            <a href="/series" >
                                <img src="/images/series-icon.svg" alt="series" />
                                <span>SERIES</span>
                            </a>
                        </Navmenu>
                        <SignOut>
                            <UserImg src={userPhoto} alt={userName} />
                            <DropDown>
                                <span onClick={handleAuth}>Sign Out</span>
                            </DropDown>
                        </SignOut>
                    </>
                )}

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
    letter-spacing:3px;
`;

const Logo = styled.a`
    padding: 5px;
    width:100px;
    margin-top:5px;
    // max-height:50px;
    display:inline-block;
    img{
        display:block;
        width:100%;
    }
`;

const Navmenu = styled.div`
    align-items:center;
    display:flex;
    flex-flow: row nowrap;
    height:100%;
    justify-content:flex-end;
    margin-top:20px;
    // padding:0;
    position:relative;
    margin-left:30px;
    margin-right:auto;

        @media (max-width:850px){
            display:none;
        }
        @media (max-width:1000px){
            margin-left:2px;

        }

        a{
            display:flex;
            align-items:center;
            padding:5px;
            margin:10px;
            
            img{
                height:20px;
                min-width:20px;
                width: 20px;
                margin-bottom:2px;
                // margin-right:10px;
            }
            span{
                font-size:15px;
                
                position: relative;
                
                
                &:before{
                    content: '';
                    display: block;
                    background-color:white;
                    border-radius:4px;     
                    bottom: -10px;
                    height: 2px;
                    left: 0px;
                    opacity: 0;
                    position: absolute;
                    right:2px;
                    left: 0px;
                    width: auto;
                    transform-origin:left center; 
                    transform:scaleX(0);
                    transition: all 300ms linear;
                    visibility: hidden;

                    
                }
            }

            &:hover{
                span:before{
                    transform: scaleX(1);
                    visibility: visible;
                    opacity: 1;
                }
            }
        }
`;

const Login = styled.a`
        padding: 10px 19px;
        margin-top:13px;
        cursor: pointer;
        border: 2px solid blue;
        border-radius:10px;
        font-weight:bold;

        &:hover{
            color: black;
            background-color: #f9f9f9;
            
        }
`;
const DropDown = styled.div`
        position: absolute;
        right:0px;
        top : 50px;
        background: rgb(19,19,19);
        border: 2px solid black;
        border-radius: 5px;
        padding: 10px;
        width:120px;
        font-size:18px;
        opacity: 0;
        &:hover{
            color: black;
            background-color: #f9f9f9;
            
        }

       
`;

const SignOut = styled.div`
        position: relative;
        height: 50px;
        top:10px;
        width:50px;
        display: flex;
        justify-content:center;
        align-items:center;
        cursor:pointer; 

        &:hover{
            ${DropDown}{
                opacity: 1;
                transition-duration: 0.5s;
            }
        }
 `;

const UserImg = styled.img`
        height: 100%;
        border-radius:50%;
 `;



export default Header;