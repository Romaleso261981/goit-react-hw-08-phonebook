import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filter/filterSlice';
import { Box, TextField } from '@mui/material';
import { Typography } from '@mui/material';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = evt => {
    const { value } = evt.target;
    dispatch(setFilter(value));
  };

  return (
    <>
      <Box
        sx={{
          '& > :not(style)': { mb: 2, width: '100%' },
          maxWidth: 400,
          minHeight: 150,
          margin: '20px auto',
          borderRadius: 2,
          boxShadow: '0px 0px 15px 1px rgba(143, 144, 139, 0.6)',
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          alignItems: 'center',
          boxSizing: 'border-box',
        }}
      >
        <Typography sx={{ fontSize: 28 }}>Contacts</Typography>
        <TextField
          sx={{
            color: 'rgb(194, 120, 118)',
            display: 'inline-block',
            width: '50%',
          }}
          id="contactFilter"
          label="Filter"
          value={filter}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          fullWidth
        />
      </Box>
    </>
  );
};
export default ContactFilter;
