import { useCallback, useState, createContext, useEffect } from "react";
import mm from '../../service/metamask';
import { contractAddr } from '../../collection/data';

const MetaMaskContext = createContext();

const registerMetamaskEvents = ({connectCallback, accountChangeCallback}) => {
    const eth = mm.getEthereum();
    eth.on('connect', connectCallback);
    eth.on('accountsChanged', accountChangeCallback)
}

const MetaMaskProvider = ({children}) => {
    const [error, setError] = useState(null);

    // Registers events on init
    const connectCallback = (info) => {
        console.log(info);
    };

    const accountChangeCallback = (info) => {
        console.log(info);
    }; 
    
    useEffect(
        () => registerMetamaskEvents({connectCallback, accountChangeCallback}), 
        []
    );

    const requestAddress = useCallback(async () => {
        try {
            const accounts = await mm.requestAccounts();
            return [true, accounts];
        } catch (error) {
            if (error.code === mm.ERROR_CODE.USER) {
                setError(mm.ERRORS.CONNECTION);
            }
            return [false, []];
        }
    }, []);

    const sendTx = useCallback(async (value) => {
        const [success, accounts] = await requestAddress();
        if(!success) return;
        
        const tx = {
            to: contractAddr,
            from: accounts[0],
            value: value
        };

        try {
            await mm.sendTransaction(tx);
        } catch (error) {
            if (error.code === mm.ERROR_CODE.USER) {
                setError(mm.ERRORS.TRANSACTION);
            }
        }
    }, []);

    const value = {error, requestAddress, sendTx};

    return (
        <MetaMaskContext.Provider value={value}>
        {
            children
        }
        </MetaMaskContext.Provider>
    )
};

export {
    MetaMaskProvider,
    MetaMaskContext
}



// TODO: Metamask state machine
// 1) Purchase click
// 2) Accounts retrieved:
// 3) YES -> to tx construction
// 4) NO  -> error status == 4001
//  4a) YES -> Prompt user to connect
//  4b) NO -> Hard core error, shut down...