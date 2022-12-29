
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Router';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
         <RouterProvider router={router}>
             <Toaster></Toaster>
         </RouterProvider>
    </div>
  );
}

export default App;
