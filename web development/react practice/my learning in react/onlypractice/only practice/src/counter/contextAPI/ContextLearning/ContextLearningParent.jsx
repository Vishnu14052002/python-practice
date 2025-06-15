import React,{createContext, useState} from 'react'
import ContextLearningOne from './ContextLearningOne';
import ContextLearningTwo from './ContextLearningTwo';

export const myContext = createContext();


const ContextLearningParent = () => {
    const [checkBoxValue, setCheckBoxValue] = useState("");

    const trackChange = (e) => {
        setCheckBoxValue(e.target.value);
    }
    console.log(checkBoxValue)
    return (
    <div>
        <h1>parent component</h1>
        <myContext.Provider value = {{checkBoxValue}} >
            <ContextLearningOne func = {trackChange}/>
            <ContextLearningTwo />
        </myContext.Provider>
        
    </div>
    )
}

export default ContextLearningParent
