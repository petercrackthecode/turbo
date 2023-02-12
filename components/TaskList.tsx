"use client"

import { useState } from "react"
import classNames from "classnames"
import Draggable from "react-draggable"

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
  const [isTaskCompleted, setIsTaskCompleted] = useState<Boolean>(false)

  return (
    <Draggable axis="y">
      <li className="task flex items-center space-x-2 rounded-lg border-b border-l px-2 py-3">
        <Checkbox
          className="rounded-full text-lg text-green-500 dark:text-white"
          onClick={() =>
            setIsTaskCompleted((prevIsTaskCompleted) => !prevIsTaskCompleted)
          }
        />
        <label className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          <input
            className={classNames(
              "bg-inherit p-0 focus:border-0 focus:outline-0 focus:ring-0",
              { "line-through": isTaskCompleted }
            )}
            type="text"
            value={task}
            onClick={(event: React.MouseEvent<HTMLInputElement>) =>
              event.stopPropagation()
            }
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
    </Draggable>
  )
}

class Point {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  equal(point: Point): boolean {
    return this.x === point.x && this.y === point.y
  }
}
