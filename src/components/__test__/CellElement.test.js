import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import  CellElement from '../CellElement'

let mockFunction = jest.fn;

describe('CellElement Component Test suit', () => { 

   it('should render the correct cellType',()=>{
       render(<CellElement cellType='+' isCellElementZero={false} handleCellClick={mockFunction}/>);
       const cellElement = screen.getByRole('button');
       expect(cellElement).toHaveTextContent('+')
   })

   it('should fireUp passedProp function on Click',()=>{
    render(<CellElement cellType='+' isCellElementZero={false} handleCellClick={mockFunction}/>);
    const cellElement = screen.getByRole('button');
    fireEvent.click(cellElement);
    expect(mockFunction).toBeCalled;
   })

   describe('should change the style of Element based on isCellElementZero',()=>{

       it('should have cellZero Class ',()=>{
           render(<CellElement cellType='+' isCellElementZero={true} handleCellClick={mockFunction}/>);
           const cellElement = screen.getByRole('button');
           expect(cellElement).toHaveClass('cellZero');
        })
        
        it('should have cellZero Class ',()=>{
            render(<CellElement cellType='+' isCellElementZero={false} handleCellClick={mockFunction}/>);
            const cellElement = screen.getByRole('button');
            expect(cellElement).not.toHaveClass('cellZero');
        })
    })
   
})