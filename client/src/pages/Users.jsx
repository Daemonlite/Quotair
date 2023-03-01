import {useState,useEffect} from 'react'
import axios from'axios'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'

const Users = () => {
    const [users,setUsers] = useState([])

useEffect(()=>{
    axios.get('http://localhost:9000/api/users')
    .then((res)=>setUsers(res.data))
    .catch((err)=>console.log(err))
},[])
   
  return (
<div className="find">    
<div style={{float:"left",marginBottom:"0 auto"}}>
    <br />
<p className="tag">
Add to your feed
</p>
    
{users.map((res)=>
<div className="infos" key={res._id}>
<div className="details">
<Avatar src={res.profile} style={{marginLeft:"15px"}}/>
<p className="username" style={{fontWeight:"bold"}}>{res.fullName}</p>
</div>
<Button variant='outlined' sx={{marginLeft:"50px",marginBottom:"10px"}}>+ follow</Button>

</div>
)}
<br />
<p style={{textAlign:"center"}}>view all recommendations &#8594;</p>
<br />
    </div>
    </div>
  )
}

export default Users