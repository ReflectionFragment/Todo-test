import React, {useEffect, useState} from "react";
import axios from "axios";

import List from "../List";
import Badge from "../Badge";

import closeSvg from '../../assets/img/close.svg';

import './AddList.scss';


const AddList = ({colors, onAdd}) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColorId, selectColor] = useState(3);
    const [inputValue, setInputValue] = useState('');
    const [isloading, setIsLoading] = useState(false);

    useEffect(() => {
        if (Array.isArray(colors) && colors.length > 0) {
            selectColor(colors[0].id);
        }
    }, [colors]);

    const onClose = () => {
        setVisiblePopup(false);
        setInputValue('');
        selectColor(colors[0].id);
    }

        const addList = () => {
            if (!inputValue) {
                alert('Введите название списка');
                return;
            }
            setIsLoading(true);
            axios
                .post('http://localhost:3001/lists', {
                    name: inputValue,
                    colorId: selectedColorId
                })
                .then(({ data }) => {
                    const color = colors.find(c => c.id === selectedColorId);
                    const listObj = { ...data, color, tasks: [] };
                    onAdd(listObj);
                    onClose();
                })
                .catch(() => {
                    alert('Ошибка при добавлении списка!');
                })
                .finally(() => {
                    setIsLoading(false);
                });
        };
return (
    <div className='add-list'>
        <List
            onClick={() => setVisiblePopup(true)}
            items={[{
                className: 'list__addButton',

                icon: (<svg width="13" height="13" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>),
                name: "Add task"
            }]}
        />
        {visiblePopup && (
            <div className='add-list__popup'>
                <img
                    onClick={onClose}
                    src={closeSvg}
                    alt='x'
                    className='add-list__popup-close-btn'
                />

                <input
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    className='field'
                    type='text'
                    placeholder='название'
                />

                <div className='add-list__popup-colors'>
                    {colors.map((color) => {
                        return <Badge onClick={() => selectColor(color.id)}
                                      key={color.id}
                                      color={color.name}
                                      className={selectedColorId === color.id && 'active'}
                        />
                    })
                    }
                </div>
                <button onClick={addList} className='button'>
                    {isloading ? 'Добавление' : 'Добавить'}
                </button>

            </div>
        )}
    </div>
);
}
;
export default AddList;
