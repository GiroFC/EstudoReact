import {Container, Content, Row, Column} from './styles.js';
import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handdleOnClear = () => {
    setCurrentNumber('0')
    setOperation('')
  }

  const handdleClearFirstOp = () => {
    setCurrentNumber('0')
    setOperation('')
    setFirstNumber('0')
  }

  const handdleClearLast = () => {
    if(currentNumber === '0'){
      setCurrentNumber('0')
    }else if(currentNumber.length == 1){
      setCurrentNumber('0')
    }else{
      setCurrentNumber(prev => `${prev.slice(1)}`) 
    }

  }

  const handdleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handdleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      handdleOnClear();
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber('' + sum)
      setOperation('')
    }
  }

  const handdleSubNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      handdleOnClear();
      setOperation('-')
      setFirstNumber(currentNumber);
    }else{
      const sub = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber('' + sub)
      setOperation('')
    }
  }

  const handdleMultNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      handdleOnClear();
      setOperation('x')
    }else{
      const sum = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber('' + sum)
      setOperation('')
    }
  }

  const handdleDivNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      handdleOnClear();
      setOperation('÷')
    }else{
      const sum = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber('' + sum)
      setOperation('')
    }
  }

  const handdlePercNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      handdleOnClear();
      setOperation('%')
    }else{
      const sum = (Number(firstNumber)/100) * Number(currentNumber)
      setCurrentNumber('' + sum)
      setOperation('')
    }
  }

  const handdleCalculate = () => {
    if(firstNumber != '0' && operation){
      switch(operation){
        case '+':
          handdleSumNumbers()
          break;
        case '-':
          handdleSubNumbers()
          break;
        case 'x':
          handdleMultNumbers()
          break;
        case '÷':
          handdleDivNumbers()
          break;
        case '%':
          handdlePercNumbers()
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
          <Row>
            <Button label="C" onClick={() => {handdleClearFirstOp()}}/>
            <Button label="%" onClick={() => {handdlePercNumbers()}}/>
            <Button label="<" onClick={() => {handdleClearLast()}}/>
            <Button label="÷" onClick={() => {handdleDivNumbers()}}/>
          </Row>
          <Row>
            <Button label="7" onClick={() => {handdleAddNumber('7')}}/>
            <Button label="8" onClick={() => {handdleAddNumber('8')}}/>
            <Button label="9" onClick={() => {handdleAddNumber('9')}}/>
            <Button label="X" onClick={() => {handdleMultNumbers()}}/>
          </Row>
          <Row>
            <Button label="4" onClick={() => {handdleAddNumber('4')}}/>
            <Button label="5" onClick={() => {handdleAddNumber('5')}}/>
            <Button label="6" onClick={() => {handdleAddNumber('6')}}/>
            <Button label="-" onClick={() => {handdleSubNumbers()}}/>
          </Row>
          <Row>
            <Button label="1" onClick={() => {handdleAddNumber('1')}}/>
            <Button label="2" onClick={() => {handdleAddNumber('2')}}/>
            <Button label="3" onClick={() => {handdleAddNumber('3')}}/>
            <Button label="+" onClick={() => {handdleSumNumbers()}}/>
          </Row>
          <Row>
            <Button label="-(" onClick={() => {handdleAddNumber('-')}}/>
            <Button label="0" onClick={() => {handdleAddNumber('0')}}/>
            <Button label="." onClick={() => {handdleAddNumber('.')}}/>
            <Button label="=" onClick={() => {handdleCalculate()}}/>
          </Row>
      </Content>
    </Container>
  );
}

export default App;
