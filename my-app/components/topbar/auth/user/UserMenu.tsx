"use client"
import { useEffect, useState } from "react"
import UserImage from "./UserImage"
import SignOutBtn from "../button/SignOutBtn"
import type { Session } from "next-auth"

interface Props {
    session: Session | null

}
const UserMenu = ({ session }: Props) => {

    const [show, setShow] = useState(false)

    const { image, name, email } = session?.user || {}

    useEffect(() => {
        if (session) {

            // fetch(`http://localhost:8000/getit`).then(response => response.json()).then(data => console.log(data))
        }
    }, [])

    return (
        <div className={`${show && 'bg-white relative h-fit'}`}>
            <div className={`${show && 'grid grid-flow-col'}`}>
                {show &&
                    <div className="grid grid-flow-row gap-2">
                        <div className="border flex flex-col p-2 ">
                            <div>{name}</div>
                            <div>{email}</div>
                        </div>
                        <div className="grid grid-flow-row p-4">
                            <div>test</div>
                            <div>test</div>
                        </div>
                        <div>
                            <SignOutBtn />
                        </div>
                    </div>
                }
                <div>
                    <UserImage show={show} setShow={setShow} userImage={image} />
                </div>
            </div>
        </div>
    )
}

export default UserMenu