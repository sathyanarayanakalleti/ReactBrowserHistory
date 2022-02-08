/* eslint-disable no-unused-vars */
import {Component} from 'react'
import History from '../HistoryList'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class BrowserHistory extends Component {
  state = {searchInput: '', finalHistory: initialHistoryList}

  onSearchValue = event => {
    const searchvalue = event.target.value
    this.setState({searchInput: searchvalue.toLowerCase()})
  }

  deleteTitle = unique => {
    const {finalHistory} = this.state
    const filtereddata = finalHistory.filter(eachItem => eachItem.id !== unique)
    this.setState({finalHistory: filtereddata})
  }

  render() {
    const {searchInput, finalHistory, data} = this.state
    const searchResults = finalHistory.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput),
    )

    return (
      <div>
        <div className="barcontainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo-img"
          />
          <div className="input-container1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-img"
            />
            <input
              type="search"
              className="input-box"
              onChange={this.onSearchValue}
              value={searchInput}
              placeholder="Search History"
            />
          </div>
        </div>
        <div className="unord-container">
          <ul>
            {searchResults.map(eachItem => (
              <History
                historyList={eachItem}
                key={eachItem.id}
                deleteTitle={this.deleteTitle}
              />
            ))}
          </ul>
          {searchResults.length === 0 && (
            <p className="his-page">There is no history to show</p>
          )}
        </div>
      </div>
    )
  }
}

export default BrowserHistory
