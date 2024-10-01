import styled from "styled-components";
import loginImage from "../common/images/login-main.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,1);
`


export const Wrapper = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'a b';
`
//------------------------------image---------------------------------

export const ImageBox = styled.div`
display: flex;
position: relative;
grid-area: a;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
`

export const ContentImage = styled.div`
  display: flex;
  align-items: end;
    width: 76%;
    height: 90%;
    min-width: 500px;
    z-index: 98;
    border-radius: 30px;
    background-image: url(${loginImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`


export const BlurCircle = styled.div`
    position: absolute;
    right: 0px;
    width: 200px;
    height: 400px;
    border-radius: 100%;
    background-color: rgb(0,174,202);
    filter: blur(130px);
`
export const LogoBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 200px;
height: auto;
margin-bottom: 20px;
`
export const LogoTitle = styled.span`
    z-index: 99;
    font-size: 26px;
    color: white;
    margin-left: 5px;
`

export const Logo = styled.img`
    z-index: 99;
    width: 50px;
    height: auto;
`

//------------------------------input---------------------------------




export const InputBox = styled.div`
display: flex;
grid-area: b;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
`
export const Title = styled.span`
    font-size: 50px;
    color: white;
`

export const SubTitle = styled.span`
margin-top: 16px;
font-weight: 300;
font-size: 24px;
color: rgba(255,255,255,0.6);

    
`

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 40px;
width: 90%;
height: auto;

`

export const GoogleBtn = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 400px;
height: 46px;
background-color: rgba(255, 255, 255, 0.15);
border: 0.6px solid #FFFFFF;
box-shadow: inset -2px -2px 4px rgba(255, 255, 255, 0.25), inset 2px 2px 4px rgba(255, 255, 255, 0.25);
backdrop-filter: blur(5px);
border-radius: 10px;

&:hover{
    background: rgba(0, 0, 0, 0.3);
    cursor: pointer;
}
`

export const GoogleBtnContent = styled.span`
margin-left: 20px;
font-size: 20px;
color: rgba(255,255,255,1);
`
export const GoogleIcon = styled(FontAwesomeIcon)`
    color: white;
    font-size: 30px;
`



export const GithubBtn = styled(GoogleBtn)`
    margin-top: 30px;
`

export const GithubBtnContent = styled(GoogleBtnContent)`
`
export const GithubIcon = styled(GoogleIcon)`
`




//------------------------------Or Line---------------------------------

export const LineBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    width: 500px;
    height: auto;
`

export const LeftLine = styled.div`
    width: 200px;
    height: 2px;
    background-color:rgba(255,255,255,0.2);
    border-radius: 2px;

`
export const OrText = styled.span`
margin: 0 20px;
    font-size: 20px;
    color: rgba(255,255,255,0.7);
`

export const RightLine = styled.div`
    width: 200px;
    height: 2px;
    background-color: rgba(255,255,255,0.2);
    border-radius: 2px;

`

//------------------------------Email Or Password---------------------------------

export const EmailInput = styled.input`
display: flex;
align-items: center;
width: 400px;
height: 46px;
background: rgba(255, 255, 255, 0.15);
border: 0.6px solid #FFFFFF;
box-shadow: inset -2px -2px 4px rgba(255, 255, 255, 0.25), inset 2px 2px 4px rgba(255, 255, 255, 0.25);
backdrop-filter: blur(5px);
border-radius: 10px;
margin-top: 40px;
justify-content: start;
color: white;
font-size: 20px;
padding: 0 20px;

&:focus{
    outline: none;
    background: rgba(0, 0, 0, 0.3)
}
`

export const PasswordInput = styled(EmailInput)`
    margin-top: 30px;
`

export const ForgotPassword = styled.span`
margin-top: 10px;
margin-left: 250px;
    color: rgba(255,255,255,0.6);
    right:58px;
`


//------------------------------Login Btn---------------------------------


export const Btnbox = styled.div`
display: flex;
position: relative;
width: 400px;
height: 50px;
`

export const LoginBtn = styled.div`
display: flex;
z-index: 99;
margin-top: 30px;
align-items: center;
justify-content: center;
width: 400px;
height: 50px;
background: rgba(0, 161, 197, 0.5);
border-radius: 100px;
&:hover{
    background: rgba(0,0,0,0.7);
    cursor: pointer;
}

`

export const LoginBtnBlur = styled.div`
position: absolute;
top: 38px;
width: 400px;
height: 30px;
background: rgba(0, 161, 197, 1);
border-radius: 100px;
filter: blur(20px);
`

export const LoginText = styled.span`
    font-size: 20px;
    color: white;
`

//------------------------------Sign Up---------------------------------

export const SignUpBox = styled.div`
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: auto;
`


export const Span = styled.span`
    font-size: 16px;
    color: rgba(255,255,255,0.5);
`

export const Span2 = styled.span`
margin-left: 10px;
    font-size: 16px;
    color: rgba(255,255,255,0.8);
`