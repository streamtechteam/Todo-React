import './AppContainer.css'

import TaskItem from './TaskItem'
import TaskDialog from './TaskDialog'

import { useState } from 'react'




function AppContainer() {

    const [showComponent, setShowComponent] = useState(false);

    alert(localStorage.getItem("Test"))




    function AddTaskButton() {

        setShowComponent(true)
    }
    function CloseDialog() {

        setShowComponent(false)
    }




    return (

        <div id="AppContainer">
            {showComponent && <TaskDialog type='add' onConfirm={(taskName, taskDesc, taskDueDate) => {
                alert(taskName + " " + taskDesc + " " + taskDueDate)

            }} onClose={
                () => {
                    CloseDialog()
                }
            }></TaskDialog>}

            <div id='AppContainer_Header'>
                <h1 style={{ fontWeight: 'bold' }}>Todo List</h1>
                <div id='AppContainer_Input'>
                    <button className='btn btn-primary' id='AppContainer_Input_AddTaskButton' onClick={() => {
                        AddTaskButton()
                    }}>Add Task</button>
                </div>
            </div>


            <div id='AppContainer_Tasks'>
                <div id='AppContainer_TasksHeader'>
                    <input className='form-control AppContainer_TasksHeader_InputField' id='AppContainer_TasksHeader_TaskNameField' type="text" placeholder="Enter Task Name"></input>
                    <button title='ok' className='btn AppContainer_TasksHeader_Button' id='AppContainer_TasksHeader_TaskNameFieldButton' type="button"><i className="bi bi-plus-circle"></i></button>

                    <input className='form-control AppContainer_TasksHeader_InputField' id='AppContainer_TasksHeader_SearchField' type="text" placeholder="Search"></input>
                    <button title='ok' className='btn AppContainer_TasksHeader_Button' id='AppContainer_TasksHeader_SearchFieldButton' type="button"><i className="bi bi-search"></i></button>
                </div>

                <ul id='TaskList' className='list-group'>
                    {/* <li className="list-group-item TaskItem">
                        <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
                            <label className="form-check-label" htmlFor="firstCheckbox">First checkbox</label>
                    </li> */}
                    <TaskItem TaskName="Task 1" TaskPriority='low' id="task_1"></TaskItem>
                    <TaskItem TaskName="Task 2" TaskPriority='high' id="task_2"></TaskItem>
                    <TaskItem TaskName="Task 3" TaskPriority='low' id="task_3"></TaskItem>
                    <TaskItem TaskName="Task 4" TaskPriority='high' id="task_4"></TaskItem>
                    <TaskItem TaskName="Task 5" TaskPriority='medium' id="task_%"></TaskItem>



                </ul>
            </div>

        </div>

    )
}




export default AppContainer