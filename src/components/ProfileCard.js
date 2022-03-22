import React from 'react'
//import {useState} from "react"
function ProfileCard({writer}) {
  // const [showBio, setShowBio] = useState(false);
    //const handleClick = (bioData) =>{
     //   setShowBio(!showBio);
   // }
    return (
        <div className='card'>
            <img src= {`images/${writer.avatar}.png`}
            height="300px" width="300px" alt={writer.img}/>

            <div className='textGroup'>
                <h3>{writer.name}</h3>
                <p>{writer.email}</p>
                <p>{writer.phone}</p>

                <button className='actionBtn'>Read Bio</button>
            </div>
        </div>
    )
    
}
export default ProfileCard;