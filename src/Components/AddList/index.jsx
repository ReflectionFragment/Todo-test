import React, {useState} from "react";
import List from "../List/List";
import './AddList.scss';
import Badge from "../Badge";

import closeSvg from '../../assets/img/close.svg';

const AddList = ({colors}) => {
    const [visiblePopup, setPopup] = useState(false);
    const [selectedColor, selectColor] = useState(colors[0].id);

    return (
        <div className='add-list'>
            <List onClick={() => setPopup(true)}
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
                        src={closeSvg}
                        alt='x'
                        className='add-list__popup-close-btn'/>
                    <input className='field' type='text' placeholder='название'/>
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
                    <button className='button'>Add</button>
                </div>
            )}
        </div>
    );
};
export default AddList;