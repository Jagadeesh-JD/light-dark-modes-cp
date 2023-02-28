import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  firstNameClick = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  lastNameClick = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="pink-container">
        <h1 className="header">Show/Hide</h1>
        <div className="shied-container">
          <div className="button-container">
            <button
              className="button"
              type="button"
              onClick={this.firstNameClick}
            >
              Show/Hide Firstname
            </button>
            {firstName && <p className="name">Joe</p>}
          </div>
          <div className="button-container">
            <button
              className="button"
              type="button"
              onClick={this.lastNameClick}
            >
              Show/Hide Lastname
            </button>
            {lastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
