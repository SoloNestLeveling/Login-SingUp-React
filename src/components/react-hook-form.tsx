import { useForm } from "react-hook-form";
import styled from "styled-components";

const Form = styled.form`
display: flex;
flex-direction: column;
width: 300px;
height: 400px;
background-color: rgb(255, 176, 176);
`

const NameInput = styled.input`
width: 100px;
height: 20px;
`

const EmailInput = styled.input`
    width: 100px;
    height: 20px;
`

const PasswordInput = styled.input`
    width: 100px;
    height: 20px;
`

const PasswordInput2 = styled.input`
    width: 100px;
    height: 20px;
`

interface IForm {
    name: string,
    email: string,
    password: string,
    password2: string,
}


function HookForm() {

    const { register, handleSubmit, formState: { errors }, setError } = useForm<IForm>(
        { mode: "onSubmit" } // 제출 할때만 검증이 이루어 질 수 있게 설정하는 속성
    )

    const onValid = (data: IForm) => {
        if (data.password !== data.password2) {
            setError("password2", { message: "패스워드가 일치하지 않습니다." })
        }
    }

    return (
        <>
            <Form onSubmit={handleSubmit(onValid)}>
                <NameInput {...register("name",
                    {
                        required: "이름 입력", validate: {
                            fuck: (value) => value.includes("fuck") ? "fuck can not use" : true
                        }
                    })}
                    placeholder="이름" />
                {errors.name && <span>{errors.name.message}</span>}
                <EmailInput {...register("email", {
                    required: "이메일 입력",
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "옳바른 이메일 형식이 아닙니다."
                    }
                })} />
                {errors.email && <span>{errors.email.message}</span>}
                <PasswordInput {...register("password", {
                    required: "패스워드 입려",
                    minLength: {
                        value: 3,
                        message: "패스워드는 최소 3글자 이상입니다."
                    }
                })} />
                {errors.password && <span>{errors.password.message}</span>}
                <PasswordInput2 {...register("password2", {
                    required: "패스워드 입려",
                    minLength: {
                        value: 3,
                        message: "패스워드는 최소 3글자 이상입니다."
                    }
                })} />
                {errors.password2 && <span>{errors.password2.message}</span>}
                <button>btn</button>
            </Form>
        </>
    )
};


export default HookForm;