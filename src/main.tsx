import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './components/redux/store.ts'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AllPage from './Pages/AllPage.tsx'
import NotPage from './Pages/NotPage.tsx'
import DonePage from './Pages/DonePage.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '/', element: <AllPage /> },
			{ path: '/not', element: <NotPage /> },
			{ path: '/done', element: <DonePage /> },
		],
	},
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={router}></RouterProvider>
		</Provider>
	</StrictMode>
)
