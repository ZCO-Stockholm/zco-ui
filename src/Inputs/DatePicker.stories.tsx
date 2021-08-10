import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from './DatePicker'

export default {
  title: "Inputs"
}

export const DateDefault = () => {
  const [date, setDate] = useState<Date>(new Date())

  return <DatePicker
    selected={date}
    onChange={(date: Date) => setDate(date)}
  />
}

export const DateWithLabel = () => {
  const [date, setDate] = useState<Date>(new Date())

  return <DatePicker
    label="Lorem ipsum"
    selected={date}
    onChange={(date: Date) => setDate(date)}
  />
}