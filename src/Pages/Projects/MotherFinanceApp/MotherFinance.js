import React from 'react';

import FinanceApp from './FinanceApp/FinanceApp';
import { Provider } from './FinanceApp/context/context';
// import { SpeechProvider } from '@speechly/react-client';

const MotherFinance = () => {
    return (
        <div>
            {/* <SpeechProvider appId="7c4aee08-1073-4a32-b862-ebe1850e0732" language="en-US"></SpeechProvider>, */}
                <Provider>
                    <FinanceApp></FinanceApp>
                </Provider>
            
        </div>
    );
};

export default MotherFinance;