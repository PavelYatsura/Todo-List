import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'
import { loadState } from './storage'

export const TODO_KEY = 'todo'

type Todo = {
	id: number
	name: string
	description: string
	checked: boolean
}

interface TodosProps {
	not: Todo[]
	done: Todo[]
	all: Todo[]
}

const initialState: TodosProps = loadState<TodosProps>(TODO_KEY) ?? {
	not: [],
	done: [],
	all: [],
}

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodoList(state, action) {
			state.all.push({
				...action.payload,
				id: state.all.length + 1,
			})
			state.not.push({
				...action.payload,
				id: state.not.length + 1,
			})
		},
		changeChecked(state, action) {
			const findItem = state.all.find(obj => obj.id === action.payload.id)
			if (findItem) {
				findItem.checked = !findItem.checked
			}
			if (findItem?.checked === true) {
				state.done.push(findItem)
				state.not = state.not.filter(obj => obj.id != action.payload.id)
			}
			if (findItem?.checked === false) {
				state.not.push(findItem)
				state.done = state.done.filter(obj => obj.id != action.payload.id)
			}
		},
		clearAll(state) {
			state.all = []
			state.done = []
			state.not = []
		},
	},
})

export const selectTodos = (state: RootState) => state.todo
export const { addTodoList, changeChecked, clearAll } = todoSlice.actions
export default todoSlice.reducer
