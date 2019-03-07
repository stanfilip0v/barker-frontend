import { createContext } from 'react';

const DefaultState = {
    isLogged: false,
    username: '',
    isAdmin: false,
    userId: '',
    updateUser() {}
}

const { Provider: StateProvider, Consumer: StateConsumer } = createContext(DefaultState);

export {
    DefaultState,
    StateProvider,
    StateConsumer
}