import React, { useState } from 'react' ;

function Counter(){
    const [counter, setCounter ] = useState(0);
    const [content, setContent] = useState('');
    function handleIncrement(){
        if(counter + 1 <= 20){
            console.log(`counter : {counter}`);
            setCounter(counter+1);
        }
        else{
            setContent('Counter is not Increment more than 20.');
        }
    }

    const handleDecrement = () => {
        if(counter - 1 >= 0){
            console.log(`counter : {counter}`);
            setCounter(counter - 1);
        }
        else{
            setContent('Counter is not Decremet more than 0.');
        }
    }

    return (
        <>
            <h1>Counter Project</h1>
            <h3>Counter : {counter} </h3>
            <button 
                onClick={handleIncrement}
            >Add Counter</button>
            <br />
            <button 
                onClick={handleDecrement}
            >Remove Counter</button>
            <h3>{content}</h3>
        </>
    )
}

export default Counter;
