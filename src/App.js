import React from 'react';
import Container from './common/Container';

import UseStateExl1 from './useState/UseStateExl1';
import UseStateExl2 from './useState/UseStateExl2';

const App = () => (
    <Container>
        {/* Simple useState */}
        <UseStateExl1 />
        {/*input useState*/}
        <UseStateExl2 />
    </Container>
);

export default App;
