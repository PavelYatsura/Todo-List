import { useSelector } from 'react-redux'
import { selectTodos } from '../components/redux/todoSlice'
import TodoItem from '../components/Todolist/TodoItem/TodoItem'
import '../components/Todolist/Todolist.sass'

export default function DonePage() {
	const { done } = useSelector(selectTodos)

	return (
		<div className='todolist'>
			{done.map((item, index) => (
				<TodoItem {...item} key={index}></TodoItem>
			))}
		</div>
	)
}


