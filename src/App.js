
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  const [firstOperandNumber, setFirstOperandNumber] = useState('');
  const [secondOperandNumber, setSecondOperandNumber] = useState('');
  const [operation, setOperation] = useState('');
  const [accumulator, setAccumulator] = useState('');
  const [currentOperation, setCurentOperation] = useState('');
  
  const [display, setDisplay] = useState('0');
  
  const prepareDisplay = (num) => {
    setDisplay(accumulator.toString().concat(operation).concat(num))
  }

  const handleOnClear = () => {
    setSecondOperandNumber('');
    setFirstOperandNumber('');
    setOperation('');
    setAccumulator(0)
    setDisplay('0')
  };

  const handleAddNumber = (num) => {
      
      prepareDisplay(secondOperandNumber.toString().concat(num))
      setSecondOperandNumber(prev => `${prev === '' ? '' : prev}${num}`)
  }

  function setStatus(result){
    setFirstOperandNumber(String(result));
    setAccumulator(Number(result));
    setSecondOperandNumber('');
    setCurentOperation('');
  }


  const doCalculation = (operation) => {
    let result='';
    
    if(currentOperation ==='' && secondOperandNumber===''){
      setOperation(operation);
      setCurentOperation(operation);
    }else{
      setOperation(currentOperation);
    }

    if(firstOperandNumber === ''){
      setFirstOperandNumber(String(secondOperandNumber));
      setSecondOperandNumber('')
      setDisplay('0')
      setOperation(operation)
    }else {
      if(secondOperandNumber!==''){
        switch(operation){
  
          case '+':
            result = Number(firstOperandNumber) + Number(secondOperandNumber);
            setStatus(String(result))
            break;
  
            case '-':
              result = Number(firstOperandNumber) - Number(secondOperandNumber);
              setStatus(String(result))
              break;
  
            case 'x':
              result = Number(firstOperandNumber) * Number(secondOperandNumber);
              setStatus(String(result))
              break;
  
            case '/':
              if(secondOperandNumber !=='0'){
                result = Number(firstOperandNumber) / Number(secondOperandNumber);
                setStatus(String(result))
              }else{
                setSecondOperandNumber('error')
              }
            break;
  
          default: 
            break;
        }
        
        setDisplay(String(result))
      }
  
      
    }


  }

  const handleEquals = () => {

    if(firstOperandNumber !== '' && operation !== '' && secondOperandNumber !== ''){
      doCalculation(operation)
    }

  }

  return (
    <Container>
      <Content>
        <Input value={display}/>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="+" onClick={() => doCalculation('+')}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={() => doCalculation('-')}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="x" onClick={() => doCalculation('x')}/>
        </Row>
        <Row>
          <Button label="c" onClick={handleOnClear}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="/" onClick={() => doCalculation('/')}/>
          <Button label="=" variant='equals' onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
