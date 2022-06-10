import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import  Calculator from '../Calculator'

const mockCellElements = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];


describe('CellElement Component Test suit', () => { 

    it('should render The input Element',()=>{
        render(<Calculator cellElements={mockCellElements} />)
        const inputElement = screen.getByTestId('calculator-screen');
        expect(inputElement).toBeInTheDocument
    });

    it('should render All the CellElements',()=>{
        render(<Calculator cellElements={mockCellElements} />)
        const cellItems = screen.getAllByTestId("cell-items")
        expect(cellItems.length).toBe(mockCellElements.length)
    });

})
