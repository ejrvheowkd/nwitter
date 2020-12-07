import { dbService, storageServie } from "fBase";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Nweet = ({ nweetObj, isOwner, attachmentUrl }) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);
    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure");
        if (ok) {
            await dbService.doc(`nweets/${nweetObj.id}`).delete();
            await storageServie.refFromURL(nweetObj.attachmentUrl).delete();
        }
        else {

        }
    };
    const toggleEditing = () => setEditing((prev) => !prev);
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.doc(`nweets/${nweetObj.id}`).update({
            text: newNweet
        });
        setEditing(false);
    };
    const onChange = (event) => {
        const { target: { value } } = event;
        setNewNweet(value);
    }
    return (
        <div className="nweet">
            {editing ?
                <>
                    <form onSubmit={onSubmit} className="container nweetEdit">
                        <input type="text" placeholder="Edit" value={newNweet} required onChange={onChange} autoFocus className="formInput" />
                        <input type="submit" value="Update Nweet" className="formBtn" />
                    </form>
                    <span onClick={toggleEditing} className="formBtn cancelBtn">
                        Cancel
          </span>
                </>
                :
                <>
                    <h5>{nweetObj.text}</h5>
                    {nweetObj.attachmentUrl && <img src={nweetObj.attachmentUrl} />}
                    {isOwner &&(
                            <div class="nweet__actions">
                                <span onClick={onDeleteClick}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </span>
                                <span onClick={toggleEditing}>
                                    <FontAwesomeIcon icon={faPencilAlt} />
                                </span>
                            </div>
            )}
                </>
                    }
                </div>
)};

export default Nweet;