"use client"

import { useState, useEffect } from "react"
import {format} from "date-fns"

interface ClockProps {
  format: string
}

export default function Clock({ format: timeFormat }: ClockProps) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return <span>{format(time, timeFormat)}</span>
}

