import React from "react"
import Header from "./header"
import Footer from "./footer"

export default function Main({ children }) {
  return (
    <div>
      <Header></Header>

      {children}

      <Footer></Footer>
    </div>
  )
}
