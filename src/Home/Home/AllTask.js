import React from "react";

const AllTask = ({ task }) => {
  return (
    <div>
      <div className="mx-auto mt-8">
        <div className="border rounded-md px-4 shadow-lg mx-20 ">
          <div>
            <div className="p-10">
              <h2>Activity Name: {task?.name}</h2>
              <h3>Date-Time: {task?.dateTime} </h3>

              <p className=""> Description : {task?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTask;
