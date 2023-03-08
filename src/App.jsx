import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { TaskContainer } from './components/containers/TaskContainer'
import { TaskFormContainer } from './components/containers/TaskFormContainer'
import { FilterOptions } from './components/pure/FilterOptions'

function App() {

  return (
    <div className="App">
      <TaskFormContainer />
      <FilterOptions />
      <TaskContainer />
    </div>
  )
}

export default App
