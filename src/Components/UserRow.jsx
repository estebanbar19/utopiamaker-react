import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { UserContext } from '../App';

function UserRow({key, id}) {

    const {user} = useContext(UserContext);
  
    const [userInfo, setUserInfo] = useState(null);

    if(!userInfo){
        axios.get('http://localhost:4000/users/'+id).then((response) => {
            if(response.status === 200){
                setUserInfo(response.data);
            }
        });
    }
  
    return (
        <>
            {userInfo && <p key={key}>{userInfo.name} {(userInfo.id === user.id) && "(You)"}</p>}
        </>
    )
}

UserRow.propTypes = {
    id: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired
}

export default UserRow
