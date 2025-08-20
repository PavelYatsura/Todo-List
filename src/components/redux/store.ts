import { configureStore } from '@reduxjs/toolkit'
import todo, { TODO_KEY } from './todoSlice'
import { useDispatch } from 'react-redux'
import { saveSorage } from './storage'

export const store = configureStore({
	reducer: {
		todo,
	},
})

store.subscribe(() => {
	saveSorage(store.getState().todo, TODO_KEY)
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
