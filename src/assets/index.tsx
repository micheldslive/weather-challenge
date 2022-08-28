import WorldIcon from './world-icon.svg'
import BackIcon from './back-button.svg'
import MaxMinIcon from './max-min-arrows.svg'

type TImage = {
  [key: string]: JSX.Element
}

const Image: TImage = {
  world: <WorldIcon />,
  back: <BackIcon />,
  maxmin: <MaxMinIcon />,
}

export default Image
