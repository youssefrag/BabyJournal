import React from 'react'
import { useParams } from "react-router-dom";

export default function BabyDetailsPage() {

  const LogTypes = {
    HEAD: "head",
    HEIGHT: "height",
    WEIGHT: "weight",
    TEMPERATURE: "temperature",
    MEDICINE: "medicine",
    VACCINE: "vaccine",
    APPOINTMENT: "appointment"
  }
  const lengthUnits = [
    {name: "Centimeter", value: "cm"}, 
    {name: "Millimeter", value: "mm"},
    {name: "Inch", value: "in"},
    {name: "Foot", value: "ft"}
  ]
  const temperatureUnits = [
    {name: "Celcius", value: "C"}, 
    {name: "Farenheit", value: "F"}
  ]
  const weightUnits = [
    {name: "kilogram", value: "kg"},
    {name: "gram", value: "g"}, 
    {name: "milligram", value: "mg"},
    {name: "ounce", value: "oz"},
    {name: "pound", value: "lb"}
  ]

  const { id } = useParams()

  return (
    <div>{id}</div>
  )
}
