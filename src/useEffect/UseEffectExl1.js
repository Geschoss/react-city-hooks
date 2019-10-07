import React, { useEffect, useState, useCallback } from 'react';
import Island from '../common/Island';
import Text from '../common/Text';
import Input from '../common/Input';

const toJson = (res) => res.json();
const toArray = (res) => Array.isArray(res) ? res : [res];

const UseEffectExl1 = () => {
    const [index, setIndex] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/posts/${index}`)
            .then(toJson)
            .then(toArray)
            .then(setPosts)

    }, []);

    const handleChange = useCallback(setIndex);

    return (
        <Island title="Simple useEffect">
            <Text text={index}/>
            <Input onChange={handleChange} />
            <ul>
                {posts.map(({ id, title }) => <li>{`${id} ${title}`}</li>)}
            </ul>
        </Island>
    );
};

export default UseEffectExl1;
