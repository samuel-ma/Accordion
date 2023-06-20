import { useState } from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import questions from "./data/data.json";

function App() {

    const [current, setCurrent] = useState(null);

    return (
        <>
            <div className='body'>
                <h1 className='faq'>FAQs</h1>
                {questions.map(item => <Accordion current={current} onOpen={setCurrent} key={item.id} id={item.id} question={item.question} answer={item.answer} />)}
            </div>
        </>
    )
}

export default App
