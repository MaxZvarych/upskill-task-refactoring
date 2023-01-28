import { StateProps } from '../../../interfaces/Props/StateProps';

export const getProfileSelector = (state: StateProps) => state.profileReducer;
export const getEditProfileSelector = (state: StateProps) =>
  state.editUserReducer;
