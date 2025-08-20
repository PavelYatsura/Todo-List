import { useSelector } from 'react-redux'
import { selectTodos } from '../components/redux/todoSlice'
import TodoItem from '../components/Todolist/TodoItem/TodoItem'
import '../components/Todolist/Todolist.sass'

export default function NotPage() {
	const { not } = useSelector(selectTodos)

	return (
		<div className='todolist'>
			{not.map((item, index) => (
				<TodoItem {...item} key={index}></TodoItem>
			))}
		</div>
	)
}
