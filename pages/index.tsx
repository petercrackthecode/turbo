import { ChangeEvent, useState } from "react"
import Head from "next/head"
import InputBox from "components/InputBox"
import TaskList from "components/TaskList"

import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  const [input, setInput] = useState<String>("")
  const [tasks, setTasks] = useState<String[]>([])
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
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
            event.key === "Enter" && input !== "" && setTasks([...tasks, input])
          }
        />
        <TaskList tasks={tasks} />
      </section>
    </Layout>
  )
}
