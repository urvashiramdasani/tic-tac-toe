import React, { Component } from "react";

import Square from './Square'

class Board extends Component {
    state = {
        squares: ['X', '', '', '', '', '', '', '', '']
    }

    handleClick = number => () => {
        const newSquares = [...this.state.squares]
        newSquares[number] = 'X'
        this.setState({ squares: newSquares })
    }

    render() {
        const { squares } = this.state
        return(
            <div className="Board">
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