import React, {useState} from "react";
import addSvg from '../../assets/img/add.svg';
import axios from "axios";
const AddTaskForm = ({todo, onAddTask}) => {
    const [VisibleForm, setFormVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState('');

    const toggleFormVisible = () => {
        setFormVisible(!VisibleForm);
        setInputValue('')
    };

    const addTask = () => {
        const obj = {
            "listId": todo.id,
            "text": inputValue,
            "completed": false
        };
        setIsLoading(true);
        axios.post('http://localhost:3001/tasks', obj)
    .then(({data})=>{
    console.log(data)
        onAddTask(todo.id, data);
        toggleFormVisible();
            }).catch(()=>{
                alert('Error when adding task!');
        })
            .finally(()=>{
            setIsLoading(false);
        })
    };


    return (
        <div className='tasks__form'>
            {!VisibleForm ? (
                <div onClick={toggleFormVisible} className="tasks__form-new">
                    <img src={addSvg} alt="Add icon"/>
                    <span>Новая задача</span>
                </div>
            ) : (
                <div className='tasks__form-block'>
                    <input
                        value={inputValue}
                        className='field'
                        type='text'
                        placeholder='Task text'
                        onChange={e => setInputValue(e.target.value)}
                    />

                    <button disabled={isLoading} onClick={addTask} className='button'>
                    {isLoading ? "...Zzz" : "Add" }
                        </button>
                    <button onClick={toggleFormVisible} className='button button--grey'>отмена</button>
                </div>)}
        </div>
    );
}


export default AddTaskForm;
