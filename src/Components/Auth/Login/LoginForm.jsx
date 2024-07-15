

import React, { useContext, useState, useMemo } from 'react';
import { Formik, Form } from 'formik';
import Link from 'next/link';
import { Col, Input, Label } from 'reactstrap';
import FormBtn from '@/Components/Common/FormBtn';
import SimpleInputField from '@/Components/Common/InputFields/SimpleInputField';
import useHandleLogin, { LogInSchema } from '@/Utils/Hooks/Auth/useLogin';
import I18NextContext from '@/Helper/I18NextContext';
import { useTranslation } from '@/app/i18n/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginForm = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');
  const { mutate: handleLogin } = useHandleLogin();
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Memoize initial values
  const initialValues = useMemo(() => ({
    email: '',
    password: ''
  }), []);

  // Memoize input fields
  const inputFields = useMemo(() => ([
    { 
      name: 'email', 
      placeholder: t('EmailAddress'), 
      title: 'Email', 
      label: 'Email Address' 
    },
    { 
      name: 'password', 
      placeholder: t('EnterPassword'), 
      type: showPassword ? 'text' : 'password',
      title: 'Password', 
      label: 'Password',
      onClick: toggleShowPassword,
      icon: showPassword ? <FaEye /> : <FaEyeSlash /> 
    },
  ]), [t, showPassword]);

  const handleSubmit = (values, { setSubmitting, setErrors }) => {
    handleLogin(values, {
      onError: (error) => {
        setErrors({ submit: error.response?.data?.message || 'An error occurred' });
        setSubmitting(false);
      },
      onSuccess: () => {
        setSubmitting(false);
      },
    });
  };

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        validationSchema={LogInSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors }) => (
          <Form className='row g-4'>
            <SimpleInputField
              nameList={inputFields}
            />

            <Col xs={12}>
              <div className='forgot-box'>
                <div className='form-check remember-box'>
                  <Input className='checkbox_animated check-box' type='checkbox' id='flexCheckDefault' />
                  <Label className='form-check-label' htmlFor='flexCheckDefault'>
                    {t('Rememberme')}
                  </Label>
                </div>
                <Link href={`/${i18Lang}/auth/forgot-password`} className='forgot-password'>
                  {t('ForgotPassword')}?
                </Link>
              </div>
            </Col>
            {errors.submit && <div className='alert alert-danger'>{errors.submit}</div>}
            <FormBtn title={t('LogIn')} classes={{ btnClass: 'btn btn-animation w-100' }} disabled={isSubmitting} />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
