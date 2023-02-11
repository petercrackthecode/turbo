import { useState } from "react"
import Head from "next/head"
import InputBox from "components/InputBox"
import TaskList from "components/TaskList"

import { Layout } from "@/components/layout"

export default function IndexPage() {
  const [input, setInput] = useState<String>("")
  const [tasks, setTasks] = useState<{ [id: string]: String }>({})

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter" && input !== "") {
      const taskId = crypto.randomUUID()
      setInput("")
      setTasks({ ...tasks, [taskId]: input })
    }
  }

  return (
    <Layout>
      <Head>
        <title>Turbo</title>
        <meta
          name="description"
          content="Turbo is an all-in-one productivity tool to help you manage your time intelligently"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <InputBox
          value={input}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setInput(event.target.value)
          }
          onKeyDown={handleKeyDown}
        />
        <TaskList {...{ tasks, setTasks }} />
      </section>
    </Layout>
  )
}
