import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
    sideList: {
    width: 'auto',
  },
};

class SliderBar extends React.Component {

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {['Reciepts' , 'Expense' , 'Information'].map((text, index) => (
            <ListItem button key={text}>
             <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );


    return (
      <div>
        <Drawer open={this.prosp.open} onClose={this.props.onClick}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.onClick}
            onKeyDown={this.props.onClick}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

SliderBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SliderBar);
