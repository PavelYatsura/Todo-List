import { useSelector } from 'react-redux'
import { selectTodos } from '../components/redux/todoSlice'
import TodoItem from '../components/Todolist/TodoItem/TodoItem'
import "../components/Todolist/Todolist.sass"


export default function AppPage() {
	const { all } = useSelector(selectTodos)

	return (
		<div className='todolist'>
			{all.map((item, index) => (
				<TodoItem {...item} key={index}></TodoItem>
			))}
		</div>
	)
}
