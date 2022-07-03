import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
const Root = styled('div')(({ theme }) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
    btn: {},
  },
}));

//animation of modal
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ open, setOpen, post }) {
  const [data, setData] = useState({ title: '', description: '' });
  const dispatch = useDispatch();
  useEffect(() => {
    //set title description first time
    if (post?.description || post?.alt_description) {
      setData((prevState) => {
        return {
          ...prevState,
          description: post?.alt_description || '',
          title: post?.description || '',
        };
      });
    }
  }, [post]);
  //   console.log(JSON.stringify(post?.id));

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setData({ ...data, [name]: value });
  };

  //update functionality
  const handleClick = () => {
    dispatch({
      type: 'UPDATE_POST',
      payload: {
        id: post.id,
        title: data.title,
        description: data.description,
      },
    });
    setOpen({ title: '', description: '' });
    setOpen(false);
  };
  return (
    //Dialog box component
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            className={Root.btn}
            onClick={handleClose}
            style={{
              outline: 'none',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              marginRight: 5,
              marginTop: 5,
              height: 30,
              width: 30,
              fontWeight: 'bolder',
            }}
          >
            X
          </button>
        </div>
        <DialogTitle>
          <Typography>Update Data</Typography>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              sx={{ mb: 1, mt: 1 }}
              value={data.title}
              name="title"
              //   label="Enter title"
              fullWidth
              placeholder="Enter title"
              onChange={handleChange}
            />
            <TextField
              sx={{ mb: 1, mt: 1 }}
              onChange={handleChange}
              value={data.description}
              name="description"
              //   label="Enter description"
              fullWidth
              placeholder="Enter description"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
