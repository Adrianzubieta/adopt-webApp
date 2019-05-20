import React from 'react'
import withStyles from 'react-jss'
import Content from './Content';
import Header from './header/Header';

const styles = theme => ({

})

class Page extends React.Component {

  render() {
    const { classes } = this.props

    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <div className={ classes.content }>
            <Content /> 
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Page)
