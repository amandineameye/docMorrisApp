import { Text } from 'react-native'
import { Screen } from '@repo/ui'
import styled from 'styled-components/native'

const Centered = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const AccountScreen = () => (
  <Screen>
    <Centered>
      <Text>Coming soon...</Text>
    </Centered>
  </Screen>
)
