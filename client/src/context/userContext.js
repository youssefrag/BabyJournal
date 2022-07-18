import { createContext, useState } from "react";

import Cookies from 'js-cookie';

const defaultState = {
  parentId: Cookies.get('user_id'),
  setParentId: () => {},
}

export const UserContext = createContext(
  defaultState
);

export const UserContextProvider = (props) => {
  const [userContextParentId, setUserContextParentId] = useState(defaultState.parentId)

  const setParentId = (id) => {
    if (id) {
      Cookies.set('user_id', id);
    }
    else {
      Cookies.remove('user_id');
      Cookies.remove('babyjournal');
      Cookies.remove('babyjournal.sig');
    }
    setUserContextParentId(id)
  }

  return(
    <UserContext.Provider value={{ userContextParentId, setParentId, isUserLoggedIn: props.isUserLoggedIn, setUserLoggedIn: props.setUserLoggedIn }}>
      {props.children}
    </UserContext.Provider>
  )
}