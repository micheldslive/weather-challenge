export interface IWeatherAPI {
  getDataByCity(city: string): Promise<IWeatherData>
}

export interface IWeatherData {
  location: IWeatherLocation
  current: IWeatherCurrent
  forecast: IWeatherForecast
}

interface IWeatherLocation {
  name: string
  region: string
  country: string
  localtime: string
}

interface IWeatherCurrent {
  last_updated: string
  temp_c: number
  temp_f: number
  condition: IWeatherCurrentCondition
  wind_mph: number
  wind_kph: number
  wind_degree: number
  wind_dir: string
  pressure_mb: number
  pressure_in: number
  precip_mm: number
  precip_in: number
  humidity: number
  cloud: number
  feelslike_c: number
  feelslike_f: number
  vis_km: number
  vis_miles: number
  uv: number
  gust_mph: number
  gust_kph: number
}

interface IWeatherCurrentCondition {
  text: string
  icon: string
  code: number
}

interface IWeatherForecast {
  forecastday: IWeatherForecastday[]
}

interface IWeatherForecastday {
  day: IWeatherForecastDay
  astro: IWeatherForecastAstro
  hour: IWeatherForecastHour[]
}

interface IWeatherForecastDay {
  maxtemp_c: number
  maxtemp_f: number
  mintemp_c: number
  mintemp_f: number
  avgtemp_c: number
  avgtemp_f: number
  maxwind_mph: number
  maxwind_kph: number
  totalprecip_mm: number
  totalprecip_in: number
  avgvis_km: number
  avgvis_miles: number
  avghumidity: number
  daily_will_it_rain: number
  daily_chance_of_rain: number
  daily_will_it_snow: number
  daily_chance_of_snow: number
  condition: IWeatherCurrentCondition
  uv: number
}

interface IWeatherForecastAstro {
  sunrise: string
  sunset: string
  moonrise: string
  moonset: string
  moon_phase: string
  moon_illumination: string
}

interface IWeatherForecastHour {
  time_epoch: number
  time: string
  temp_c: number
  temp_f: number
  is_day: number
  condition: IWeatherCurrentCondition
  wind_mph: number
  wind_kph: number
  wind_degree: number
  wind_dir: string
  pressure_mb: number
  pressure_in: number
  precip_mm: number
  precip_in: number
  humidity: number
  cloud: number
  feelslike_c: number
  feelslike_f: number
  windchill_c: number
  windchill_f: number
  heatindex_c: number
  heatindex_f: number
  dewpoint_c: number
  dewpoint_f: number
  will_it_rain: number
  chance_of_rain: number
  will_it_snow: number
  chance_of_snow: number
  vis_km: number
  vis_miles: number
  gust_mph: number
  gust_kph: number
  uv: number
}

export interface ITemperature extends IMaxMin {
  temp_c?: number
}

export interface IMaxMin {
  maxtemp_c?: number
  mintemp_c?: number
}
