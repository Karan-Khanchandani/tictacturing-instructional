import React, {Component} from 'react'
import {Stage} from 'react-konva'
import {Board, Squares} from '../styled/TicTacToe'

class TicTacToe extends Component{

    
  state = {
    rows: 3,
    gameState: new Array(9).fill(false),
    ownMark: 'X',
    otherMark: 'O',
    gameOver: false,
    yourTurn: true,
    winner: false,
    win: false
  }

    componentWillMount() {
        //when my component mounts
        let height = window.innerHeight
        let width = window.innerWidth
        let size = (height < width) ? height*0.8  : width*0.8
        let rows = this.state.rows
        let units = size/rows
        let coordinates = []

        for(let y = 0; y < rows; y++){
            for(let x = 0; x < rows; x++){
                coordinates.push([x*units, y*units])
            }
        }
        this.setState({
            size,
            rows,
            units,
            coordinates
        })
    }

    move = (marker, index) => {
        console.log("Move Made", marker, index)
    }

    makeAiMode = () => {

    }

    turingTest = () => {

    }

    recordGame = () => {

    }

    render(){
        let {
            size,
            units,
            rows,
            coordinates,
            gameState,
            win,
            gameOver,
            yourTurn,
            ownMark
        } = this.state
        return(
            <div>
             <Stage
              width = {size}
              height = {size}
            >
              <Board units = {units}
              rows = {rows}
              size = {size}
              />
             <Squares units = {units}
             coordinates={coordinates}
             gameState={gameState}
             win={win}
             gameOver={gameOver}
             yourTurn={yourTurn}
             ownMark={ownMark}
             move={this.move}/>
            </Stage> 
            </div> 
        )
    }
}

export default TicTacToe