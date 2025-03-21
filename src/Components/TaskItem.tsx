import './TaskItem.css'


function TaskItem(props: {id: string, TaskName: string}){
    return(
        
            <li className="TaskItem">
                <input className="form-check-input TaskItem_CheckBox" id={props.id} value="" type="checkbox"></input>
                <label className="form-check-label TaskItem_Label" htmlFor={props.id}>{props.TaskName}</label>
            </li>
        
        
    )
}

export default TaskItem

