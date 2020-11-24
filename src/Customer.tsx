import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import AddItem from "./AddItem";

interface NameProps {
    name: string  
}

// let list = ["banana", "apple", "potato"];

export function Customer({ name }: NameProps) {
    
    const [groceryList, storeGrocery] = useState(["banana", "apple", "potato"]);
    console.log(groceryList);
    return (
        <>
            <p>{name}'s shopping list: </p>
            <ShoppingList list={groceryList} />
            <AddItem addItemToList={storeGrocery} groceryList={groceryList} />
        </>
    );
}