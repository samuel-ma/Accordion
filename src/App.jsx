import './App.css';
import Accordion from "./components/Accordion";
import questions from "./data/data.json";

function App() {

    return (
        <>
            <div className='body'>
                <h1 className='faq'>FAQs</h1>
                {questions.map(item => <Accordion key={item.id} id={item.id} question={item.question} answer={item.answer} />)}
            </div>
        </>
    )
}

export default App
