import * as React from 'react';
import { Box } from '@mui/system';

import { Modal, Button, Typography } from '@mui/material';
import NFTBadge from '../nft-badge/NFTBadge';
import { ThemeProvider } from '@emotion/react';
import mainTheme from '../../themes/main';
import CircularProgress from '@mui/material/CircularProgress';

const NFTModal = ({ open, handleClose, url }) => {
  const [purchaseActive, setPurchaseActive] = React.useState(false);
  // const [purchaseDone, setPurchaseDone] = React.useState(true);

  // const collectCoin = () => {
  //   setPurchaseActive(false);
  // };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ThemeProvider theme={mainTheme}>
        {/* purchaseActive = false, FIRST STEP  */}

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
        >
          {!purchaseActive && (
            <div>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <NFTBadge url={url} />
              </Box>

              <Box sx={{ pt: 4, pb: 4, minHeight: '200px' }}>
                <Typography
                  id="modal-modal-title"
                  variant="h1"
                  component="h2"
                  align="center"
                  sx={{ fontSize: '45px' }}
                >
                  0.02 ETH
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  align="center"
                >
                  By purchasing NFT badge, you`&appos`re donating to the
                  organisation responsible for this campaign
                </Typography>
              </Box>

              <Box sx={{ position: 'relative' }}>
                <Button
                  variant="primary"
                  sx={{ width: '100%' }}
                  onClick={() => setPurchaseActive(true)}
                >
                  Collect badge
                </Button>
              </Box>
            </div>
          )}

          {purchaseActive && (
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pt: 13
                }}
              >
                <CircularProgress
                  color="red"
                  sx={{ width: '100px', height: '100px' }}
                />
              </Box>

              <Typography
                id="modal-modal-description"
                sx={{ mt: 7, mb: 7 }}
                align="center"
              >
                Sign transaction with Metamask to purchase NFT badge
              </Typography>

              <Box sx={{ position: 'relative' }}>
                <Button
                  variant="secondary"
                  sx={{ width: '100%' }}
                  onClick={() => setPurchaseActive(false)}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </ThemeProvider>
    </Modal>
  );
};

export default NFTModal;
