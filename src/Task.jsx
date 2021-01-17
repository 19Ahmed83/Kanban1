import React from 'react';
import statuses from "statuses";

export default function Task(props){


    return (
        <div>
            {props.task.title}
            <button disabled={props.index===statuses.length-1} onClick={()=>props.minus(props.task.id)}>-</button>
            <button disabled={props.index===0} onClick={()=>props.plus(props.task.id)}>+</button>

        </div>
    );
}