import { ReducerAction } from "~/types";

export enum ThemeActions {
  TOGGLE = "TOGGLE",
}

export type ThemeState = {
  dark: boolean;
};

export type ThemeReducerAction = ReducerAction<any, ThemeActions>;
