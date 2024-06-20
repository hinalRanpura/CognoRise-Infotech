import React, { useState } from 'react';
import axios from 'axios'

function Create(){


    const [task,setTask] = useState()

    const handleAdd = () => {
        axios.post('http://localhost:3001/add',{task: task})
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }

    return(
        <div >
            <input type="text" name="" id="" placeholder='Enter Task' onChange={(e) => setTask(e.target.value)} className='center_form_input'/>
            <button type="button" onClick={handleAdd} className='create_form_button'>Add</button>
        </div>
    )
}

export default Create