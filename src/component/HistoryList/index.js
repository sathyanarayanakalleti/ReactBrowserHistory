import './index.css'

const History = props => {
  const {historyList, deleteTitle} = props

  const {id, timeAccessed, logoUrl, title, domainUrl} = historyList

  const removeItem = () => {
    deleteTitle(id)
  }
  return (
    <li className="list-container">
      <div className="list-con2">
        <p className="para1">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo-img" />
        <p className="para2">{title}</p>
        <p className="para3">{domainUrl}</p>
      </div>
      <button
        className="del-img"
        type="button"
        onClick={removeItem}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default History
