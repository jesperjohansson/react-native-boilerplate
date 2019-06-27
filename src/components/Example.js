import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { TextInput } from 'react-native'
import { updateExampleText } from '../actions/exampleActions'

function Example({ text, setText }) {
  return <TextInput value={text} onChangeText={setText} />
}

Example.propTypes = {
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
}

const mapStateToProps = ({ example }) => ({ text: example.text })
const mapDispatchToProps = dispatch => ({
  setText: text => dispatch(updateExampleText(text)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example)
