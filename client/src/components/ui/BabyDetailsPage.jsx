import React, { useState, useEffect } from 'react'
import axios from 'axios';
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

  const [babyDetails, setBabyDetails] = useState({})

  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8080/api/baby/${id}`, {
      withCredentials: true,
    })
    .then((result) => {
      setBabyDetails(result.data)
    })
  }, [])

  return (
    <div>{id}</div>
  )
}
