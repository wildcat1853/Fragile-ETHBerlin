import * as React from 'react';
import { Box } from '@mui/system';

import { Modal, Button, Typography } from '@mui/material';
import NFTBadge from '../nft-badge/NFTBadge';
import { ThemeProvider } from '@emotion/react';
import mainTheme from '../../themes/main';

const NFTModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ThemeProvider theme={mainTheme}>
        <Box
          id="nft_badge_modal"
          sx={{
            width: '450px',
            minHeight: '400px',
            backgroundColor: 'white',
            outline: 0,
            borderRadius: '40px',
            borderColor: 'white',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: 24,
            pt: 4,
            px: 4,
            pb: 3
          }}
        ></Box>
      </ThemeProvider>
    </Modal>
  );
};

export default NFTModal;
