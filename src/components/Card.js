import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function BasicCard({ posts, handleDelete }) {
  let navigate = useNavigate();
  //   let { title, body, id } = posts;

  return (
    <Card sx={{ minWidth: 275, minHeight: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Title: {posts?.title}
        </Typography>
        {/* <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography> */}
        <Typography variant="body2">
          Body: {posts?.body}
          <br />
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          size="small"
          variant="outlined"
          onClick={() => navigate(`/cards/${posts?.id}`)}
        >
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
          onClick={() => handleDelete(`${posts?.id}`)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
