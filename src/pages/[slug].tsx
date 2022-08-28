import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { WeatherAPI } from '@/core/api/Api'
import { IWeatherData } from '@/core/types'
import { City } from '@/templates/city'
import { cities } from '../mocks'

type PageProps = {
  data: IWeatherData
}

type PageParams = {
  slug: string
}

const Index: NextPage<PageProps> = ({ data }) => <City data={data} />

export default Index

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = cities.map(({ slug }) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PageProps, PageParams> = async ({
  params,
}) => {
  const { getDataByCity } = WeatherAPI()
  const data = await getDataByCity(params?.slug)

  return {
    props: {
      data,
    },
    revalidate: 60,
  }
}
