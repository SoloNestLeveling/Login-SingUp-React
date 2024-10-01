import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { styled } from "styled-components"

const Form = styled.form`
display: flex;
width: 400px;
height: 400px;
background-color: rgb(255, 176, 176);
`


const EmailPrefix = styled.input`
    width: 100px;
    height: 20px;
`

const EmailDomain = styled.input`
    width: 100px;
    height: 20px;
`


const Select = styled.select`
     width: 100px;
     height: 26px;
`

interface IForm {
    emailPrefix: string,
    emailDomain: string,
    selectOptions: string,
}

function Email() {

    const { register, handleSubmit, watch, setValue } = useForm<IForm>({ defaultValues: { selectOptions: "직접입력", } })


    const selectValue = watch("selectOptions")


    const onSubmit = (data: IForm) => {
        console.log(`user email: ${data.emailPrefix}@${data.emailDomain}`)
    }


    useEffect(() => {
        if (selectValue !== "직접입력") {
            setValue("emailDomain", selectValue)
        } else {
            setValue("emailDomain", "")
        }

    }, [selectValue, setValue])


    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <EmailPrefix {...register("emailPrefix")} />
                <span>@</span>
                <EmailDomain {...register("emailDomain")}
                    placeholder="도메인 입력"
                    disabled={selectValue !== "직접입력"} />
                <Select {...register("selectOptions")}>
                    <option value="직접입력">직접입력</option>
                    <option value="naver.com">naver.com</option>
                    <option value="gmail.com">gmail.com</option>
                    <option value="kakao.com">kakao.com</option>
                </Select>
                <button>btn</button>

            </Form>
        </>
    );
};

export default Email