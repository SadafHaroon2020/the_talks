import React from 'react';
import NewInterview from './NewInterview'
import Directory from './Directory'
import App from '../App.css'

const InterviewSection=()=>{
    return(
        <div className="interview_div">
            <div className="child1"><NewInterview/></div>
            
            <div className="child1"><Directory/></div>
        </div>
    )
}
export default InterviewSection