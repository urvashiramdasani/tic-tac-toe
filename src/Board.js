import React, { Component } from "react";

import Square from './Square'

const calculateWinner = squares => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for(let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]

        if(squares[a] && squares[a] === squares[b] && squares[c] === squares[b])
            return squares[a]

    }

    return ''
}

class Board extends Component {
    state = {
        squares: ['', '', '', '', '', '', '', '', ''],
        xIsNext: true
    }

    handleClick = number => () => {
        if(calculateWinner(this.state.squares) || this.state.squares[number])
            return

        const newSquares = [...this.state.squares]
        newSquares[number] = this.state.xIsNext ? 'X' : 'O'
        this.setState({ squares: newSquares, xIsNext: !this.state.xIsNext })
    }

    render() {
        const { squares, xIsNext } = this.state
        const winner = calculateWinner(squares)
        let status

        if(winner) 
            status = `Winner: ${winner}`
        else
            status = `Next step: ${xIsNext ? 'X' : 'O'}`
        return(
            <div className="Board">
                <h1>{ status }</h1>
                <div className="Row">
                    <Square value={ squares[0] } onClick={ this.handleClick(0) } />
                    <Square value={ squares[1] } onClick={ this.handleClick(1) } />
                    <Square value={ squares[2] } onClick={ this.handleClick(2) } />
                </div>
                <div className="Row">
                    <Square value={ squares[3] } onClick={ this.handleClick(3) } />
                    <Square value={ squares[4] } onClick={ this.handleClick(4) } />
                    <Square value={ squares[5] } onClick={ this.handleClick(5) } />
                </div>
                <div className="Row">
                    <Square value={ squares[6] } onClick={ this.handleClick(6) } />
                    <Square value={ squares[7] } onClick={ this.handleClick(7) } />
                    <Square value={ squares[8] } onClick={ this.handleClick(8) } />
                </div>
            </div>
        )
    }
}

export default Board