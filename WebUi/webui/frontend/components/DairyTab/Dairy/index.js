import React from 'react'

import DiaryScreen from './DiaryScreen'
import DiarySettings from './DiarySettings'
import { Title, Container } from './styles'

const Diary = ({ channelGangs, time }) => {
  const items = channelGangs
  return (
    <div>
      <Title>Diary</Title>
      <Container>
        {typeof items === 'object' && <DiaryScreen items={items} time={time} />}
        <DiarySettings />
      </Container>
    </div>
  )
}

export default Diary