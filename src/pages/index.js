import * as React from "react"
import About from "./components/About/About"
import Fast from "./components/Fast/Fast"
import { Layout } from "./components/Layout/Layout"
import Main from "./components/main/Main"
import Persuade from "./components/Persuade/Persuade"
import Productivity from "./components/Productivity/Productivity"
import Variants from "./components/Variants/Variants"
import './index.scss'

// markup
const IndexPage = () => {
  return (
    <main>
      <Layout>
        <Main />
        <Variants />
        <Persuade />
        <Fast />
        <Productivity />
        <About />
      </Layout>
    </main>
  )
}

export default IndexPage
