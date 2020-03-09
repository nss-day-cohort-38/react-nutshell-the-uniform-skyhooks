import React from "react";

const TaskCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          <span className="card-taskname">{props.task.name}</span>
        </h3>
        <p>Expected Completion Date: {props.task.completionDate}</p>
        <button
          type="button"
          onClick={() => props.history.push(`/tasks/${props.task.id}/edit`)}
        >
          Edit
        </button>
        {props.deleteTask && (
          <button
            type="button"
            onClick={() => {
              if (window.confirm("Are you sure you wish to delete this item?"))
                props.deleteTask(props.task.id);
            }}
          >
            Delete
          </button>
        )}
        <div className="radio">
          <label>
            <input type="radio" value="isComplete" />
            Completed
          </label>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
