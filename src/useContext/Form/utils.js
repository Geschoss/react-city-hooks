import head from '@tinkoff/utils/array/head';
import toPairs from '@tinkoff/utils/object/toPairs';
import split from '@tinkoff/utils/string/split';
import pathSet from '@tinkoff/utils/object/pathSet';

export const merge = (state, { name, value }) => ({
    ...state,
    [name]: value,
});

export const deepMerge = (state, obj) => {
    const [key, value] = head(toPairs(obj));
    const keyPath = split('.', key);

    return pathSet(keyPath, value, state);
};
