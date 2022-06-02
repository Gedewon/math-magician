
import { Component } from 'react';
import Calculator from './components/Calculator';

export default class App extends Component{
    constructor(props){
        super(props)
        this.cellElements = ['AC','+/-','%','÷','7','8','9','x','4','5','6','-','1','2','3','+','0','.','='];  
    }
    render(){
        return (
         <Calculator cellElements={this.cellElements}/>
        );
    }
}
