import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { cities } from '../mocks'

type PageProps = {
  data: string
}

type PageParams = {
  city: string
  country: string
}

function City({ data }: PageProps) {
  const router = useRouter()
  const city = router.query.city

  useEffect(() => {
    console.log(city)
  }, [city])

  return (
    <>
      <h2 style={{ color: 'white' }}>{city}</h2>
      <h2 style={{ color: 'white' }}>{data}</h2>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = cities.map(({ city }) => ({
    params: { city },
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<PageProps, PageParams> = async ({
  params,
}) => {
  // const { data } = await api.get(params?.city)

  console.log('params getStatic', params)

  const data = params?.city

  if (!data) {
    return { notFound: true }
  }

  return {
    props: {
      data,
    },
  }
}

export default City
