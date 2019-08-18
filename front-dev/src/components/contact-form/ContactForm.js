import React from 'react';

import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
    boxSizing: 'border-box',
  },
  h2: {
    color: '#3f51b5',
  },
  formWrapper: {
    width: '95%',
    margin: 'auto'
  },
  button: {
    margin: theme.spacing(1),
    textAlign: 'right'
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  buttonBlock: {
    textAlign: 'center'
  }
}));


const ContactForm = props => {
const classes = useStyles();
  return (
    <div className="ContactForm">
      <h2 className={classes.h2} >Contactez-moi!</h2>
      <p>N'hésitez pas à me contacter pour tout type de projet web</p>
      <div className={classes.formWrapper}>
        <form>
          <TextField
            id="outlined-email-input"
            label="Email"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-textarea"
            label="Votre message"
            placeholder="Placeholder"
            multiline
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <div className={classes.buttonBlock}>
          <Button variant="contained" color="primary" className={classes.button}>
            Envoyer
            <Icon className={classes.rightIcon}>send</Icon>
          </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
