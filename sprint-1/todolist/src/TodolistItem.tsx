import {ChangeEvent, KeyboardEvent, useState} from 'react'
import type {FilterValues, Task} from './App'
import {Button} from './Button'

type Props = {
    title: string
    tasks: Task[]
    deleteTask: (taskId: string) => void
    createTask: (title: string) => void
    changeFilter: (filter: FilterValues) => void
}

export const TodolistItem = ({title, tasks, deleteTask, createTask, changeFilter}: Props) => {

    const [taskTitle, setTaskTitle] = useState<string>('')

    const createTaskHandler = () => {
        createTask(taskTitle)
        setTaskTitle('')
    }

    const maxTitleLengthError = taskTitle.length > 10

    const setTitleOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setTaskTitle(e.currentTarget.value)
    const setTitleOnKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && taskTitle && !maxTitleLengthError) {
            createTaskHandler()
        }
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input value={taskTitle}
                       onChange={setTitleOnChangeHandler}
                       onKeyDown={setTitleOnKeyDownHandler}
                />
                <Button title={'+'} onClick={createTaskHandler} disabled={!taskTitle.length || maxTitleLengthError}/>
            </div>
            {!taskTitle.length && <div>Enter title, please.</div>}
            {(taskTitle && !maxTitleLengthError) && taskTitle && <div>Max title lenght is 10 charters</div>}
            {maxTitleLengthError && <div style={{color: 'red'}}>Your title is too long</div>}
            {tasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <ul>
                    {tasks.map(task => {
                        return (
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone}/>
                                <span>{task.title}</span>
                                <Button title={'x'} onClick={() => deleteTask(task.id)}/>
                            </li>
                        )
                    })}
                </ul>
            )}
            <div>
                <Button title={'All'} onClick={() => changeFilter('all')}/>
                <Button title={'Active'} onClick={() => changeFilter('active')}/>
                <Button title={'Completed'} onClick={() => changeFilter('completed')}/>
            </div>
        </div>
    )
}
