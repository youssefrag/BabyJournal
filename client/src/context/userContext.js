import { createContext, useState } from "react";

import Cookies from 'js-cookie';

const defaultState = {
  userName: '',
  parentId: Cookies.get('user_id'),
  setUserName: () => {},
  setParentId: () => {},
}

export const UserContext = createContext(
  defaultState
);

export const UserContextProvider = (props) => {
  const [userContextUserName, setUserContextUserName] = useState(defaultState.userName)
  const [userContextParentId, setUserContextParentId] = useState(defaultState.parentId)

  const setUserName = (userName) => {
    setUserContextUserName(userName)
  }

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
    <UserContext.Provider value={{ userContextUserName, setUserName, userContextParentId, setParentId, isUserLoggedIn: props.isUserLoggedIn, setUserLoggedIn: props.setUserLoggedIn }}>
      {props.children}
    </UserContext.Provider>
  )
}