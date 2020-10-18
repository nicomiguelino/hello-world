import React from "react"

export default function Hello({ name = "Miguel" }) {
  return (
    <div>
      Hola, {name}!
    </div>
  )
}
