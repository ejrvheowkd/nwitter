import { dbService } from "fBase";
import React, { useState } from "react";

const Nweet = ({nweetObj,isOwner,attachmentUrl}) =>{
    const [editing,setEditing] = useState(false);
    const [newNweet,setNewNweet] = useState(nweetObj.text);
    const onDeleteClick = async () =>{
        const ok = window.confirm("Are you sure");
        if(ok){
           await dbService.doc(`nweets/${nweetObj.id}`).delete();
        }
        else
        {

        }
    };
    const toggleEditing = () => setEditing((prev)=>!prev);
    const onSubmit=async (event)=>{
        event.preventDefault();
        await dbService.doc(`nweets/${nweetObj.id}`).update({
            text:newNweet
        });
        setEditing(false);
    };
    const onChange=(event)=>{
        const {target:{value}}=event;
        setNewNweet(value);
    }
    return (
    <div >
        {editing?<>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Edit" value={newNweet} required onChange={onChange}/>
            <input type="submit" value="Update"/>
        </form> 
        <button onClick={toggleEditing}>Cancel</button>
        </>
        : 
        <>
         <h5>{nweetObj.text}</h5>
         {nweetObj.attachmentUrl&&<img src={nweetObj.attachmentUrl} width="50px" height="50px"/>}
         {isOwner&&<>
         <button onClick = {onDeleteClick}>Delete</button>
         <button onClick={toggleEditing}>Edit</button></>}
        </>
        }
    </div>
)};

export default Nweet;