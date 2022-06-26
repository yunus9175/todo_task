import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
// import { makeStyles } from '@mui/styles';
const EditePosts = () => {
  let { id } = useParams();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((res) => {
        setValue('title', res.title);
        setValue('body', res.body);
      });
  }, [setValue, id]);
  // debugger;

  const onSubmit = (data) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        title: data.title,
        body: data.body,
        userId: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    window.location.replace('/');
  };

  console.log(watch('title', 'body')); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        width: '100%',
        height: '70vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
      }}
    >
      {/* register your input into the hook by invoking the "register" function */}
      <label htmlFor="title">Title</label>
      <input
        {...register('title', { required: true })}
        placeholder="Enter Title"
        style={{ width: '30%', padding: '15px 10px', borderRadius: 20 }}
      />
      {/* include validation with required or other standard HTML validation rules */}
      <label htmlFor="title">Body</label>
      <input
        {...register('body', { required: true })}
        placeholder="Enter Body"
        style={{ width: '30%', padding: '15px 10px', borderRadius: 20 }}
      />
      {/* errors will return when field validation fails  */}
      {errors.title && <span>This field is required</span>}
      {errors.body && <span>This field is required</span>}
      <Button
        variant="contained"
        type="submit"
        sx={{ mt: 1, borderRadius: 20 }}
      >
        Edite
      </Button>
    </form>
  );
};
export default EditePosts;
