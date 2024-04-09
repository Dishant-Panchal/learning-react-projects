import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {   
    const {user} = useContext(UserContext);

    if (!user || !user.userName) return <div>Please Login!</div>
  return (
    <div>        
        <h4>Welcome {user.userName}!</h4>
    </div>
  )
}

export default Profile
