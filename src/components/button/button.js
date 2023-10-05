import "./button.css"

const showLabel = (label) => {
    alert(`a Label desse botão é ${label}`)
}

function Button ({label}) {
    return  <button className="btn" label={label} onClick= {()=>showLabel(label)}>
                {label}
            </button>
}

export default Button