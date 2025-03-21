import './AppContainer.css'

import TaskItem from './Components/TaskItem'
import TaskDialog from './Components/TaskDialog'

import { useState } from 'react'





function AppContainer() {
    const [showComponent, setShowComponent] = useState(false);


    function AddTaskButton() {
       
        setShowComponent(true)
    }
    function CloseDialog() {
        setShowComponent(false)
    }



    return (

        <div id="AppContainer" className='container'>
            {showComponent && <TaskDialog type="add" onClose={
                () => {
                    CloseDialog()
                }
            }></TaskDialog>}
            
            <div id='AppContainer_Header'>
                <h1>Todo React</h1>
                <p>This is a Todo App built with React</p>
            </div>
            <div id='AppContainer_Input'>
                <button className='btn btn-primary' onClick={() => {
                    AddTaskButton()
                }}>Add Todo</button>
            </div>

            <div id='AppContainer_Tasks'>
                <ul id='TaskList' className='list-group'>
                    {/* <li className="list-group-item TaskItem">
                        <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
                            <label className="form-check-label" htmlFor="firstCheckbox">First checkbox</label>
                    </li> */}
                    <TaskItem TaskName="Task 1" id="task_1"></TaskItem>


                </ul>
            </div>

        </div>

    )
}




export default AppContainer