import { StateProps } from '../../interfaces/Props/StateProps';

export const getSignUpSelector = (state: StateProps) => state.signUpReducer;
export const getSignInSelector = (state: StateProps) => state.signInReducer;
