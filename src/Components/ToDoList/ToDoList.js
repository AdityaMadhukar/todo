import React, { useState } from 'react';
import './ToDoList.css';
import { CiCircleRemove } from 'react-icons/ci';
import {TbIndentIncrease} from 'react-icons/tb'
const ToDoList = () => {

    const [tasks, setTasks] = useState(
        [
            
        ]);
    const [modal, setModal] = useState(false)
    const [addTask, setAddTask] = useState()
    const [taskHeading, setTaskHeading] = useState()
    const remove = (index) => {
        setTasks(tasks_old => {
            return tasks_old.filter((e, i) => i !== index);
        })
    }
    const add = () => {
        setTasks([...tasks, {name: taskHeading , task: addTask, check: false }]);
        setModal(false);
    }
    const checked = (index) => {
        setTasks(tasks_old => {
            const tasks_new = tasks_old.map((obj, i) => {
                if (i == index) {
                    return { name: tasks[index].name , task: tasks[index].task, check: !tasks[index].check }
                }
                return obj;
            })
            return tasks_new;
        })
    }
    return (
        <>
        <h1 className='number'>{tasks.length}</h1>
            {modal &&
                <div className='Modal'>
                    <div className="AddTask">
                        <span className='exit' onClick={()=>{setModal(false)}}><CiCircleRemove /></span>
                        <input className='name' type="text" value={taskHeading} onChange={(e)=>{setTaskHeading(e.target.value)}} placeholder='Task Name'/>
                        <textarea className='add' value={addTask} onChange={(e) => { setAddTask(e.target.value) }} placeholder='Task Description'/>
                        <button className='submit' onClick={() => { add() }}>Add</button>
                    </div>
                </div>
            }
            <div className='list'>
                <div className="addicon" onClick={()=>{setModal(true)}}><TbIndentIncrease/></div>
                
                <h1 className='heading'>To Do List</h1>
                
                {tasks.map((e, index) => {
                    return (
                        <div className={`${tasks[index].check}`} >
                            <div className='checkbox'>
                                <input type='checkbox' onChange={() => { checked(index) }} checked={tasks[index].check}/>
                            </div>
                            <h4>{tasks[index].name}</h4>
                            <br />
                            <p class="taskDescription">
                                {tasks[index].task}
                            </p>
                            <span className='remove' onClick={() => { remove(index) }}><CiCircleRemove /></span>
                        </div>
                    );
                })}
            </div>
        </>

    );
}

export default ToDoList;
