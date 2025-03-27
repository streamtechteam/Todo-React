import './TaskItem.css'


function TaskItem(props: { id: string, TaskName: string, TaskPriority: string }) {
    return (

        <li className="TaskItem">

            <input className="form-check-input TaskItem_CheckBox" id={props.id} value="" type="checkbox"></input>
            <label className="form-check-label TaskItem_Label" htmlFor={props.id}>{props.TaskName}</label>
            <i className='TaskItem_DueDate'>1404/01/05</i>
            <div className={'TaskItem_Priority' + " " + props.TaskPriority}>
                <i className='bi bi-circle-fill'></i>
            </div>
            <div className="bi bi-trash TaskItem_DeleteBtn"></div>
            <div className="bi bi-pencil-square TaskItem_EditBtn"></div>

        </li>


    )
}

export default TaskItem

