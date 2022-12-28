
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import TaskDetails from "./TaskDetails";


const MyTask = () => {


    // const [task, setTask]=useState(null)



    const {
        data: task = [],
        refetch,
      } = useQuery({
        queryKey: ["buyers"],
        queryFn: async () => {
          const res = await fetch(
            "http://localhost:5000/task"
          );
          const data = await res.json();
          return data;
        },
      });

  return (
    <div>
        {
            task?.map(d => <TaskDetails key={d._id} task={d} refetch={refetch}></TaskDetails>)
        }
    </div>
  );
};

export default MyTask;
