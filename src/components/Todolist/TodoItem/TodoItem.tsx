import { Circle, CircleCheckBig } from 'lucide-react'
import './TodoItem.sass'
import { useDispatch } from 'react-redux'
import { changeChecked } from '../../redux/todoSlice'
import { Todo } from '../../../interface'

export default function TodoItem(todo: Todo) {
	const dispatch = useDispatch()
	const onChangeChecked = () => {
		dispatch(changeChecked(todo))
	}

	return (
		<div
			className='item'
			style={{
				textDecoration: todo.checked ? 'line-through' : 'none',
				opacity: todo.checked ? 0.5 : 1,
			}}
			onClick={onChangeChecked}
		>
			{todo.checked === false ? (
				<Circle className='item__img' />
			) : (
				<CircleCheckBig className='item__img' />
			)}

			{todo.name}
		</div>
	)
}
