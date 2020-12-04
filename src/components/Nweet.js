import React from "react";

const Nweet = ({nweetObj,isOwner}) =>(
    <div >
         <h5>{nweetObj.text}</h5>
         {isOwner&&<>
         <button>Delete</button>
         <button>Edit</button>
        </>}
    </div>
);

export default Nweet;