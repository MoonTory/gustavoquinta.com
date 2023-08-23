import React from "react";
import { ThemeActions, ThemeReducerAction, ThemeState } from "./types";

export const initialState: ThemeState = {
  dark: true,
};

export const themeReducer: React.Reducer<ThemeState, ThemeReducerAction> = (
  state,
  action
) => {
  switch (action.type) {
    case ThemeActions.TOGGLE:
      return {
        ...state,
        dark: !state.dark,
      };

    default:
      return state;
  }
};
