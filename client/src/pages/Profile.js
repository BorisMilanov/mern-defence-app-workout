import { useAuthContext } from "../hooks/useAuthContext"

const Profile = ()=> {
    const {user} = useAuthContext();

    return(<p>{user.email}</p>)
}

export default Profile