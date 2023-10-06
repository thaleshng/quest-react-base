import "./index.css"

function AlertButton ({label}) {
    return  <button className="btn" label={label} onClick= {()=>alert(`a Label desse botão é ${label}`)}>
                {label}
            </button>
}

export default AlertButton