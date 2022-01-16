import React, {useState, useEffect} from 'react';
import Filter from './Filter';
import Element from './Element';

import './App.css';

const defaultFilter = {assigne: '', status: '', title: ''}

function App(props) {  
  const [list, setList] = useState(props.dataElements)
  const [filter, setFilter] = useState(defaultFilter)
  const [statusEnum, setStatusEnum] = useState([])

  useEffect(() => {
    filterData(filter)
  }, [filter]);

  useEffect(() => {
    updateStatusEnum()
  }, [props.dataElements])

  const handlerFilterOnChange = (value, key) => {
    const newFilter = {};
    newFilter[key] = value
    setFilter(prevFilter => ({...prevFilter, ...newFilter}));
  }

  const filterData = (filter) => {
    const filteredList = props.dataElements.filter(element => 
          (filter.assigne ? element.assigne.includes(filter.assigne) : true) &&
          (filter.title ? element.title.includes(filter.title) : true) &&
          (filter.status ? element.status === filter.status : true)
      )
    setList(filteredList)
  }

  const updateStatusEnum = () => {
    const newStatusEnum = new Set()    
    props.dataElements.map(element => newStatusEnum.add(element.status))
    newStatusEnum.add('')
    setStatusEnum(
      Array.from(newStatusEnum)
    )
  }
  
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <Filter filterFunction={handlerFilterOnChange} filter={filter} statusFilter={statusEnum}/>     
          </tr>
        </thead>
        <tbody>          
        {list.map((element, index) => (
          <Element element={element} elementKey={index}/>          
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
