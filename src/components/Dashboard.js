import { Button, Grid, TextField, Box } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAccountInfo,
  getSeacrchData,
} from '../redux/action/userPots.action';
import Card from './Card';
import Dialog from './Dialog';
const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState(null);
  const [query, setQuery] = useState('');
  useEffect(() => {
    getAccountInfo();
  }, []);
  const searchingText = useSelector((state) => state.userPosts.posts);
  const dispatch = useDispatch();
  // console.log('searchingText ', searchingText);

  const handleDelete = (id) => {
    console.log('splice ', searchingText.splice(id, 1));

    dispatch({
      type: 'DELETE_POST',
      payload: id,
    });
  };
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
  const handleSearchButton = () => {
    getSeacrchData(query);
    setQuery('');
  };
  const enterKey = (e) => {
    if (e.keyCode === 13 && query) handleSearchButton();
  };
  const cardHandler = (val) => {
    setPost(val);
  };
  return (
    <>
      <Dialog open={open} setOpen={setOpen} post={post} />
      <Container sx={{ mb: 3 }}>
        <h1>Welcome to dashboard</h1>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            type="search"
            label="Search"
            fullWidth
            sx={{ mb: 4, mt: 2 }}
            value={query}
            onChange={(e) => handleSearch(e)}
            onKeyDown={(e) => enterKey(e)}
          />
          <Button
            size="large"
            variant="contained"
            color="primary"
            sx={{ ml: 2, mb: 2 }}
            onClick={handleSearchButton}
          >
            Search
          </Button>
        </Box>
        <Grid container spacing={5}>
          {!searchingText && <h1>Loading...</h1>}
          {searchingText?.map((data, i) => (
            <Grid item sm={4} xs={12} md={3} lg={3} key={data.id}>
              <Card
                key={data.id}
                posts={data}
                handleDelete={handleDelete}
                index={i}
                onCardClick={(val) => cardHandler(val)}
                setOpen={setOpen}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
