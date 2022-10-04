import React, {useState} from "react";
import List from "../List/List";
import './AddList.scss';
import Badge from "../Badge";

import closeSvg from '../../assets/img/close.svg';
import DB from "../../assets/db.json";

const AddList = ({colors, onAdd}) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, selectColor] = useState(colors[0].id);
    const [inputValue, setInputValue] = useState('');

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
        const color = colors.filter(c => c.id === selectedColor)[0].name;
        onAdd({
            id: Math.random(),
            name: inputValue,
            color
        });
        onClose();
    };

    return (
        <div className='add-list'>
            <List onClick={() => setVisiblePopup(true)}
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
                            // console.log(color.id);
                            return <Badge onClick={() => selectColor(color.id)}
                                          key={color.id}
                                          color={color.name}
                                          className={selectedColor === color.id && 'active'}

                            />
                        })
                        }
                    </div>
                    <button onClick={addList} className='button'>Add</button>
                </div>
            )}
        </div>
    );
};
export default AddList;