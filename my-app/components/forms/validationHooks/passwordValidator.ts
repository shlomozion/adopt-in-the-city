import { useState, useEffect } from "react";


export const usePasswordValidator = () => {

    const [password, setPassword] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    useEffect(() => {
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/g;
        const isValid = passwordRegex.test(password);
        if (!isValid) {
            setIsPasswordValid(false);
        } else {
            setIsPasswordValid(true);
        }
    }, [password]);

    return {
        password,
        setPassword,
        isPasswordValid,
    }
}

