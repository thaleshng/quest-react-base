import "./card.css"

function Card ({colorCard, colorParagraph, textParagraph}) {
    return(
        <div 
        className="card" 
        style={{backgroundColor: colorCard, color: colorParagraph}}>
            <p>{textParagraph}</p>
        </div>
    )
}

Card.defaultProps = {
    colorCard: "cornflowerblue",
    colorParagraph: "chartreuse",
    textParagraph: "Esse é um texto padrão do Card com uma cor padrão" 
}

export default Card