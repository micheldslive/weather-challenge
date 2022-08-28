import axios from 'axios'
import { IWeatherData } from '@/core/types'

export const WeatherAPI = () => {
  const api = axios.create({
    baseURL: 'http://api.weatherapi.com/v1/',
  })

  const getDataByCity = async (city = 'Recife'): Promise<IWeatherData> => {
    const response = await api.get(
      `forecast.json?key=3eccbfad163b46c2b93104916222608&days=1&aqi=no&alerts=no&q=${city}`,
    )

    //if (!response.data) throw new Error(error.message)
    return response.data || null
  }

  return {
    getDataByCity,
  }
}
