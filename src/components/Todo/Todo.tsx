import { useState } from 'react'

import { addTodoList } from '../redux/todoSlice'
import { useDispatch, useSelector } from 'react-redux'
import './Todo.sass'
import { clearAll, selectTodos } from '../redux/todoSlice'
import TodoItem from '../Todolist/TodoItem/TodoItem'

const DEFAULT_TODO = {
	name: '',
	description: '',
	checked: false,
}
export default function Todo() {
	const { all, done, not } = useSelector(selectTodos)
	const [todo, setTodo] = useState(DEFAULT_TODO)
	const [allState, setAllStates] = useState(true)
	const [doneState, setDoneState] = useState(false)
	const [notState, setNotState] = useState(false)
	const dispatch = useDispatch()
	function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = event.target
		setTodo({
			...todo,
			[name]: value,
			description: '',
			checked: false,
		})
	}
	const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
		if (event.key === 'Enter') {
			if (todo != DEFAULT_TODO) {
				dispatch(addTodoList(todo))
				setTodo(DEFAULT_TODO)
			}
		}
	}
	const onClear = () => {
		dispatch(clearAll())
	}
	const addClick = () => {
		if (todo != DEFAULT_TODO) {
			dispatch(addTodoList(todo))
			setTodo(DEFAULT_TODO)
		}
	}
	const changeAll = () => {
		setAllStates(true)
		setDoneState(false)
		setNotState(false)
	}
	const changeDone = () => {
		setAllStates(false)
		setDoneState(true)
		setNotState(false)
	}
	const changeNot = () => {
		setAllStates(false)
		setDoneState(false)
		setNotState(true)
	}
	return (
		<div>
			<div className='header'>
				<h1 className='header__title'>Список Дел</h1>
				<nav className='header__nav'>
					<p>
						Осталось <span>{not.length}</span>
					</p>
					<ul className='header__ul'>
						<li onClick={changeAll} className={allState ? 'active' : ''}>
							Все
						</li>
						<li onClick={changeDone} className={doneState ? 'active' : ''}>
							Выполненные
						</li>
						<li onClick={changeNot} className={notState ? 'active' : ''}>
							Осталось
						</li>
					</ul>
					<button className='header__clear' onClick={onClear}>
						Очистить все
					</button>
				</nav>
			</div>
			<label htmlFor='name' className='todo__label'>
				<input
					className='todolist__newlist'
					type='text'
					id='name'
					value={todo.name}
					placeholder='Что нужно сделать?'
					name='name'
					onChange={onChange}
					onKeyDown={onKeyDown}
				/>
			</label>
			<div>
				<button onClick={addClick}>ADD</button>
			</div>
			<div className='todolist'>
				{allState &&
					all.map((item, index) => <TodoItem {...item} key={index}></TodoItem>)}
				{doneState &&
					done.map((item, index) => (
						<TodoItem {...item} key={index}></TodoItem>
					))}
				{notState &&
					not.map((item, index) => <TodoItem {...item} key={index}></TodoItem>)}
			</div>
		</div>
	)
}
