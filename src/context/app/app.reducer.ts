import React from 'react';
import { AppActions, AppReducerAction, AppState } from './types';

export const initialState: AppState = {
  section: 'work'
};

export const themeReducer: React.Reducer<AppState, AppReducerAction> = (state, action) => {
  switch (action.type) {
    case AppActions.SET_SECTION:
      return {
        ...state,
        section: action.payload
      };

    default:
      return state;
  }
};
