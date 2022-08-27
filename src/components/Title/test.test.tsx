import { render } from '@testing-library/react'
import { Title } from './index'

describe('<Title />', () => {
  it('should render a heading', () => {
    const titleRender = render(<Title />)

    const title = titleRender.getByRole('heading', { name: /Next APP/i })

    expect(title).toBeInTheDocument
  })
})
