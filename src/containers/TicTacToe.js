import React, {Component} from 'react'
import {Stage} from 'react-konva'
import {Board, Squares} from '../styled/TicTacToe'

class TicTacToe extends Component{

    constructor(props){
        super(props)
        this.combos= [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
    }
    
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

    move = (index, marker) => {
        this.setState((prevState, props) => {
             let {gameState, yourTurn, gameOver, winner} = prevState

             yourTurn = !yourTurn
             gameState.splice(index, 1, marker)
             let foundWin = this.winChecker(gameState)
             if(foundWin){
                 winner = gameState[foundWin[0]]
             }
             if(foundWin || !gameState.includes(false)){
                 gameOver = true
             }
             debugger
             if(!yourTurn && !gameOver){
                 this.makeAiMove(gameState)
             }

             
             return {
                gameState,
                yourTurn,
                gameOver,
                win : foundWin || false,
                winner
             }
        })
    }

    makeAiMove = (gameState) => {
        let otherMark = this.state.otherMark
        let openSquares = []
        gameState.forEach((square, index) => {
            if(!square){
                openSquares.push(index)
            }
        })

        let aiMove = openSquares[this.random(0, openSquares.length)]
        debugger;
        setTimeout(() => {
            this.move(aiMove, otherMark)
        },1000)
        
    }

    random = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random()*(max -min)) + min
    }

    winChecker = (gameState) => {
        let combos = this.combos
       return combos.find((combo) => {
            let [a,b,c] = combo
            let ret = (gameState[a] === gameState[b] && gameState[a] === gameState[c] && gameState[a])
            return ret
        })
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