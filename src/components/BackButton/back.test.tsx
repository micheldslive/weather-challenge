import { getRenderer } from '@/core/tests/helpers'
import { BackButton } from '.'

describe('<BackButton />', () => {
  it.each(['button'])('should have a %p element', (expected) => {
    const { getByLabelText } = useRenderer

    const button = getByLabelText(expected)
    expect(button).toBeInTheDocument()
  })
})

const useRenderer = getRenderer(<BackButton />)
