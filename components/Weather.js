import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const api = {
    url: process.env.EXPO_PUBLIC_API_URL,
    key: process.env.EXPO_PUBLIC_API_KEY,
    icons: process.env.EXPO_PUBLIC_API_ICONS_URL
}

export default function Weather() {
    const [temp, setTemp] = useState('')
    const [description, setDescription] = useState('')
    const [icon, setIcon] = useState('')

useEffect(() => {
    const url = api.url +
    'lat=65.0000' +
    '&lon=24.0000' +
    '&units=metric' +
    '&lang=fi' +
    '&appid=' +api.key


console.log(icon)


    fetch(url)
        .then(res => res.json())
        .then((json) => {
            setTemp(json.main.temp)
            setDescription(json.weather[0].description)
            setIcon(api.icons + json.weather[0].icon + '@2x.png')

    })
        .catch((error) => {
            console.log(error)

    })

}, [])

  return (
    <View>
      <Text>Sää</Text>
      <Text>{temp} &#x2103;</Text>
      {icon &&  
      <Image source={{uri: icon}} style={{width: 100,height: 100}} />
      }
      <Text>{description}</Text>
      
    </View>
  )
}