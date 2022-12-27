import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddTask from "../Pages/AddTask/AddTask";
import CompletedTask from "../Pages/CompletedTask/CompletedTask";
import MyTask from "../Pages/MyTask/MyTask";

export const router = createBrowserRouter([
    {
        path : '/', element : <Main></Main>, 
        children : [
            {
                path : '/home', element : <Main></Main>
            },
            {
                path : '/addTask', element: <AddTask></AddTask>
            },
            {
                path : '/myTask', element: <MyTask></MyTask>
            },
            {
                path : '/completeTask', element: <CompletedTask></CompletedTask>
            }
           
        ]
    }
])