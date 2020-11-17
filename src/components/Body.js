import React, { useState, useEffect } from 'react'
import './Body.css'
import db from './Firebase';
import firebase from 'firebase'
var todos=[]

function MainBody() {
    const [state, setState] = useState([]);
    const [input,setInput] = useState("");

    // when the app loads we need to listen to db and fetch new todos as they get added/ removed
    useEffect(()=>{
        db.collection('all_todos').orderBy('timestamp','asc').onSnapshot(snapshot =>{
            setState(snapshot.docs.map(doc=>{
                    return doc.data().note;
            }))
        })
    },[])



    // to handle form submission
    function handleSubmit(event) {

        // to prevent default behaviour i.e. page reload on form submission
        event.preventDefault();
        console.log("Submitted!!");  
        
        // to update state
        // setState([...state, input])
        db.collection('all_todos').add({
            note:input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("")
        console.log(state)
    }

    // to handle input box's on change 
    function handleChange(event){
        console.log(event.target.value)
        setInput(event.target.value);
    }

    return (
        <div className="mainBody">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="mainBody__content">
                        <div className="input-group">
                            <form onSubmit={handleSubmit}>
                                <input type="text" className="form-control" aria-label="With textarea" value={input} placeholder="add new note" onChange={handleChange}/>
                                <input type="submit" />
                            </form>
                        </div>
                        <div className="col-12">
                            {
                                state.map((my_todo) => {
                                    return <h6># {my_todo}</h6>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBody