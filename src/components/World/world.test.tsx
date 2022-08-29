import { render } from '@testing-library/react'
import { World } from '.'

describe('<World />', () => {
  it.each(['svg'])('should have a %p element', () => {
    const { getByLabelText } = getRenderer()

    const svg = getByLabelText('world')
    expect(svg).toBeInTheDocument()
  })
})

const getRenderer = () => {
  return render(<World />)
}
