import styled from "styled-components";


export const Wrapper = styled.div`
display: flex;
width: 100vw;
height: 100vh;
justify-content: center;
align-items: center;
`


export const RegisterContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 600px;
height: 700px;

    
`

export const Logo = styled.img`
    width: 70px;
    height: auto;
`

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 540px;
  height: auto;
  margin-top: 50px;
`

//-----------------First Line-----------------------------

export const FirstInputBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
`

export const FullNameBox = styled.div`
display: flex;
flex-direction: column;
width: 250px;
height:auto;
`

export const FullNameInput = styled.input`
width: 250px;
height: 42px;
background-color: rgba(255,255,255,0.2);
margin-top: 5px;
border: 1px solid white;
border-radius: 4px;
color: white;
font-size: 16px;

&:focus{
    outline: none;
    background-color: rgba(0,0,0,0.4);
}
`

export const FullNameError = styled.div`
    width: 250px;
    height: 20px;
   color: rgba(255, 242, 0, 0.8);
    font-size: 14px;
    margin-top: 10px;
`



export const IdInputBox = styled(FullNameBox)`
margin-left: 40px;
`

export const IdInput = styled(FullNameInput)`

`

export const IdInputError = styled(FullNameError)``


//-----------------second Line-----------------------------

export const SecondInputBox = styled(FirstInputBox)`
align-items: start;
flex-direction: column;
margin-top: 10px;

`



export const EmailInputBox = styled.div`
    display: flex;
    align-items: center;
    width: 540px;
    height: auto;
    margin-top: 5px;
`

export const EmailPrefix = styled.input`
width: 170px;
height: 42px;
background-color: rgba(255,255,255,0.2);
border: 1px solid white;
border-radius: 4px;
color: white;
font-size: 16px;

&:focus{
    outline: none;
    background-color: rgba(0,0,0,0.4);
}
`

export const EmailDomain = styled(EmailPrefix)``

export const Select = styled.select`
width: 140px;
height: 42px;
margin-left: 21.6px;
background-color: rgba(255,255,255,0.2);
border: 1px solid white;
border-radius: 4px;
color: white;

&:focus{
    outline: none;
    background-color: rgba(0,0,0,0.4);
}
`

export const EmailError = styled(FullNameError)`
`


//-----------------third Line-----------------------------

export const ThirdInputBox = styled(FirstInputBox)`
margin-top: 10px;
`

export const PasswordBox = styled(FullNameBox)``

export const PasswordInput = styled(FullNameInput)``


export const ConfirmPwBox = styled(IdInputBox)``

export const ConfirmPwInput = styled(FullNameInput)``


export const PasswordError = styled(FullNameError)`

span{
    line-height: 1.25;
}
`

export const ConfirmError = styled(PasswordError)``


//--------------------Btn----------------------------------

export const BtnBox = styled(FirstInputBox)`
margin-top:30px`


export const CreateBtn = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: #FFFFFF;
font-size: 18px;
width: 250px;
height: 60px;
border-radius: 50px;
background-color: rgba(255, 255, 255, 0.15);
border: 0.6px solid #FFFFFF;
box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.25), inset 4px 4px 8px rgba(255, 255, 255, 0.25);
backdrop-filter: blur(5px);

&:hover{
    background-color: rgba(0, 166, 188, 0.4);
    cursor: pointer;
}
`

export const CancelBtn = styled(CreateBtn)`
margin-left: 40px;

&:hover{
    background-color: rgba(188, 0, 0, 0.4);
}
`