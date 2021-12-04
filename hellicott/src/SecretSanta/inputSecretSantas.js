import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputSecretSantas() {
    const [name, setName] = React.useState('Hellicott');
    const [email, setEmail] = React.useState('example@hellicott.co.uk');

    const handleChange = (event) => {
    setName(event.target.value);
    setEmail(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-name"
        label="Name"
        value={name}
        onChange={handleChange}
      />
      <TextField
        id="outlined-email"
        label="Email"
        value={email}
        onChange={handleChange}
      />
    </Box>
  );
}