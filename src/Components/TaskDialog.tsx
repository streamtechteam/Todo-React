
import { useState ,useRef} from 'react'
import './TaskDialog.css'




function TaskDialog(props: { type: string, onClose: () => void, onConfirm: (taskName:string,taskDescription:string,taskDueDate:Date) => void }) {
    const [isClosing, setIsClosing] = useState(false);
    const nameRef = useRef(null);
    const descriptionRef = useRef(null);
    const dueDateRef = useRef(null);

    function handleClose() {
        setIsClosing(true);
        setTimeout(props.onClose, 300); // مدت زمان برابر با transition در CSS
    }
    if (props.type === "add") {
        return (
            <div id='TaskDialog' className={isClosing ? "fade-out" : "fade-in"}>
                <div id="TaskDialog_Backdrop" onClick={() => {
                    handleClose()
                    // props.onClose() 
                }}>
                </div>
                <div id="TaskDialog_Content" >
                    <div id='TaskDialog_Header'>
                        <h1>Add Task</h1>
                        <button type="button" className="btn-close" aria-label="Close" onClick={() => {
                            handleClose()
                            // props.onClose()

                        }}></button>
                    </div>
                    <div id='TaskDialog_Input'>

                        <input ref={nameRef}   id="TaskDialog_Name" className="TaskDialog_InputField form-control" type="text" placeholder="Enter Task Name" required></input>
                        <input ref={descriptionRef}  id="TaskDialog_Description" className="TaskDialog_InputField form-control" type="text" placeholder="Enter Task Description"></input>
                        <input ref={dueDateRef} id="TaskDialog_DueDate" className="TaskDialog_InputField form-control" type="date" placeholder="Enter Task Due Date"></input>
                        <div id="TaskDialog_Buttons">
                            <button id="TaskDialog_AddTaskButton" className='btn btn-primary' onClick={() => {
                                

                                    const taskName= nameRef.current.value
                                    const taskDescription= descriptionRef.current.value
                                    const taskDueDate= dueDateRef.current.value
                                
                                
                                props.onConfirm(taskName,taskDescription,taskDueDate)
                            }
                            }>Add Task</button>
                        </div>

                    </div>

                </div>
            </div>

        )
    }
    else if (props.type === "edit") {
        return (
            <div id='TaskDialog' >
                <div id="TaskDialog_Backdrop" onClick={() => { props.onClose() }}>
                </div>
                <div id="TaskDialog_Content" >

                </div>
            </div>
        )
    }
    else if (props.type === "hide") {
        return (
            <div id='TaskDialog'>

            </div>
        )
    }


}

export default TaskDialog