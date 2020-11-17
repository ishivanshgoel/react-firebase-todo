import React, { useState, useEffect } from 'react'
import './Body.css'
import db from './Firebase';
import firebase from 'firebase'
function MainBody() {

    const [state, setState] = useState([]);
    const [input, setInput] = useState("");

    // when the app loads we need to listen to db and fetch new todos as they get added/ removed
    useEffect(() => {
        db.collection('all_todos').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
            setState(snapshot.docs.map(doc => {
                console.log(doc.id)
                return doc;
            }))
        })
    }, [])

    // to handle form submission
    function handleSubmit(event) {
         // to prevent default behaviour i.e. page reload on form submission
        event.preventDefault();
        if (input.length > 0) {
            console.log("Submitted!!");

            // to update state
            // setState([...state, input])
            db.collection('all_todos').add({
                note: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
            setInput("")
            console.log(state)
        }
    }
    
    // to handle input box's on change 
    function handleChange(event) {
        console.log(event.target.value)
        setInput(event.target.value);
    }

    //to remove todo
    function handleRemove(event) {
        // console.log(event.target.id);
        db.collection('all_todos').doc(event.target.id).delete();
    }

    return (
        <div className="mainBody">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="mainBody__content container">
                        <div className="row">
                            <div className="col-12">
                                {
                                    state.map((my_todo) => {
                                        return (
                                            <div className="note">
                                                <span>✍️ <b>{my_todo.data().note}</b></span>
                                                <button id={my_todo.id} onClick={handleRemove} className="float-right btn btn-danger">Remove</button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex justify-content-center note">
                                <form onSubmit={handleSubmit} className="form-inline">
                                    <input type="text" className="form-control" aria-label="With textarea" value={input} placeholder="add new note" onChange={handleChange} />
                                    <button type="submit" className="btn btn-success">Add</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBody