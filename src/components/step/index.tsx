import { Text, View } from 'react-native'
import { IconProps } from '@tabler/icons-react-native'

import { s } from './styles'

type Props = {
  title: string
  description: string
  icon: React.ComponentType<IconProps>
}
export function Step({ title, description, icon: Icon }: Props) {
  return (
    <View style={s.container}>
      {Icon && <Icon />}
      <View style={s.details}>
        <Text style={s.title}>{title}</Text>
        <Text style={s.description}>{description}</Text>
      </View>
    </View>
  )
}