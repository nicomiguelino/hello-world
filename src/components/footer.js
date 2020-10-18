import React from "react"
import { Link } from "gatsby"

export default function Footer() {
  return (
    <div>
      <footer>
        <Link to="/">My First Gatsby Blog</Link>
        <Link to="/portfolio">Portfolio</Link>
      </footer>
    </div>
  )
}
