import React, {useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useImmer } from 'use-immer';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const initState = {
  editedUser: {},
};

export function UserForm({
  user,
  isOpen,
  onClose,
  onSubmit,
}) {
  debugger;
  const classes = useStyles();
  const [state, setState] = useImmer(initState);
  const onSubmitWrap = useCallback(() => {
    onSubmit({ editedUser: state.editedUser });
  });
  const onChangeUserName = useCallback((e) => {
    const userName = e.target.value;
    setState((draft) => {
      draft.editedUser.userName = userName;
    });
  }, [state.editedUser]);

  React.useEffect(() => {
    setState((draft) => {
      draft.editedUser = user;
    })
  }, [user]);

  return (
    <div>
      <Dialog open={isOpen} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Редактирование</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="userName"
            label="ФИО"
            type="text"
            fullWidth
            value={state.editedUser.userName}
            onChange={onChangeUserName}
          />
          <br/>

        </DialogContent>
        <DialogActions>
          <Button onClick={onSubmitWrap} color="primary">
            Сохранить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
