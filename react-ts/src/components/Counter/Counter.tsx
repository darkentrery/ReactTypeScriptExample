import "./counter.scss"
import {FC} from "react";


type CounterChangeArgument = (value: number) => number;

interface CounterComponent {
    count: number;
    changeCounter: (callback: CounterChangeArgument) => void;
}

const Counter: FC<CounterComponent> = ({count, changeCounter}) => {
    return (
        <div className={"counter"}>
            <button onClick={() => changeCounter((value: number) => value + 1)}></button>
            <span>{count}</span>
        </div>
    );
};

export default Counter;
