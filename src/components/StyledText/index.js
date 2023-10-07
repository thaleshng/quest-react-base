import "./index.css"

function StyledText ({colorCard, colorText, textParagraph}) {
    return  <div className="card" 
            style={{backgroundColor: colorCard, color: colorText}}>
                <p>{textParagraph}</p>
            </div>
}

StyledText.defaultProps = {
    colorCard: "cornflowerblue",
    colorText: "chartreuse",
    textParagraph: "Esse é um texto padrão do Card com uma cor padrão" 
}

export default StyledText