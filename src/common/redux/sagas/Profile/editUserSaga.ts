import { call, put, takeLatest } from 'redux-saga/effects';
import { getMe } from '../../../services/authService';
import { editProfile } from '../../../services/usersService';
import {
  EditProfileAction,
  editProfileErrorAction,
  editProfileSuccessAction,
  EDIT_PROFILE_LOAD,
} from '../../actions/Profile/EditProfileActions';
import { setProfileAction } from '../../actions/Profile/ProfileActions';

export function* handleEditUser(action: EditProfileAction) {
  try {
    yield call(editProfile(action.payload));
    const responseMe = yield call(getMe());
    yield put(setProfileAction(responseMe.data.user));
    yield put(editProfileSuccessAction());
  } catch (err) {
    yield put(editProfileErrorAction(err.response.data));
  }
}

export default function* editUserWatcher() {
  yield takeLatest(EDIT_PROFILE_LOAD, handleEditUser);
}
