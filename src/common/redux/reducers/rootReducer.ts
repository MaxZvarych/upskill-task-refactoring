import { combineReducers } from 'redux';
import { signUpReducer } from './Auth/SignUpReducer';
import { signInReducer } from './Auth/SignInReducer';
import { profileReducer } from './Profile/ProfileReducer';
import { currentUserReducer } from './Profile/CurrentUserReducer';
import { editUserReducer } from './Profile/EditUserReducer';
import { usersReducer } from './Profile/UsersReducer';
import { editPhotoUserReducer } from './Profile/EditPhotoUserReducer';
import { companyReducer } from './Company/CompanyReducer';
import { addCompanyReducer } from './Company/AddCompanyReducer';
import { companiesReducer } from './Company/CompaniesReducer';
import { vacancyReducer } from './Vacancies/VacancyReducer';
import { operateVacancyReducer } from './Vacancies/OperateVacancyReducer';
import { vacanciesReducer } from './Vacancies/VacanciesReducer';
import { followVacanciesReducer } from './Vacancies/FollowVacanciesReducer';

export const rootReducer = combineReducers({
  signUpReducer,
  signInReducer,
  profileReducer,
  currentUserReducer,
  editUserReducer,
  usersReducer,
  editPhotoUserReducer,
  companyReducer,
  addCompanyReducer,
  companiesReducer,
  vacancyReducer,
  operateVacancyReducer,
  vacanciesReducer,
  followVacanciesReducer,
});
