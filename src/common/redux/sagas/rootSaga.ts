import { all } from 'redux-saga/effects';
import profileWatcher from './Profile/profileSaga';
import signInWatcher from './Auth/signInSaga';
import signUpWatcher from './Auth/signUpSaga';
import editUserWatcher from './Profile/editUserSaga';
import currentUserWatcher from './Profile/currentUserSaga';
import usersWatcher from './Profile/getUsersSaga';
import editPhotoUserWatcher from './Profile/editPhotoUserSaga';
import companyWatcher from './Company/companySaga';
import vacancyWatcher from './Vacancies/vacancySaga';

export default function* rootSaga() {
  yield all([
    signUpWatcher(),
    signInWatcher(),
    profileWatcher(),
    currentUserWatcher(),
    editUserWatcher(),
    usersWatcher(),
    editPhotoUserWatcher(),
    companyWatcher(),
    vacancyWatcher(),
  ]);
}
