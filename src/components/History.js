import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import _ from 'lodash';
import {updateBoard, changeStep, setWinnerCells} from "../actions";
import './styles/History.css';

const History =({boardState,changeStep,setWinnerCells})=>{

    const [steps,setSteps] = useState([]);

    useEffect(()=>{
        setSteps([...steps,boardState]);

    },[boardState])


const onButtonPress =(step,id)=>{
       setSteps(_.take(steps,id));
        setWinnerCells(null);
        changeStep(step);
}

    const renderSteps =()=>{
       return  steps.map((step,id)=> {
            return (
                <div className="item" key={id}>
                    <button className="ui tiny inverted pink button" onClick={()=>onButtonPress(step,id)} >
                        Go To step {id}
                    </button>
                </div>
            );
        }
        );
    };

    return (
        <div id="test" className="ui inverted segment">
            <h2>History</h2>
            <div className="ui celled list">{renderSteps()}</div>
        </div>
    );

};

const mapStateToProps =(state)=>{
    return {boardState:state.board};
};
export default connect(mapStateToProps,{changeStep,setWinnerCells}) (History);

