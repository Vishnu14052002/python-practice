import React, { useState } from 'react'
import Navbar from './Navbar'
import Mytask from './Mytask'
import Addtask from "./Addtask"
import Finishedtask from './Finishedtask'

function Home() {
    const [formData, setFormData] = useState({}); // Store form data
    const [activeTab, setActiveTab] = useState("myTask")

    const addTask = () => setActiveTab("addTask");
    const myTask = () => setActiveTab("myTask");
    const finishedTask = () => setActiveTab("finishedTask");

    // Render component based on activeTab
    let CurrentComponent;
    if (activeTab === "myTask") CurrentComponent = Mytask;
    else if (activeTab === "addTask") CurrentComponent = Addtask;
    else if (activeTab === "finishedTask") CurrentComponent = Finishedtask;

  return (
    <>
        <Navbar
          addTask={addTask}
          myTask={myTask}
          finishedTask={finishedTask}
          activeTab={activeTab}   // pass activeTab here
        />
        <CurrentComponent />
    </>
  )
}

export default Home
