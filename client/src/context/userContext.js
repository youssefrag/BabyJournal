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
}