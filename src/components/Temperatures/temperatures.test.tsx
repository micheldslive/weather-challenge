import { render } from '@testing-library/react'
import { Temperatures } from '.'

describe('<Temperatures />', () => {
  it.each(['temperature title'])('should have a %p element', () => {
    const { getByRole } = getRender()
    expect(getByRole('heading', { level: 1 })).toBeInTheDocument()
  })
  it.each(['maxmin image'])('should have a %p element', () => {
    const { getByLabelText } = getRender()
    expect(getByLabelText('maxmin')).toBeInTheDocument()
  })
})

const getRender = () => {
  return render(<Temperatures />)
}
