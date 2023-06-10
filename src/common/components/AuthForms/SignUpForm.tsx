import React from 'react';
import { useFormik } from 'formik';
import InputField from '../../shared/Input/InputField';
import Icon from '../../shared/Icon/Icon';
import InputPasswordField from '../../shared/Input/InputPasswordField';
import { Button } from '../../shared/Button/Button';
import { AuthFormComponent } from '../../interfaces/Auth/AuthFormComponent';
import { useDispatch } from 'react-redux';
import { signUpLoadAction } from '../../redux/actions/Auth/SignUpActions';
import { signUpSchema } from '../../utils/validation/signUpSchema';
import { SwitchBox } from '../../shared/SwitchBox/SwitchBox';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSignUpSelector } from '../../redux/selectors/authSelector';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillCamera, AiFillDelete } from "react-icons/ai";

import ImageUploader from "react-image-upload";
import "react-image-upload/dist/index.css";
import { checkAge } from '../../services/aiAgeRecognitionService';


const SignUpForm = () => {
  const dispatch = useDispatch();
  const [isToggled, setIsToggled] = useState(false);
  const [expectedAge, setExpectedAge] = useState(undefined);
  const [expectedSex, setExpectedSex] = useState("");
  const switchText = {
    before: 'Employer',
    after: 'Applicant',
  };
  const [isSubmit, setIsSubmit] = useState(false);
  const history = useHistory();
  const { isFetching, isError, errorMessage } = useSelector(getSignUpSelector);
  const processAgeByPhotoAnalysis = async (img: any) => {
    const result = await checkAge(img)
    console.log(result)
    if (result) {
      setExpectedAge(result.detections[0].age)
      setExpectedSex(result.detections[0].gender.F>=0.5?"Female":"Male")
    }
  }
  const onFileRemoved = async () => {
    setExpectedAge(undefined)
    setExpectedSex("")
  }
  useEffect(() => {
    if (isFetching && isSubmit && !isError) {
      history.push('/sign-in');
    }
  }, [isSubmit, isFetching, isError, errorMessage, history]);
  const initialValues: AuthFormComponent = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
  };
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues,
    validateOnChange: false,
    validateOnBlur: false,
    enableReinitialize: true,
    validationSchema: signUpSchema,
    onSubmit(values: AuthFormComponent) {
      dispatch(
        signUpLoadAction({
          ...values,
          role: isToggled ? switchText.before : switchText.after,
          age: expectedAge,
          sex: expectedSex
        }),
      );
      setIsSubmit(true);
    },
  });
  return (
    <>
      <form onSubmit={handleSubmit}>
      <h5 style={{  marginBottom: "10px" }} 
>Set your photo for additional analytics</h5>
        <ImageUploader
          style={{ height: 200, width: 200, background: "rgb(0 182 255)", marginBottom: "10px" }} 
          deleteIcon={<AiFillDelete />}
          uploadIcon={<AiFillCamera />}
          onFileAdded={processAgeByPhotoAnalysis} 
          onFileRemoved={onFileRemoved}
        />
        {expectedAge && <> 
        <h5 style={{  marginBottom: "10px" }}>Your expected age by photo provided is : {expectedAge} years </h5>
        </>
        }
        {expectedSex && <> 
        <h5 style={{  marginBottom: "10px" }}>Your expected sex by photo provided is : {expectedSex} </h5>
        </>
        }
        <InputField
          type="text"
          placeholder="Enter an email"
          name="email"
          onChange={handleChange}
          value={values.email}
          errors={errors.email}
        >
          <Icon iconName="icon-mail" />
        </InputField>
        <InputField
          type="text"
          placeholder="First name"
          name="firstName"
          onChange={handleChange}
          value={values.firstName}
          errors={errors.firstName}
        ></InputField>
        <InputField
          type="text"
          placeholder="Last name"
          name="lastName"
          onChange={handleChange}
          value={values.lastName}
          errors={errors.lastName}
        ></InputField>
        <div className="auth__inner-info">
          <InputPasswordField
            type="password"
            placeholder="Enter a password"
            name="password"
            onChange={handleChange}
            value={values.password}
            errors={errors.password}
          />
          <InputPasswordField
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            onChange={handleChange}
            value={values.confirmPassword}
            errors={errors.confirmPassword}
          />
          <SwitchBox
            isToggled={isToggled}
            setIsToggled={setIsToggled}
            switch={{ before: 'Applicant', after: 'Employer' }}
          />
        </div>
        <div className="auth__inner-buttons">
          <Button type="submit">Sign up</Button>
          <span className="auth__inner-buttons--request">
            or just <Link to="/sign-in">Sign in</Link>
          </span>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
