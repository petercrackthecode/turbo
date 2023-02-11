"use client"

import { useState } from "react"

import { Checkbox } from "@/components/ui/checkbox"

export default function TaskList({ tasks }) {
  return (
    <ul className="task-list grid-col-1 grid space-y-2">
      {tasks.map((task: String, index: Number) => (
        <Task task={task} key={`${task}_${index}`} />
      ))}
    </ul>
  )
}

function Task({ task, key }) {
  const [isTaskDisabled, setIsTaskDisabled] = useState<Boolean>(true)
  return (
    <li
      className="task flex space-x-2 rounded-lg border-b border-l px-2 py-3"
      key={key}
      onFocus={() => setIsTaskDisabled(false)}
    >
      <Checkbox
        id={key}
        className="rounded-full text-lg hover:text-green-500"
      />
      <label
        htmlFor={key}
        className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {task}
      </label>
    </li>
  )
}
