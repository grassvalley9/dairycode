import React, { Component } from 'react'

class ScheduleTabView extends Component {
  componentDidMount () {
    this.props.fetchServiceInfo()
  }

  render () {
    console.log('props', this.props)
    return (
      <div>
        <div>ServiceInfo: {JSON.stringify(this.props.serviceInfo)}</div>
      </div>
    )
  }
}

export default ScheduleTabView