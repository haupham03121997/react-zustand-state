import React, { useRef } from 'react';
import { usePeopleStore } from '../../redux/store';

export default function Input() {
  const  inputRef = useRef();
  const addPerson = usePeopleStore(state=>state.addPerson)

  const add = ()=>{
    if(inputRef.current.value){
      addPerson(inputRef.current.value);
    }
    inputRef.current.value = ""
  }

  return (
    <div>
      <input type="text" ref={inputRef}/>
      <button type='button' onClick={add}>Add</button>
    </div>
  )
}
