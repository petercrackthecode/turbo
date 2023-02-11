import { useState } from "react"

import { Input } from "@/components/ui/input"

export default function InputBox({ value, onChange, onKeyDown }) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div
      className="input-box relative flex flex-row"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <Input
        className="overflow-y-auto"
        type="text"
        placeholder="What would you like to accomplish next?"
        {...{ value, onChange, onKeyDown }}
      />
      {isFocused && value !== "" && (
        <div className="absolute inset-y-0 right-0 z-50 flex items-center p-4">
          <kbd className="rounded-md border bg-inherit px-4 dark:border-0 dark:bg-gray-600 dark:text-white">
            ↵
          </kbd>
        </div>
      )}
    </div>
  )
}
