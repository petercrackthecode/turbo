import { Input } from "@/components/ui/input"

export default function InputBox({ value, onChange, onKeyDown }) {
  return (
    <div className="input-box flex flex-row">
      <Input
        type="text"
        placeholder="What would you like to accomplish next?"
        {...{ value, onChange, onKeyDown }}
      />
    </div>
  )
}
