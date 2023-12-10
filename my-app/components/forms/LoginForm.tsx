import { useState, useEffect, FormEvent } from "react"
import { useEmailValidator } from "./validationHooks/emailValidator"
import { usePasswordValidator } from "./validationHooks/passwordValidator"
import Input from "./input/Input"
import SubmitBtn from "./button/SubmitBtn"

interface Props {
    show: boolean
}

const LoginForm = ({ show }: Props) => {

    const { email, setEmail, isEmailValid } = useEmailValidator()
    const { password, setPassword, isPasswordValid } = usePasswordValidator()

    const [isSubmitted, setIsSubmitted] = useState(false)


    const loginHandler = (e: FormEvent) => {
        e.preventDefault()
        setIsSubmitted(true)
        if (isEmailValid && isPasswordValid) {
            console.log('email', email);
            console.log('password', password);
        }
    }

    useEffect(() => {
        if (!show) {
            setEmail('')
            setPassword('')
            setIsSubmitted(false)
        }
    }, [show])

    return (
        <form onSubmit={loginHandler}>
            <div className="flex justify-center">
                <div className="grid grid-flow-row p-4 gap-4">
                    <Input
                        label="Email"
                        type="email"
                        id="email"
                        isValid={isEmailValid}
                        setInput={setEmail}
                        isSubmitted={isSubmitted}
                        errorMsg="please enter email *"
                        value={email}
                    />
                    <Input
                        label="Password"
                        type="password"
                        id="password"
                        isValid={isPasswordValid}
                        setInput={setPassword}
                        isSubmitted={isSubmitted}
                        errorMsg="please enter a valid password *"
                        value={password} />
                </div>
            </div>
            <SubmitBtn btnText="Log in" />
        </form>
    )
}

export default LoginForm