import React from 'react';
import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';

const Root = styled('div') (({ theme }) => ({
  position: 'fixe',
  bottom: 0,
  xIndex: 200,
  backgroundClor: 'gray',
  padding: '10px 80px',
  color: '#fff',
  width: '100%'
}));

const Container = styled('div') (({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white'
}));

const Paginate = ({ setPage, numberOfPages = 10 }) => {

  const handleChange = (e, value) => {
    setPage(value);
    window.scroll(0, 0);
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Root>
        <Pagination 
          onChange={handleChange}
          style={{ 
            display: 'flex',
            justifyContent: 'center'
          }} 
          variant='outlined' 
          count={100}
         />
      </Root>
    </Container>
  )
}

export default Paginate;