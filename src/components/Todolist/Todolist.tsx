import { useSelector } from 'react-redux'
import './Todolist.sass'
import { selectTodos } from '../redux/todoSlice'
import TodoItem from './TodoItem/TodoItem'

export default function Todolist(todos) {
	const { all } = useSelector(selectTodos)

	return (
		<div className='todolist'>
			{todos.map((item, index) => (
				<TodoItem {...item} key={index}></TodoItem>
			))}
		</div>
	)
}
