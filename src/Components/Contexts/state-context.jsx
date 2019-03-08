import { createContext } from 'react';

const DefaultState = {
    isLogged: localStorage.getItem('user') ? true : false,
    updateUser() {},
    ...JSON.parse(localStorage.getItem('user'))
}

const { Provider: StateProvider, Consumer: StateConsumer } = createContext(DefaultState);

export {
    DefaultState,
    StateProvider,
    StateConsumer
}