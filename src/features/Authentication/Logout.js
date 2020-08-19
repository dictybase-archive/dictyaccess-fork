// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { logoutUser } from "app/actions/authActions"

type Props = {
  /** Logs the user out */
  logoutUser: Function,
}

/**
 * Allows the user to logout
 */

class Logout extends Component<Props> {
  componentWillMount() {
    this.props.logoutUser()
  }

  render() {
    return <Redirect to="/" />
  }
}

export default connect(null, { logoutUser })(Logout)