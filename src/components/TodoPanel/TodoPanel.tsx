import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodoList } from '../redux/todoSlice'

export default function TodoPanel() {
	const [todo, setTodo] = useState({})
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

	const addClick = () => {
		dispatch(addTodoList(todo))
	}

	return (
		<div>
			<label htmlFor='name' className='todo__label'>
				<input
					className='todolist__newlist'
					type='text'
					id='name'
					placeholder='Что нужно сделать?'
					name='name'
					onChange={onChange}
				/>
			</label>
			<div>
				<button onClick={addClick}>ADD</button>
			</div>
		</div>
	)
}
