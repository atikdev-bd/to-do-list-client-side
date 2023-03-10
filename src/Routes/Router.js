import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Main from "../Layout/Main";
import AddTask from "../Pages/AddTask/AddTask";
import CompletedTask from "../Pages/CompletedTask/CompletedTask";
import MyTask from "../Pages/MyTask/MyTask";
import Login from "../shared/Login/Login";
import Register from "../shared/Register/Register";


export const router = createBrowserRouter([
    {
        path : '/', element : <Main></Main>, 
        children : [
          
            {
                path : '/home', element : <Main></Main>
            },
            {
                path : '/', element : <Home></Home>
            },
            {
                path : '/addTask', element: <AddTask></AddTask>
            },
            {
                path : '/myTask', element: <MyTask></MyTask>
            },
            {
                path : '/completeTask', element: <CompletedTask></CompletedTask>
            },
            {
                path : '/register', element:<Register></Register>
            },
            {
                path : '/login', element:<Login></Login>
            },
           
        ]
    }
])