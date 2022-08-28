import { render } from '@testing-library/react'
import { Temperature } from '.'

describe('<Temperature />', () => {
  it.each(['temperature title'])('should have a %p element', () => {
    const { getByRole } = render(<Temperature />)
    expect(getByRole('heading', { level: 1 })).toBeInTheDocument()
  })
})
