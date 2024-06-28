import { useLogin } from "../hooks/useLogin"

export const ProfilePage = () => {
    const username = useLogin();
    return (
        <div className="flex justify-center h-screen w-full items-center">
            <h1 className="font-bold text-3xl text-blue-600">Welcome {username}</h1>
        </div>
    )
}