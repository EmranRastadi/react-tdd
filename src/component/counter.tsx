import {useState} from 'react';

interface Props {
    description: string,
    defaultCount: number
}

export default function Counter({
                                    description,
                                    defaultCount,
                                }: Props) {
    const [count, setCount] = useState<number>(defaultCount);
    const [incrementor, setIncrementor] = useState(1);
    return (
        <div>
            <h1>Desc : {description}</h1>
            <h3>My counter :{count}</h3>
            <button aria-label="decrease" onClick={() => setCount(count - incrementor)}>-</button>
            <label>
                incrementor:
                <input aria-label={'input'}
                       onChange={(evt) => setIncrementor(parseInt(evt.target.value) || 1)}
                       value={incrementor}/>
            </label>

            <button aria-label="increase" onClick={() => setCount(count + incrementor)}>+</button>
        </div>
    );
}