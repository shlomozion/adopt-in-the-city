import { Dispatch, SetStateAction } from "react"

interface Props {
    label: string
    type: string
    id: string
    isValid: boolean
    setInput: Dispatch<SetStateAction<string>>
    isSubmitted: boolean
    errorMsg: string
    value: string
}
const Input = ({ label, type, id, isValid, setInput, isSubmitted, errorMsg, value }: Props) => {
    return (
        <div className="p-4">
            <label>
                {label}:<br />
                <input
                    onChange={(e) => setInput(e.target.value)}
                    className={` border-2 
                    ${isSubmitted && !isValid ? 'border-b-red-500'
                            : isSubmitted && isValid ? 'border-b-green-600' : ''}`}
                    type={type}
                    id={id}
                    value={value}
                    required />
            </label>
            <p className={`${isSubmitted && !isValid ?
                'block bg-red-100 rounded py-1 font-medium text-red-600  text-sm mt-1'
                : 'hidden'}`}>
                {errorMsg}
            </p>
        </div>
    )
}

export default Input