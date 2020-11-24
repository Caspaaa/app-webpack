import React, { useState } from "react";

// let groceryList = ["test", "test"];

export default function AddItem({ addItemToList, groceryList }: any) {
    
    const [userInput, storeUserInput] = useState("");

    return (
        <>
            <input type="text" onChange={ event => storeUserInput(event.target.value)} placeholder="type an item" />
            <button onClick={ (event) => addItemToList([...groceryList, userInput])} >Add grocery</button> 
        </>
    );

}