import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Loader from "../../Loader/Loader";
import AllTask from "./AllTask";

const Home = () => {
  const { user } = useContext(AuthContext);
  const { data: task = [], isLoading } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/task?email=${user?.email}`
      );
      const data = await res.json();

      return data;
    },
  });

  if(isLoading){
    return <Loader></Loader>
  }
  return (
    <div>
      {
        task.length? <h1 className="text-center text-2xl mt-12 font-semibold text-slate-900">
        Your To Do List
      </h1> : <><h1 className="text-center text-2xl mt-12 font-semibold text-slate-900" >You have no to do list <Link to='/addTask' className="text-green-500 underline">Add Your To Do</Link></h1></>
      }

      {task.map((t) => (
        <AllTask key={t._id} task={t}></AllTask>
      ))}
    </div>
  );
};

export default Home;
