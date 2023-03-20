import PropTypes from 'prop-types';
import { Backdrop, CircularProgress } from '@mui/material';

export const Loader = ({ open }) => (
  <>
    <Backdrop
      sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  </>
);

Loader.propTypes = {
  open: PropTypes.bool.isRequired,
};
