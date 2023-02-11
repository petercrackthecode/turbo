"use client"

import { useState } from "react"

import { Checkbox } from "@/components/ui/checkbox"

export default function TaskList({ tasks, setTasks }) {
  return (
    <ul className="task-list grid-col-1 grid space-y-2">
      {Object.keys(tasks).map((taskId) => (
        <Task
          task={tasks[taskId]}
          key={taskId}
          taskId={taskId}
          setTasks={setTasks}
        />
      ))}
    </ul>
  )
}

function Task({ task, taskId, setTasks }) {
  const [isTaskDisabled, setIsTaskDisabled] = useState<Boolean>(true)

  return (
    <li
      className="task flex items-center space-x-2 rounded-lg border-b border-l px-2 py-3"
      onFocus={() => setIsTaskDisabled(false)}
      onBlur={() => setIsTaskDisabled(true)}
    >
      <Checkbox className="rounded-full text-lg hover:text-green-500" />
      <label className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        <input
          className="p-0 focus:border-0 focus:outline-0 focus:ring-0"
          type="text"
          value={task}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            event.target.value !== "" &&
            setTasks((prevTasks: { [id: string]: String }) => ({
              ...prevTasks,
              [taskId]: event.target.value,
            }))
          }
        />
      </label>
    </li>
  )
}
