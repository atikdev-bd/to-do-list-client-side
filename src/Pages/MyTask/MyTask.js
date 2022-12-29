import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Loader from "../../Loader/Loader";

import TaskDetails from "./TaskDetails";

const MyTask = () => {
  const { user } = useContext(AuthContext);
  const {
    data: task = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/task?email=${user?.email}`
      );
      const data = await res.json();

      return data;
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      {task?.map((d) => (
        <TaskDetails key={d._id} task={d} refetch={refetch}></TaskDetails>
      ))}
    </div>
  );
};

export default MyTask;
