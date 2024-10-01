import { BtnBox, CancelBtn, ConfirmError, ConfirmPwBox, ConfirmPwInput, CreateBtn, EmailDomain, EmailError, EmailInputBox, EmailPrefix, FirstInputBox, FullNameBox, FullNameError, FullNameInput, IdInput, IdInputBox, Logo, PasswordBox, PasswordError, PasswordInput, RegisterForm, SecondInputBox, Select, ThirdInputBox, Wrapper } from "./Register.styles"
import { RegisterContainer } from "./Register.styles";
import logoImage from "../common/images/trip-logo.png"
import { InputBox } from "./Home.styles";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

interface IForm {
    name: string,
    id: string,
    emailPrefix: string,
    emailDomain: string,
    password: string,
    confirmPw: string,
    selectOptions: string

}

function Register() {

    const { register, handleSubmit, watch, formState: { errors }, setError, setValue, reset } = useForm<IForm>({
        defaultValues: {
            selectOptions: "직접입력"
        },
        mode: "onSubmit"
    });

    const navigator = useNavigate();

    const selectValue = watch("selectOptions")

    const hashPassword = async (password: string) => {

        const hashRound = 10;

        const hash = await bcrypt.hash(password, hashRound);

        return hash;
    };



    const onVaild = async (data: IForm) => {

        if (data.password !== data.confirmPw) {
            setError("confirmPw", { message: "패스워드가 다릅니다." })
        };

        const userEmail = `${data.emailPrefix}@${data.emailDomain}`;

        const password = await hashPassword(data.password);

        const userData = {

            name: data.name,
            id: data.id,
            email: userEmail,
            password,
        };


        const existingUserData = localStorage.getItem("userData");

        if (existingUserData) {

            const parseData = JSON.parse(existingUserData);

            if (parseData.id === userData.id) {
                setError("id", { message: "이미 존재하는 ID입니다." })
                return;
            };


            if (parseData.email === userData.email) {
                setError("emailPrefix", { message: "이미 존재하는 Email 입니다." })
                return;
            };
        }


        localStorage.setItem("userData", JSON.stringify(userData))
        alert("회원가입을 완료 했습니다.");



        reset();

    };

    useEffect(() => {
        if (selectValue !== "직접입력") {
            setValue("emailDomain", selectValue)
        } else {
            setValue("emailDomain", "")
        }
    });

    const onClickCancel = () => {
        navigator("/")

    }

    return (
        <>
            <Wrapper>
                <RegisterContainer>
                    <Logo src={logoImage} />
                    <span style={{
                        color: "rgba(255,255,255,1)",
                        fontSize: "60px",
                    }}>Sing up</span>
                    <p style={{
                        fontSize: "20px",
                        marginTop: "10px",
                        color: "rgba(255,255,255,0.6)"
                    }}>Please enter your details to create your vaild account</p>

                    <RegisterForm onSubmit={handleSubmit(onVaild)}>
                        <FirstInputBox>

                            <FullNameBox>
                                <span style={{ color: "rgba(255,255,255,0.4)" }}>Full Name</span>
                                <FullNameInput {...register("name", {
                                    required: "이름을 입력해 주세요!"
                                })} placeholder="이름 입력" />
                                <FullNameError>
                                    {errors.name && <span>{errors.name.message}</span>}
                                </FullNameError>
                            </FullNameBox>

                            <IdInputBox>
                                <span style={{ color: "rgba(255,255,255,0.4)" }}>ID</span>
                                <IdInput {...register("id", {
                                    required: "ID를 입력해 주세요!",
                                })} placeholder="ID 입력" />
                                <FullNameError>
                                    {errors.id && <span>{errors.id.message}</span>}
                                </FullNameError>
                            </IdInputBox>

                        </FirstInputBox>

                        <SecondInputBox>
                            <span style={{ color: "rgba(255,255,255,0.4)" }}>Email</span>
                            <EmailInputBox>
                                <EmailPrefix  {...register("emailPrefix", {
                                    required: "이메일을 입력해 주세요!"
                                })} placeholder="이메일 입력" />
                                <span style={{
                                    fontSize: "30px",
                                    color: "white",
                                    padding: "0 6px",
                                    fontWeight: "300",
                                }}>@</span>
                                <EmailDomain {...register("emailDomain", {
                                    required: "도메인을 선택 또는 입력해 주세요!"
                                })}
                                    placeholder="도메인 직접입력"
                                    disabled={selectValue !== "직접입력"}
                                />
                                <Select {...register("selectOptions")}>
                                    <option value="직접입력">직접입력</option>
                                    <option value="naver.com">naver.com</option>
                                    <option value="gmail.com">gmail.com</option>
                                    <option value="kakao.com">kakao.com</option>
                                </Select>
                            </EmailInputBox>
                            <EmailError>
                                {errors.emailPrefix && <span>{errors.emailPrefix.message}</span>}
                            </EmailError>
                        </SecondInputBox>

                        <ThirdInputBox>
                            <PasswordBox>
                                <span style={{ color: "rgba(255,255,255,0.4)" }}>Password</span>
                                <PasswordInput {...register("password", {
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).{8,}$/,
                                        message: "소문자,대문자,숫자,특수문자를 포함한 최소 8자 이상 입력해야 합니다."
                                    }
                                })} placeholder="패스워드 입력" />
                                <PasswordError>
                                    {errors.password && <span>{errors.password.message}</span>}
                                </PasswordError>
                            </PasswordBox>
                            <ConfirmPwBox>
                                <span style={{ color: "rgba(255,255,255,0.4)" }}>Confirm Password</span>
                                <ConfirmPwInput {...register("confirmPw",)}
                                    placeholder="패스워드 확인" />
                                <ConfirmError>
                                    {errors.confirmPw && <span>{errors.confirmPw.message}</span>}
                                </ConfirmError>
                            </ConfirmPwBox>
                        </ThirdInputBox>
                        <BtnBox>
                            <CreateBtn onClick={handleSubmit(onVaild)}>Create Account</CreateBtn>
                            <CancelBtn onClick={onClickCancel}>Cancel</CancelBtn>
                        </BtnBox>
                    </RegisterForm>
                </RegisterContainer>
            </Wrapper>
        </>
    );
};

export default Register;