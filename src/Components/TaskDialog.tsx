
import './TaskDialog.css'




function TaskDialog(props: { type: string, onClose: () => void }) {

    if (props.type === "add") {
        return (
            <div id='TaskDialog'  >
                <div id="TaskDialog_Backdrop" onClick={() => { props.onClose() }}>
                </div>
                <div id="TaskDialog_Content" >
                    <div id='TaskDialog_Header'>
                        <h1>Add Task</h1>
                        <button type="button" className="btn-close" aria-label="Close" onClick={props.onClose}></button>
                    </div>
                    <div id='TaskDialog_Input'>

                        <input id="TaskDialog_Name" className="TaskDialog_InputField form-control" type="text" placeholder="Enter Task Name" required></input>
                        <input id="TaskDialog_Description" className="TaskDialog_InputField form-control" type="text" placeholder="Enter Task Description"></input>
                        <input id="TaskDialog_DueDate" className="TaskDialog_InputField form-control" type="text" placeholder="Enter Task Due Date"></input>
                        <div id="TaskDialog_Buttons">
                            <button id="TaskDialog_AddButton" className='btn btn-primary' >Add Task</button>
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