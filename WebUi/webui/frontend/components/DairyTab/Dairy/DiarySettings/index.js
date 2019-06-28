import React from 'react'

import {
  SettingsContainer,
  Label,
  ChannelContainer,
  TextInput,
  Select,
  TimeInput
} from './styles.js'

const DiarySettings = props => {
  return (
    <SettingsContainer>
      <Label htmlFor='start'>Start</Label>
      <br />
      <TimeInput
        type='text'
        id='start'
        name='start'
        placeholder='00:00:00:00'
      />
      <Label htmlFor='end'>Stop</Label>
      <br />
      <TimeInput type='text' id='end' name='stop' placeholder='00:00:00:00' />
      <Label htmlFor='programme'>Programme</Label>
      <br />
      <TextInput type='text' id='programme' name='programme' />
      <Label htmlFor='control'>Conrol Point</Label>
      <br />
      <Select name='control' id='control'>
        <option disabled defaultValue>
          {' '}
          -- select an option --{' '}
        </option>
        <option value='HAL Studio'>HAL Studio</option>
        <option value='Les Sports'>Les Sports</option>
        <option value='Other Sports'>Other Sports</option>
        <option value='News'>News</option>
        <option value='Weather'>Weather</option>
      </Select>
      <Label htmlFor='gang'>Gang</Label>
      <br />
      <Select name='gang' id='gang'>
        <option disabled defaultValue>
          {' '}
          -- select an option --{' '}
        </option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </Select>
      <Label htmlFor='channels'>Channels</Label>
      <br />
      <ChannelContainer id='channels'>
        <ul>
          <li>Moncton</li>
          <li>Quebec</li>
          <li>Rimaouski</li>
          <li>Ottawa</li>
          <li>Toronto</li>
          <li>Trois-Rivieres</li>
          <li>Sherebrooke</li>
          <li>Sogueny</li>
        </ul>
      </ChannelContainer>
    </SettingsContainer>
  )
}

export default DiarySettings