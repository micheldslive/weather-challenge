import { IImage } from '@/core/types'
import WorldIcon from '@/assets/world-icon.svg'
import BackIcon from '@/assets/back-button.svg'
import MaxMinIcon from '@/assets/max-min-arrows.svg'

import Day113 from '@/assets/day/113.svg'
import Day116 from '@/assets/day/116.svg'
import Day122 from '@/assets/day/122.svg'
import Day176 from '@/assets/day/176.svg'
import Day179 from '@/assets/day/179.svg'
import Day200 from '@/assets/day/200.svg'
import Day263 from '@/assets/day/263.svg'
import Day326 from '@/assets/day/326.svg'
import Day389 from '@/assets/day/389.svg'

import Night113 from '@/assets/night/113.svg'
import Night116 from '@/assets/night/116.svg'
import Night122 from '@/assets/night/122.svg'
import Night176 from '@/assets/night/176.svg'
import Night179 from '@/assets/night/179.svg'
import Night200 from '@/assets/night/200.svg'
import Night263 from '@/assets/night/263.svg'
import Night326 from '@/assets/night/326.svg'
import Night389 from '@/assets/night/389.svg'

export const Image: IImage = {
  day: {
    113: <Day113 />,
    116: <Day116 />,
    122: <Day122 />,
    176: <Day176 />,
    179: <Day179 />,
    200: <Day200 />,
    263: <Day263 />,
    326: <Day326 />,
    389: <Day389 />,
  },
  night: {
    113: <Night113 />,
    116: <Night116 />,
    122: <Night122 />,
    176: <Night176 />,
    179: <Night179 />,
    200: <Night200 />,
    263: <Night263 />,
    326: <Night326 />,
    389: <Night389 />,
  },
  default: {
    world: <WorldIcon />,
    back: <BackIcon />,
    maxmin: <MaxMinIcon />,
  },
}
