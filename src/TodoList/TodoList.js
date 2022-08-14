import React from 'react';
import { useState } from 'react';
import todoimg from './Images/todolist.png';

function TodoList() {
     const [inputData, setInputData] = useState("");
     const [item, setItem] = useState([]);
     const [toggleSubmit, setToggleSubmit] = useState(true);
     const [iseditItem, setIsEditItem] = useState(null);

     const addItem = () => {
          if(!inputData) {
               alert("No Data inputed.");
          } else if(inputData && !toggleSubmit){
               setItem(
                    item.map((elem) => {
                         if(elem.id === iseditItem) {
                              return {...elem, name: inputData}
                         }
                         return elem;
                    })
               )
               setToggleSubmit(true);
               setInputData('');
               setIsEditItem(null);
          }else{
               const allInputData = { id: new Date().getTime().toString(), name: inputData}
               setItem([...item, allInputData]);
               setInputData('');
          }
     }

     const editItem = (id) => {
          let newEditItem = item.find((elem) => {
               return elem.id === id;
          });
          setToggleSubmit(false);
          setInputData(newEditItem.name);
          setIsEditItem(id);
     }
     const deleteItem = (index) => {
          const updatedItem = item.filter((elem) => {
               return index !== elem.id;
          });
          setItem(updatedItem);
     }

     const removeAll = () => {
          setItem([]);
     }
  return (
    <div>
      <div className='bg-cyan-700 w-scree h-screen flex flex-row justify-center text-center items-center'>
          <div className='bg-sky-500 h-3/4 w-4/12 shadow-xl shadow-stone-300 rounded-3xl'>
               <div className='flex justify-center'>
                    <figure>
                         <img src={todoimg} className='flex h-14 w-14 m-4 ' alter="TodoIcon"/>
                         <figcaption className='text-blue-900 text-xl py-1.5 mb-7 w-full min-w-[64px] text-center box-border font-medium rounded capitalize'>Add Your List Here</figcaption>
                    </figure>
               </div>
               <div className=''>
                    <input type="text" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-5/12 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-700" 
                         placeholder="Input your items here" 
                         value={inputData}
                         onChange={(e) => setInputData(e.target.value)}
                         />
                         {
                              toggleSubmit? <i className="fa-solid fa-plus bg-cyan-700 text-blue-200 w-12 h-8 py-2 rounded-full mx-2.5 p-1.5 shadow-lg " 
                                                  title="Add Item"
                                                  onClick={addItem}></i> :
                                        <i className="far fa-edit bg-cyan-700 text-blue-200 w-12 h-8 py-2 rounded-full mx-2.5 p-1.5 shadow-lg " 
                                                  title="Add Item"
                                                  onClick={addItem}></i>
                         }

               </div>
               <div className='flex-row'>
               {
                    item.map((elem) => {
                              return (
                                   <div className="flex w-full" key={elem.id}>
                                        <h3 className='w-8/12 h-3/5 m-2 ml-12 py-2 px-4 bg-gray-200 text-gray-700 justify-center rounded items-center'>{elem.name}</h3>
                                        <div className='flex m-3'>
                                        <i className="far fa-edit bg-cyan-700 text-blue-200 w-12 h-8 rounded-full p-1.5 shadow-lg " title="Edit Item" onClick={() => editItem(elem.id)}></i>
                                        <i className="far fa-trash-alt bg-cyan-700 text-blue-200 w-12 h-8 rounded-full shadow-lg p-1.5" title="Delete Item" onClick={() => deleteItem(elem.id)}></i>
                                   </div>
                                   </div>
                              )
                         })

               }
               </div>
               <div className='m-5'>
                    <button className="btn effect04"  data-sm-link-text="Remove All" onClick={removeAll}><span className='bg-white text-black p-3 rounded-3xl'>Remove All</span></button>
               </div>
          </div>
      </div>
    </div>
  )
}

export default TodoList;
