import React, { Component } from 'react'
import * as styles from './style.module.scss'
import Diary from './Diary'

class DiaryTabView extends Component {
  componentDidMount () {
    console.group('props', this.props)
    this.props.loadItems()
    this.props.updateTime()
  }

  render () {
    return (
      <div>
        <div className={styles.DiaryContainer} />
        <Diary {...this.props} />
      </div>
    )
  }
}

export default DiaryTabView