import StyledText from './components/StyledText/index';
import AlertButton from './components/AlertButton/index';
import './index.css';

function App() {
  return (
    <div className='container'>
      <StyledText />
      <StyledText />
      <StyledText 
      colorCard="lightgray" 
      colorText="black"
      textParagraph="Esse é um texto personalizado do Card com uma cor personalizada"/>

      <div className='btn-container'>
        <AlertButton label="Baixar CV"/>
        <AlertButton label="Saiba Mais"/>
        <AlertButton label="Submit"/>
      </div>
    </div>
  );
}

export default App;