import { useState } from "react"

function Accordion({ id, question, answer }) {

    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(open => !open);
    }

    return (
        <section className="accordion" onClick={handleToggle}>
            <div className="question">
                <p className="id">{"0" + id}</p>
                <h1 className="item">{question}</h1>
                <p className="plus">{
                    (open) ? "-" : "+"
                }</p>
            </div>
            {
                (open) && <p className="answer">{answer}</p>
            }

        </section>
    )
}

export default Accordion