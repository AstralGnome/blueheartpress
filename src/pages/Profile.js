import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Profile() {
  let navigate = useNavigate();
  let { username } = useParams();
  
  if (username) {
    return (
      <div>
        This is the profile page for {username}.
      </div>
    )
  } else {
    return (
    <button
      onClick={() => {
        navigate("/")
      }}
      >Create a profile???
    </button>
  );
}
}

export default Profile;
