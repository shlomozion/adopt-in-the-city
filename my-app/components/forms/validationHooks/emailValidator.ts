import { useState, useEffect } from "react"



export const useEmailValidator = () => {
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [email, setEmail] = useState('')

    useEffect(() => {
        if (!email) {
            return;
        } else {
            const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g;
            const isValid = emailRegex.test(email);
            if (isValid) {
                setIsEmailValid(true);
            } else {
                setIsEmailValid(false);
            }
        }
    }, [email]);
    return { email, setEmail, isEmailValid };

}