import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";

const App = () => {
    const [count, counterChange] = useState<number>(0)

    return (
        <div className="App">
            <Counter count={count} changeCounter={counterChange}/>
        </div>
    );
}

export default App;
