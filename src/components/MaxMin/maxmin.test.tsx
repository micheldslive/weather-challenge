import { render } from '@testing-library/react'
import { MaxMin } from '.'

describe('<Temperature />', () => {
  it.each(['temperature title'])('should have a %p element', () => {
    const { getByLabelText } = render(<MaxMin />)
    expect(getByLabelText('maxmin')).toBeInTheDocument()
  })
})
