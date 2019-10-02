import React from 'react';
import Container from './common/Container';

import UseStateExl1 from './useState/UseStateExl1';
import UseStateExl2 from './useState/UseStateExl2';
import UseCallbackExl1 from './useCallback/useCallbackExl1';
import MemoExl1 from './memo/MemoExl1';
import MemoExl2 from './memo/MemoExl2';

const App = () => (
    <Container>
        {/* Simple useState */}
        {/*<UseStateExl1 />*/}

        {/*input useState*/}
        {/*<UseStateExl2 />*/}

        {/* memo */}
        {/*<MemoExl1 />*/}

        {/* memo 2*/}
        {/*<MemoExl2 />*/}

        {/*input useCallback*/}
        <UseCallbackExl1 />
    </Container>
);

export default App;
