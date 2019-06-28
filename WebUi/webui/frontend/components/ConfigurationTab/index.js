import React from 'react'
import { GVPanel } from 'grassvalley'
import * as styles from './style.module.scss'

class ConfigurationTabView extends React.Component {
  componentDidMount () {
    console.log('props', this.props)
    this.props.fetchServiceInfo()
  }

  render () {
    return (
      <div>
        <GVPanel title='Ganging Configuration'>
          <div className={styles.ServiceInfoContainer}>
            ServiceInfo: {JSON.stringify(this.props.serviceInfo)}
          </div>