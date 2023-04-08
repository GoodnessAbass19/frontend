import { useAuthContext } from "./UseAuthContext";
import {useWorkoutsContext } from './useWorkoutsContext'

export const UseLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: workoutDispatch } = useWorkoutsContext;

  const logout = () => {
    // remove data
    localStorage.removeItem('user')

    // dispatch
    dispatch({type: 'LOGOUT'})
    workoutDispatch({type: 'SET_WORKOUT', payload: null})
  };

  return {logout}
};
