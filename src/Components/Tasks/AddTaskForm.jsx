import React, {useState} from "react";
import addSvg from '../../assets/img/add.svg';

const AddTaskForm = () => {
    // const [VisibleForm, setForVisible ] = useState(false);
    const toggleFormVisible = () => {
        return (
            <div className='tasks__form'>
                <div className="tasks__form-new">
                    <img src={addSvg} alt="Add icon"/>
                    <span>Новая задача</span>
                </div>
                <div className='tasks__from-block'>
                    <button className='button'>добавить</button>
                    <button className='button button--grey'>отмена</button>
                </div>
            </div>
        );
    }
    export default AddTaskForm;
