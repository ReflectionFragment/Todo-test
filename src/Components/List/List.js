import React from "react";
import classnames from "classnames";
import Badge from "../Badge";

import removeSvg from '../../assets/img/remove.svg';


const List = ({onRemove, items, isRemovable, onClick}) => {
    const removeList = (item) => {
        if (window.confirm('da?')){
            onRemove(item);
        }};
    return (
        <ul
            onClick={onClick}
            className="list">
            {items.map((item, index) => (
                <li
                    key={index}
                    className={classnames(item.className, {'active': item.active})}>
                    <i>
                        {item.icon ? (item.icon) : (<Badge color={item.color}/>)}
                    </i>
                    <span>{item.name} </span>
                    {isRemovable && <img className='list__remove-icon'
                                         src={removeSvg}
                                         alt='remove'
                                         onClick={()=>removeList(item)}
                    />}

                </li>
            ))}
        </ul>
    );
}

export default List;