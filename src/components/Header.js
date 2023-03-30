import PropTypes from 'prop-types'
import Button from "./Button"


const Header = () => {
  const onClick = () => {
    console.log('Click')
  }

  return (
    <header className='header'>
        <h1>Task tracker2</h1>
        <Button color='green' text='Add' onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header