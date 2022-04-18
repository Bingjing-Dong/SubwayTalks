import React from 'react'; 

import { useLocation } from 'react-router-dom';

import Confetti from 'react-confetti'
function DisplayInfo(props){

    
    // We can gather data from the link by using react router hook: useLocation  
    // The useNavigate was given a state object (check Body.js):  
    //                  let navigate =  useNavigate();
    //                  function handleSubmit(event){
    //                      event.preventDefault(); 
    //                      event.stopPropagation();
    //                      navigate( "/success", {state:statePost});
    //                  }
    // and the state object past was the following: 
    //                const [statePost, setStatePost] = React.useState( {
    //                                      userName: props.userName,
    //                                      title: "",
    //                                      bodyContext: "",
    //                                      idSelector: "",
    //                                      train: "",
    //                                      station: "",       
    //                            });
        

           

    const location = useLocation();
    const {userName, title, bodyContext, train, station} = location.state;

    return (
        <div>
            <Confetti />
            <h1> You Have successfully make a post </h1>
            <h1> Here is the info you provided: </h1>
            <h2> userName: {userName}</h2>
            <h2> train: <img src= {require( `../images/${train}-train-logo.jpg` )} alt =''/></h2> 
            <h2> Station: {station}</h2>
            <h2> Title of the Post: {title} </h2>
            <h2> Context of the Post: {bodyContext}</h2>  


        </div>
    );
}

export default DisplayInfo;