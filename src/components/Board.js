import React from "react";
import Cell from "./Cell";
import {connect} from "react-redux";
import {changeTurn,updateBoard} from "../actions";





class Board extends React.Component{

    componentDidMount() {
        this.props.changeTurn();
    }


    onPressCell=(id)=>{
         if(this.props.board[id]===null) {
             this.props.updateBoard(id, this.props.turn);
             this.props.changeTurn();

         }
    }

    renderCell= id => <td><Cell onPressCell={this.onPressCell}  id={id} ownVal={this.props.board[id]}/></td>

    renderRow= row => <tr>{[0,1,2].map(i=>this.renderCell(i+row*3))}</tr>


    render() {
        return (
            <div className="ui inverted celled table very padded "   >
                <table>
                    <tbody>
                        {this.renderRow(0)}
                        {this.renderRow(1)}
                        {this.renderRow(2)}
                    </tbody>
                </table>
            </div>);
    }
}




const mapStateToProps=(state)=>{
   return  {turn:state.turn,
            board:state.board};
}

export default connect(mapStateToProps,{changeTurn,updateBoard}) (Board);