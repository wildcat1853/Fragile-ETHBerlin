const METHODS = {
  REQUEST_ACCOUNTS: 'eth_requestAccounts',
  SEND_TX: 'eth_sendTransaction'
};

const ERRORS = {
  CONNECTION: 0,
  TRANSACTION: 1
};

const ERROR_CODE = {
  USER: 4001,
  ARGS: -32602
};

const isAvailable = () => {
  if (typeof window.ethereum === 'undefined') {
    return false;
  }

  return window.ethereum.isMetamask;
};

const getEthereum = () => window.ethereum;

const requestAccounts = () =>
  getEthereum().request({ method: METHODS.REQUEST_ACCOUNTS });

const sendTransaction = (tx) =>
  getEthereum().request({ method: METHODS.SEND_TX, params: [tx] });

const getSelectedAddress = () => getEthereum().selectedAddress;

export default {
  isAvailable: isAvailable,
  getEthereum: getEthereum,
  requestAccounts: requestAccounts,
  sendTransaction: sendTransaction,
  getSelectedAddress: getSelectedAddress,
  ERRORS: ERRORS,
  ERROR_CODE: ERROR_CODE
};
