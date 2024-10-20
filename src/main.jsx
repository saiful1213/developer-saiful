import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes'
// import { MouseContextProvider } from 'custom-pointer-react'
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

//  "custom-pointer-react": "^0.0.4",
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-[#111A28]'>
      {/* <MouseContextProvider> */}
        <RouterProvider router={Routes}></RouterProvider>
        <ToastContainer />
      {/* </MouseContextProvider> */}
    </div>
  </React.StrictMode>,
)
