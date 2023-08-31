import {createBrowserRouter} from 'react-router-dom'
import Layout from '../components/static/Layout'
import HomePage from '../Pages/HomePage'

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "home",
        element: <HomePage/>
      }
    ]
  }
])

export default mainRouter