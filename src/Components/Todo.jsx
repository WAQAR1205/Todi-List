import React from "react";
import { useState } from "react";
import edit from './images/edit.png';
import del from './images/delete.png';
import '../App.css';
import add from './images/add.png';
import { DB } from '../Data';
import { collection, addDoc } from "firebase/firestore";
function Todo() {
    console.log(DB, "db")
    const [input, setinput] = useState("")
    const [items, setitems] = useState([])
    // const Add = async () => {
    //     const docRef = await addDoc(collection(DB, "todo-collections"), {
    //         input : input,
    //       });
    //       console.log("Document written with ID: ", docRef);
    //     if (input === "") {
    //         alert("please enter something")
    //     }
    //     else (
    //         setitems([...items, input])
    //     )
    //     console.log([...items, input])
    //     setinput("")
    // }
const Add = async () => {
    const items = await addDoc(collection(DB, "todo-collections"), {
        input : input,
    })
    console.log("write" , items)
}

    const delItem = (index) => {
        items.splice(index, 1)
        setitems([...items])
        console.log(index)
    }

    const editItem = (index) => {
        items[index] = prompt('likho', items[index])
        setitems([...items])
    }
    return (

        <div className="main">
            <div className="TodoApp">
                <h3 className="Todo">TODO APP</h3>
                <input type="text" className="text" placeholder="type here...."
                    value={input}
                    onChange={(e) => setinput(e.target.value)}
                />
                <img src={add} alt="add" onClick={Add} className="add" />
                {/* <button className="Add-button" onClick={Add}>+</button>  */}
                {/* <button className="Del-button" onClick={del}>DELETE ALL</button> */}

                {/* for add todo */}
                <ul>
                    {
                        items.map((list, index) => {
                            return (
                                <li key={index}>
                                    <label className="todo-list">{list}</label>
                                    <img src={edit} alt="edit" className="edit" onClick={delItem} />
                                    <img src={del} alt="del" className="del" onClick={editItem} />
                                </li>

                            )
                        })
                    }
                </ul>
            </div>

        </div>

    )
}

export default Todo;