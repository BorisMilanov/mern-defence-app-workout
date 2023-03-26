import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [reps, setReps] = useState('');
  // const navigate = useNavigate()
  
  let {user} = useAuthContext()
 console.log(user.token);
  const onSubmitt = async (e) => {

    e.preventDefault();
    fetch('http://localhost:4000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
         'Authorization': `Bearer ${user.token}`,
       
      },
        body: JSON.stringify({title,reps}),
        
      }).then(response => response.json()).then(json => console.log(json));
    
    // redirect to posts route
  
  }


  return (
    <form onSubmit={onSubmitt}>
      <label>
        Title:
        <input value={title}
        onChange ={(e) => 
            setTitle(e.target.value)
        }
        />
      </label>
      <label>
        Reps:
        <input value={reps} type="number"
        onChange ={(e) => 
          setReps(e.target.value)
        }
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddPostForm;
