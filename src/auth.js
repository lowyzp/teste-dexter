import Parse from 'parse';

export const isAuth = () => Parse.User.current() != null;
