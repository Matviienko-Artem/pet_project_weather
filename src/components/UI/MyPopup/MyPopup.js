import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../redux/actions';

const MyPopup = () => {
  const openPopup = useSelector(state => state.global.openPopup);
  const popupSeverity = useSelector(state => state.global.popupSeverity);
  const popupText = useSelector(state => state.global.popupText);
  const dispatch = useDispatch();

  const isClosePopup = () => dispatch(actions.isClosePopup());

  const handleClosePopup = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    isClosePopup();
  };

  return (
    <Snackbar
      open={openPopup}
      autoHideDuration={6000}
      onClose={handleClosePopup}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <MuiAlert onClose={handleClosePopup} severity={popupSeverity} variant="filled" sx={{ width: '100%' }}>
        {popupText}
      </MuiAlert>
    </Snackbar>
  );
};

export default MyPopup;
