import { useDispatch, useSelector } from 'react-redux'
import './Header.sass'
import { clearAll, selectTodos } from '../redux/todoSlice'
import { NavLink } from 'react-router'

export default function Header() {
	const { all, done, not } = useSelector(selectTodos)
	const dispatch = useDispatch()
	console.log(all)
	console.log(done)
	console.log(not)
	const onClear = () => {
		dispatch(clearAll())
	}
	return (
		<header className='header'>
			<h1 className='header__title'>Список Дел</h1>
			<nav className='header__nav'>
				<p>
					Осталось <span>{not.length}</span>
				</p>
				<ul className='header__ul'>
					<li>
						<NavLink to='/'>Все</NavLink>
					</li>
					<li>
						<NavLink to='/done'>Выполненные</NavLink>
					</li>
					<li>
						<NavLink to='/not'>Осталось</NavLink>
					</li>
				</ul>
				<button className='header__clear' onClick={onClear}>
					Очистить все
				</button>
			</nav>
		</header>
	)
}
