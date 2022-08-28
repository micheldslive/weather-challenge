import { render } from '@testing-library/react'
import { World } from '.'

describe('<World />', () => {
  it.each(['svg'])('should have a %p element', (expected) => {
    const { queryAllByText } = getRenderer()

    const titles = queryAllByText(expected)

    titles.map((title) => {
      expect(title).toBeInTheDocument()
    })
  })
})

function getRenderer() {
  return render(<World />)
}
