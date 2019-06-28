import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './actions'
import DiaryTabView from '../../components/DiaryTab'

const mapStateToProps = state => {
  return {
    time: state.time.get('time'),
    channelGangs: state.channelGangs.get('items')
    time: state.time,
    channelGangs: state.channelGangs.items
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export const DiaryTab = connect(
  mapStateToProps,
  mapDispatchToProps