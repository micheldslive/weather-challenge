import { render } from '@testing-library/react'
import { Title } from '.'

describe('<Title />', () => {
  it.each(['title'])('should have a %p element', (expected) => {
    const { queryAllByText } = getRenderer()

    const titles = queryAllByText(expected)

    titles.map((title) => {
      expect(title).toBeInTheDocument()
    })
  })
})

function getRenderer() {
  return render(<Title />)
}
