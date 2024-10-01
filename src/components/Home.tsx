import { Link } from "react-router-dom";
import { BlurCircle, Btnbox, ContentImage, EmailInput, ForgotPassword, Form, GithubBtn, GithubBtnContent, GithubIcon, GoogleBtn, GoogleBtnContent, GoogleIcon, ImageBox, InputBox, LeftLine, LineBox, LoginBtn, LoginBtnBlur, LoginText, Logo, LogoBox, LogoTitle, MainContainer, OrText, PasswordInput, RightLine, SignUpBox, Span, Span2, SubTitle, Title, Wrapper } from "./Home.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons"
import { useForm } from "react-hook-form";
import logoImage from "../common/images/trip-logo.png"

interface IForm {
    email: string,
    password: string,
}


function Home() {


    const { register, handleSubmit } = useForm<IForm>()


    const onVaild = (data: IForm) => {

        console.log(`userEmail: ${data.email}`)

    }

    return (
        <>
            <MainContainer>
                <Wrapper>
                    <ImageBox>
                        <ContentImage>
                            <LogoBox>
                                <Logo src={logoImage} />
                                <LogoTitle>TripDot</LogoTitle>
                            </LogoBox>
                        </ContentImage>
                        <BlurCircle />
                    </ImageBox>

                    <InputBox>
                        <Title>Welcome To TripDot</Title>
                        <SubTitle>Your gateway to endless possibilities</SubTitle>
                        <Form onSubmit={handleSubmit(onVaild)}>
                            <GoogleBtn>
                                <GoogleIcon icon={faGoogle} />
                                <GoogleBtnContent>Continue with Google</GoogleBtnContent>
                            </GoogleBtn>

                            <GithubBtn>
                                <GithubIcon icon={faGithub} />
                                <GithubBtnContent>Continue with Github</GithubBtnContent>
                            </GithubBtn>

                            <LineBox>
                                <LeftLine />
                                <OrText>or</OrText>
                                <RightLine />
                            </LineBox>

                            <EmailInput {...register('email')}
                                placeholder="Email"
                                type="text"
                            />
                            <PasswordInput {...register('password')}
                                placeholder="Password"
                                type="password"
                            />
                            <ForgotPassword>Forgot Password?</ForgotPassword>

                            <Btnbox>
                                <LoginBtn>
                                    <LoginText>LogIn</LoginText>
                                </LoginBtn>
                                <LoginBtnBlur />
                            </Btnbox>


                            <SignUpBox>
                                <Span>Don't have an account?</Span>
                                <Link to="register"><Span2>Sign Up</Span2></Link>
                            </SignUpBox>

                        </Form>
                    </InputBox>
                </Wrapper>
            </MainContainer>
        </>
    );
};

export default Home;