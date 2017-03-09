import React, {Component} from 'react';

import Controls from './controls.jsx';
import Cell from './cell.jsx';
import getNextState from './getNextState';
import Board from './board';

const Rows = 30;
const Cols = 30;
const getNext = getNextState(Rows,Cols);
const newBoard = Board(Rows, Cols);

let fn;


export default class Game extends Component{

	constructor(props){
		super(props);
		this.runGame = this.runGame.bind(this);
		this.elapse = this.elapse.bind(this);
		this.reset = this.reset.bind(this);
		this.state = {
			board: newBoard,
			playing: false,
			generations:0 
		}
	}
	handleClick(x,y){
		let {board} = this.state;
		board[x][y] = Number(!board[x][y])
		this.setState({board});
	}
	reset(){
		let board = Board(Rows, Cols);
		this.setState({board, generations:0})
	}
	renderControls(){
  		const {generations, playing} = this.state;
  		return (
    		<Controls count={generations} 
      				running={playing} 
      				onReset={this.reset}
      			   onUpdate={this.runGame}/>
  		)
	}
	renderCells(){
        return this.state.board.map((row,i) => {
           return <div className='board-row' key={i}>{
           row.map((v,j) => {
             return  <Cell key={j} status={v} onClick ={()=> this.handleClick(i,j)}/>
           })}</div>
         })		
	}
	runGame(){
		const playing = !this.state.playing
		this.setState({playing})
		if(playing){
			fn = window.setInterval(this.elapse, 100)
		}else{
			window.clearInterval(fn)
		}
	}
	elapse(){
		let {board,generations} = this.state;
		const next = getNext(board)
		generations++;
		this.setState({generations, board:next})
	}
	render(){
		return <div>
			{this.renderControls()}
			<div id = 'board'>{this.renderCells()}</div>
		</div>
	}

}