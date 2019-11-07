import React from 'react';
import Container from './common/Container';

import UseButtonState from './useState/UseButtonState';
import UseInputState from './useState/UseInputState';
import UseMemo from './memo/UseMemo';
import MemoHeader from './memo/MemoHeader';
import UseInputCallback from './useCallback/UseInputCallback';
import UseInputCallback2 from './useCallback/UseInputCallback2';
import UseFetchEffect from './useEffect/UseFetchEffect';
import UseResizeEffect from './useEffect/UseResizeEffect';
import UseDocumentTitleComponent from './useEffect/UseDocumentTitleComponent';
import UseDocumentTitleEffect from './useEffect/UseDocumentTitleEffect';
import UseResizeComponent from './useEffect/UseResizeComponent';
import UseThemeContext from './useContext/UseThemeContext';
import UseFormContext from './useContext/UseFormContext';

const App = () => (
    <Container>
        {/*<UseButtonState />*/}

        {/*<UseInputState />*/}

        <UseMemo />

        {/*<MemoHeader />*/}

        {/*<UseInputCallback />*/}

        {/*<UseInputCallback2 />*/}

        {/*<UseDocumentTitleComponent/>*/}

        {/*<UseDocumentTitleEffect/>*/}

        {/*<UseFetchEffect/>*/}

        {/*<UseResizeComponent/>*/}

        {/*<UseResizeEffect/>*/}

        {/*<UseThemeContext/>*/}

        <UseFormContext/>
    </Container>
);

export default App;
