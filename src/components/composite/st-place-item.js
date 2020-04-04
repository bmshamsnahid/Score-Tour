import React, { useState } from 'react';
import StCheckbox from '../basic/st-list-item-checkbox';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  itemContainerStyle: {
    maxWidth: '500px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px',
  },
  nameStyle: {
    textAlign: 'initial',
    paddingTop: '3px',
  },
  scoreStyle: {
    paddingTop: '3px',
  },
  checkboxStyle: {
    '& .MuiCheckbox-root': {
      padding: '1px 9px 0px 5px',
    },
  },
  scoreCheckboxContainerStyle: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const StPlaceItem = ({ place, onChangePlaceCheckbox }) => {
  const classes = useStyles();
  const [isChecked, setIsChecked] = useState(false);

  const onClickPaper = (event) => {
    const newCheckStatus = !isChecked;
    setIsChecked(newCheckStatus);
    onChangePlaceCheckbox(newCheckStatus, parseInt(place.score));
  };

  const { name, score } = place;

  return (
    <Paper
      elevation={2}
      button
      className={classes.itemContainerStyle}
      onClick={onClickPaper}
    >
      <div className={classes.nameStyle}>{name}</div>
      <div className={classes.scoreCheckboxContainerStyle}>
        <div className={classes.scoreStyle}>{score}</div>
        <div className={classes.checkboxStyle}>
          <StCheckbox checked={isChecked} />
        </div>
      </div>
    </Paper>
  );
};

export default StPlaceItem;