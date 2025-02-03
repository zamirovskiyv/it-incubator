import './App.css'
import {useState} from 'react'
import {TodolistItem} from './TodolistItem'
import {v1} from "uuid";


export type Task = {
  id: string
  title: string
  isDone: boolean
}

export type FilterValues = 'all' | 'active' | 'completed'

export const App = () => {
  const [filter, setFilter] = useState<FilterValues>('all')

  // const [tasks, setTasks] = useState<Task[]>([
  //   { id: v1(), title: 'HTML&CSS', isDone: true },
  //   { id: v1(), title: 'JS', isDone: true },
  //   { id: v1(), title: 'ReactJS', isDone: false },
  // ])

  const [tasks, setTasks] = useState<Task[]>([
    { id: v1().toString(), title: 'HTML&CSS', isDone: true },
    { id: v1().toString(), title: 'JS', isDone: true },
    { id: v1().toString(), title: 'ReactJS', isDone: false },
  ]);

  const deleteTask = (taskId: string) => {
    const filteredTasks = tasks.filter(task => {
      return task.id !== taskId
    })
    setTasks(filteredTasks)
  }

  const createTask = (title: string) => {
    // const newTask:Task = {
    //   id: v1(),
    //   title: title,
    //   isDone: false,
    // }

    // const nextState:Task[]=[...tasks, newTask]
    // setTasks(nextState)
    setTasks([...tasks, { id: v1().toString(), title, isDone: false }]);
  }

  const changeFilter = (filter: FilterValues) => {
    setFilter(filter)
  }

  let filteredTasks = tasks
  if (filter === 'active') {
    filteredTasks = tasks.filter(task => !task.isDone)
  }
  if (filter === 'completed') {
    filteredTasks = tasks.filter(task => task.isDone)
  }

  return (
      <div className="app">
        <TodolistItem title="What to learn"
                      tasks={filteredTasks}
                      createTask={createTask}
                      deleteTask={deleteTask}
                      changeFilter={changeFilter}/>
      </div>
  )
}
