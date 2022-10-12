import React, {useState} from "react";
import addSvg from '../../assets/img/add.svg';

const AddTaskForm = ({todo, onAddTask}) => {
    const [VisibleForm, setFormVisible ] = useState(false);
    const [inputValue, setInputValue] = useState(false);

    const toggleFormVisible = () => {
        setFormVisible(!VisibleForm);
        setInputValue('')
    };

    const addTask=()=>{
        const obj = {
                "listId": todo.id,
                "text": "react",
                "completed": false
         };
        onAddTask(todo.id, obj);
        toggleFormVisible();
    };
        return (
            <div className='tasks__form'>
                {!VisibleForm  ? (
                <div onClick={toggleFormVisible} className="tasks__form-new">
                    <img src={addSvg} alt="Add icon"/>
                    <span>Новая задача</span>
                </div>
                ):(
                <div className='tasks__form-block'>
                    <imput
                        value={inputValue}
                        className='field'
                           type='text'
                           placeholder='Task text'
                        onChange={e=> setInputValue(e.target.value)}
                    />

                    <button onClick={addTask} className='button'>добавить</button>
                    <button onClick={toggleFormVisible} className='button button--grey'>отмена</button>
                </div>)}
            </div>
        );
    }
    export default AddTaskForm;
