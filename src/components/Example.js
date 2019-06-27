import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'
import { updateExampleText } from '../actions/exampleActions'

const Input = styled.TextInput`
  border: 1px solid blue;
`

function Example({ text, setText }) {
  return <Input value={text} onChangeText={setText} />
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
