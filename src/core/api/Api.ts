import axios from 'axios'
import { IWeatherData } from '@/core/types'

export const WeatherAPI = () => {
  const key = process.env.API_KEY
  const baseURL = process.env.BASE_URL
  const api = axios.create({
    baseURL,
  })

  const getDataByCity = async (city = 'Recife'): Promise<IWeatherData> => {
    const response = await api.get(
      `forecast.json?key=${key}&days=1&aqi=no&alerts=no&q=${city}`,
    )

    return response.data || null
  }

  return {
    getDataByCity,
  }
}
