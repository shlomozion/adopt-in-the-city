
interface Props {
    btnText: string
}

const SubmitBtn = ({ btnText }: Props) => {
    return (
        <div className="px-8 py-4 sm:flex justify-end  sm:px-6">
            <button
                type={'submit'}
                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
            >
                {btnText}
            </button>
        </div>
    )
}

export default SubmitBtn