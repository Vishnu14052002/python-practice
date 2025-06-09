import React, { createContext } from 'react'
import ChildOneContext from './ChildOneContext';

export const myContext = createContext();


const ParentContext = () => {
    
    const value = "Value from parent context"
    return (
    <div>
        <myContext.Provider value={{value}}>
            <ChildOneContext />
        </myContext.Provider>
    </div>
    )
}

export default ParentContext;
