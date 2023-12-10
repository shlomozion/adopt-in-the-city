import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import LoginForm from "../forms/LoginForm";

interface Props {
    setShow: Dispatch<SetStateAction<boolean>>
    show: boolean
}

const LogInModal = ({ show, setShow }: Props) => {


    return (
        <div className={`fixed inset-0 transition-opacity ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className={`fixed inset-0 flex items-center justify-center transition-transform ${show ? 'translate-y-0 ease-in-out' : '-translate-y-full ease-in-out'}`}>
                <div className="overflow-hidden rounded-lg  bg-white shadow-xl sm:my-8 max-sm:w-8/12 sm:max-w-lg sm:w-full">
                    <div className="bg-white pb-4 pt-2">
                        <div
                            className="flex justify-end p-2 hover:cursor-pointer"
                            onClick={() => { setShow(false) }}
                        >
                            <div className="border">X</div>
                        </div>
                        <h3
                            className="pt-2 text-center font-semibold leading-6 text-gray-900">
                            Login
                        </h3>

                        <LoginForm show={show} />

                        <div className="text-xs text-center mt-2">Don't have an account?
                            <Link
                                onClick={() => setShow(false)}
                                className="underline"
                                href={'/signup'}>
                                sign up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogInModal;
