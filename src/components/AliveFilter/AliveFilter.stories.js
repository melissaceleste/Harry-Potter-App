import AliveFilter from './AliveFilter'
import { action } from '@storybook/addon-actions'

export default {
  title: 'AliveFilter',
  component: AliveFilter,
}

const onFilterByHouse = action('onFilterByHouse')
export const defaultAliveFilter = () => AliveFilter(onFilterByHouse)
