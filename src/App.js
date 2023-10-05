import Card from './components/card/card';
import Button from './components/button/button';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Card />
      <Card />
      <Card 
      colorCard="lightgray" 
      colorParagraph="black"
      textParagraph="Esse é um texto personalizado do Card com uma cor personalizada"
      />

      <div className='btn-container'>
        <Button label="Baixar CV"/>
        <Button label="Saiba Mais"/>
        <Button label="Submit"/>
      </div>
    </div>
  );
}

export default App;
