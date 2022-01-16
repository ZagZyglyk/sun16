import React from 'react';

const Filter = (props) => {

    const {
        assigne,
        title
    } = props.filter

    return (
        <>
            <th>
                <input value={assigne} onChange={event => props.filterFunction(event.target.value, 'assigne')}></input>
            </th>            
            <th>
                <input value={title} onChange={event => props.filterFunction(event.target.value, 'title')}></input>
            </th>
            <th>
                <select onChange={event => props.filterFunction(event.target.value, 'status')}>
                {props.statusFilter.map(element => 
                    <option defaultValue={''} key={element} value={element}>{element}</option>
                )}  
                </select>
            </th>                 
        </>
    );
}

export default Filter;
