import { ReducerAction } from '~/types';

export enum AppActions {
  SET_SECTION = 'SET_SECTION'
}

export type AppState = {
  section: string;
};

export type AppReducerAction = ReducerAction<any, AppActions>;
