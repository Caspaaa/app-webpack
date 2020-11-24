import React from "react";

interface ListProps {
  list: string[]
}
 
export default function ShoppingList({ list }: ListProps) {
  return (
      <>
      <ul>
        {list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      </>
  );
}