import { useState } from 'react';

function MyComponent(){
    // call useState at the top level of your component 
    // to declare a state variable, which persists through new renders
    const [age, setAge] = useState(28);
    const [name, setName] = useState("Taylor");
    const [todos, setTodos] = useState(() => createTodos());

    // Usestate returns an array with two elements: 
    // the current state value and a function to update it
}

export default function Counter(){
    const [count, setCount] = useState(0);


    function handleClick(){
        setCount(count + 1);
    }

    return(
        <button onClick={handleClick}>You pressed me {count} times</button>
    );
}
