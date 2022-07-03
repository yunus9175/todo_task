import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
function BasicCard({ posts, handleDelete, index, onCardClick, setOpen }) {
  //short text function
  const shortText = (val, range) => {
    return val.length < range ? val : val.substring(0, range) + '...';
  };
  const handleClick = (i) => {
    onCardClick(posts);
    setOpen(true);
  };
  return (
    <Card
      sx={{
        minWidth: 275,
        minHeight: 275,
        position: 'relative',
        objectFit: 'cover',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        '&:hover': { boxShadow: ' 0 8px 16px 0 rgba(0,0,0,0.2)' },
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Box
          component="img"
          src={posts?.urls?.small}
          alt={posts?.description || 'No info'}
          sx={{
            height: 150,
            width: '100%',
            padding: 0,
            margin: 0,
            objectFit: 'cover',
          }}
        />
        <Box sx={{ p: 1 }}>
          <Typography
            sx={{ fontSize: 14 }}
            variant="title"
            color="text.secondary"
            gutterBottom
          >
            Title:{' '}
            {posts?.description
              ? shortText(posts?.description, 30)
              : 'No Title'}
          </Typography>

          <Typography variant="body2">
            Description:{' '}
            {posts?.alt_description
              ? shortText(posts?.alt_description, 55)
              : 'No Description'}
            <br />
          </Typography>
        </Box>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'absolute',
          bottom: 0,
        }}
      >
        <Button size="small" variant="outlined" onClick={handleClick}>
          Edite
        </Button>
        <Button
          size="small"
          variant="outlined"
          // color="secondary"
          sx={{
            color: 'red',
            borderColor: 'red',
            '&:hover': { borderColor: 'red' },
          }}
          onClick={() => handleDelete(`${index}`)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
export default React.memo(BasicCard);
