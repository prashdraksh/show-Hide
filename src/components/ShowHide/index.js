// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isfirstnameclicked: false,
    issecondnameclicked: false,
  }

  onfirst = () => {
    this.setState(prevState => ({
      isfirstnameclicked: !prevState.isfirstnameclicked,
    }))
  }

  onsecond = () => {
    this.setState(prevState => ({
      issecondnameclicked: !prevState.issecondnameclicked,
    }))
  }

  render() {
    const {isfirstnameclicked, issecondnameclicked} = this.state
    const firstPersonName = isfirstnameclicked ? 'Joe' : ''
    const secondPersonName = issecondnameclicked ? 'Jonas' : ''
    const classname1 = isfirstnameclicked ? 'firstName' : ''
    const classname2 = issecondnameclicked ? 'lastName' : ''
    return (
      <div className="bg-container">
        <div>
          <h1>Show/Hide</h1>
          <div className="namescontainer">
            <div>
              <button type="button" onClick={this.onfirst}>
                Show/Hide Firstname
              </button>
              <div className={classname1}>
                <p>{firstPersonName}</p>
              </div>
            </div>
            <div>
              <button type="button" onClick={this.onsecond}>
                Show/Hide Lastname
              </button>
              <div className={classname2}>
                <p>{secondPersonName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
