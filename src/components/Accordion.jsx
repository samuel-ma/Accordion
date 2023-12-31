function Accordion({ id, question, answer, current, onOpen }) {

    const isOpen = (id === current);

    const handleToggle = () => {
        onOpen(isOpen ? null : id);
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
                (isOpen) && <p className="answer">{answer}</p>
            }

        </section>
    )
}

export default Accordion