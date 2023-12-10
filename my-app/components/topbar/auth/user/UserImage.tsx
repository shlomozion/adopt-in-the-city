"use client"
import Image from "next/image"
import { Dispatch, SetStateAction } from "react"

interface Props {
    userImage: string | null | undefined
    setShow: Dispatch<SetStateAction<boolean>>
    show: boolean
}

const UserImage: React.FC<Props> = ({ userImage, setShow, show }: Props) => {
    return (
        <div onClick={() => !show ? setShow(true) : setShow(false)} className="p-3">
            <Image
                className="relative rounded-full hover:opacity-80 hover:cursor-pointer"
                src={userImage as string}
                alt="user-image"
                height={45}
                width={45} />
        </div>
    )
}

export default UserImage