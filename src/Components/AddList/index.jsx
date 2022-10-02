import React, {useState} from "react";
import List from "../List/List";
import './AddList.scss';
import Badge from "../Badge";

const AddList = ({colors}) => {
    const [visiblePopup, setPopup] = useState(false);


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
                    <input className='field' type='text' placeholder='название'/>
                    <div className='add-list__popup-colors'>
                        {colors.map((color) => {
                            console.log(color.id);
                            return <Badge key={color.id} color={color.name}/>
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