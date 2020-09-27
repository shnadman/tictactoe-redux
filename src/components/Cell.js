import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

 const  Cell =({onPressCell,id,ownVal,winnerCells})=>{


const renderCell=()=>{
    if(ownVal===null){
        return ;
    }
    return ownVal===false ? 'O' : 'X';
};

const winnerCell =()=>{

    if(winnerCells!==null){

        return winnerCells.includes(id) ? 'active green' :'';
    }
};

const color = ()=>{
    if(winnerCells==null) {
        if (ownVal !== null) {
            return ownVal === false ? ' blue' : ' red';
        }
    }
}
    return (
        <div>
            <button  className={`ui  selectable ${color()} inverted button ${winnerCell()}`}  type="button" name="button"
                    onClick={()=>onPressCell(id)}>{renderCell()}</button>
        </div>
    );

}

const mapStateToProps=(state)=>{
     return {winnerCells: state.winnerCells}
}


export default connect(mapStateToProps) (Cell);
