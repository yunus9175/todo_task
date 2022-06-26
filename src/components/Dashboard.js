import { Button, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAccountInfo } from '../redux/action/userPots.action';
import Card from './Card';
const Dashboard = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  useEffect(() => {
    getAccountInfo();
  }, []);
  const searchingText = useSelector((state) => state.userPosts.posts);
  const dispatch = useDispatch();
  // console.log('searchingText ', searchingText);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log('created data', json));
    setTitle('');
    setBody('');
  };
  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });
    // debugger;
    let deletedArr = [...searchingText];
    // deletedArr = deletedArr.filter((item) => !item.id === id);
    // let findind = deletedArr.findIndex((val) => val.id === id);
    console.log(
      'deletedArr ',
      deletedArr.filter((f) => f.id !== id)
    );
    dispatch({ type: 'STORE_POSTS', payload: deletedArr });
  };
  return (
    <>
      <h1>Welcome to dashboard</h1>
      <Container>
        <Grid
          item
          sm={3}
          sx={{
            margin: 'auto',
            border: '1px solid gray',
            borderRadius: 12,
            padding: 5,
            mb: 3,
          }}
        >
          <Typography variant="h4" component="h2" p={2}>
            Create new post:
          </Typography>
          <div>
            <form
              style={{ display: 'flex', flexDirection: 'column' }}
              onSubmit={handleSubmit}
            >
              <label>Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter Title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                  // width: '30%',
                  padding: '10px 5px',
                  borderRadius: 20,
                  marginTop: 5,
                }}
              />
              <label>Body</label>
              <input
                type="text"
                name="body"
                id="body"
                placeholder="Enter Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                style={{
                  // width: '30%',
                  padding: '10px 5px',
                  borderRadius: 20,
                  marginTop: 5,
                }}
              />
              <Button
                variant="contained"
                type="submit"
                sx={{ mt: 1, borderRadius: 20 }}
              >
                Create Post
              </Button>
            </form>
          </div>
        </Grid>
        <Grid container spacing={5}>
          {searchingText &&
            searchingText.map((data) => (
              <Grid item sm={3} key={data.id}>
                <Card posts={data} handleDelete={handleDelete} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
