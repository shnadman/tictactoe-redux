import React from "react";
import Board from "./Board";
import {connect} from "react-redux";
import History from "./History";
import {setWinnerCells} from "../actions";
import './styles/App.css';

class App extends React.Component{





renderHistory=()=>{
        return (
            <li>
                <button>
                Step 1
                 </button>);
            </li>);
};

    render() {
        const display = this.props.turn ? 'X' : 'O';
        return(
                <div>
                        <div id="title" className="ui inverted vertical masthead center aligned segment">
                            <h1   className="ui header">Redu-X Igul </h1>
                        </div>
                            <div className="wrapper">
                                    <div className="ui very padded grid " style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <ul>
                                            <h2>Turn :{this.props.turn !==null ? display: ''}</h2>
                                            <Board />
                                            <h3>{this.calculateWinner(this.props.board)}</h3>
                                        </ul>
                                            <History/>
                                    </div>
                            </div>

                </div>
        );
    };


    calculateWinner =(board)=> {
        if (this.props.winnerCells === null) {
            const lines = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
            ];
            for (let i = 0; i < lines.length; i++) {
                const [a, b, c] = lines[i];
                if ((board[a] || board[a] === false) && board[a] === board[b] && board[a] === board[c]) {
                    this.props.setWinnerCells(a, b, c)
                    return board[a] ? 'Winner is X' : 'Winner is O';
                }
            }
            return null;
        }
    }
}






const mapStateToProps=(state)=>{
    return  {turn:state.turn,
             board:state.board,
             winnerCells:state.winnerCells};
}

export default connect(mapStateToProps,{setWinnerCells}) (App);



