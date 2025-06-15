import React, {useContext} from 'react'
import { myContext } from './ContextLearningParent'

const ContextLearningTwo = () => {
    const {checkBoxValue} = useContext(myContext);
    return (
    <div>
        <h1>context learning two</h1>
        <p>{checkBoxValue}</p>
    </div>
    )
}

export default ContextLearningTwo
