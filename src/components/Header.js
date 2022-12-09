import { buildQueries } from "@testing-library/react"
import PropTypes  from "prop-types"
import Button from "./Button"
const Header = ({ title, toggleForm, showAdd }) => {
    const onClick = (e) =>{
        console.log(e)
    }
  return (
    <header className="header">
      <h1> {title} </h1>
      <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Closed' : 'Add'} onClick={toggleForm}/>
    </header>
  )
}
Header.defaultProps = {
    title: 'Task Trackers',
}
// inline CSS JSX
// const HeadingStyle = {
//     color: 'red',
//     backgroundColor: 'blue',
// }

export default Header
