import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthenticated } from '../hooks/useAuthenticated';
import { API } from '../lib/api';
import { AUTH } from '../lib/auth';

import { TextField, Button } from '@mui/material';
import { Container } from '@mui/system';

export default function Login() {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState({ email: false, password: false });
  const [isLoggedIn] = useAuthenticated();

  if (isLoggedIn) {
    navigate('/');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    API.POST(API.ENDPOINTS.login, formFields)
      .then(({ data }) => {
        AUTH.setToken(data.token);
        console.log(data);
        navigate('/');
      })
      .catch((e) => {
        console.log(e);
        if (e.response.data.message === 'Unauthorized, invalid password') {
          setError({ ...error, password: true });
        } else {
          setError({ email: true, password: true });
        }
      });
  };

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  return (
    <Container
      maxWidth='lg'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 500
      }}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            size='small'
            name='email'
            id='email'
            type='email'
            label='Email'
            required={true}
            value={formFields.email}
            onChange={handleChange}
            error={error.email}
            sx={{ mb: 2 }}
          />
          <TextField
            size='small'
            name='password'
            id='password'
            type='password'
            label='Password'
            required={true}
            value={formFields.password}
            onChange={handleChange}
            error={error.password}
            sx={{ mb: 2 }}
          />
        </div>
        <Button type='submit' sx={{ color: '#3B3D40' }}>
          Login
        </Button>
      </form>
    </Container>
  );
}
