

// import { useState, useContext, useMemo } from 'react';
// import axios from 'axios';
// import { Form, Formik } from 'formik';
// import { Col, Input, Label } from 'reactstrap';
// import { useTranslation } from '@/app/i18n/client';
// import I18NextContext from '@/Helper/I18NextContext';
// import { YupObject, emailSchema, nameSchema, passwordSchema, phoneSchema } from '@/Utils/Validation/ValidationSchemas';
// import FormBtn from '@/Components/Common/FormBtn';
// import { toast } from 'react-toastify';
// import { REGISTER_API } from '@/Config/Constant';
// import SimpleInputField from '@/Components/Common/InputFields/SimpleInputField';
// import { AllCountryCode } from '../../../../Data/AllCountryCode';
// import SearchableSelectInput from '@/Components/Common/InputFields/SearchableSelectInput';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { useRouter } from 'next/navigation';

// const RegisterForm = () => {
//   const { i18Lang } = useContext(I18NextContext);
//   const { t } = useTranslation(i18Lang, 'common');
//   const router = useRouter();
//   const [showPassword, setShowPassword] = useState(false);
//   const [agreeToTerms, setAgreeToTerms] = useState(false);

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const initialValues = useMemo(() => ({
//     name: '',
//     email: '',
//     password: '',
//     country_code: '91',
//     phone: '',
//   }), []);

//   const validationSchema = useMemo(() => YupObject({
//     name: nameSchema,
//     email: emailSchema,
//     password: passwordSchema,
//     phone: phoneSchema,
//   }), []);

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={(values, { setSubmitting, resetForm }) => {
//         if (!agreeToTerms) {
//           toast.error(t('Please Agree To Terms and Privacy'));
//           setSubmitting(false);
//           return;
//         }

//         const data = {
//           name: values.name,
//           email: values.email,
//           mobile: values.phone,
//           password: values.password,
//           role: 'GUEST', // Set role to 'GUEST' as default
//         };

//         axios.post(REGISTER_API, data)
//           .then(response => {
//             toast.success(t("SuccessfullyRegistered"));
//             resetForm();
//             router.push(`/${i18Lang}/auth/login`);
//           })
//           .catch(error => {
//             toast.error(t("RegistrationFailed"));
//             console.error('Registration error:', error);
//           })
//           .finally(() => {
//             setSubmitting(false);
//           });
//       }}
//     >
//       {({ values, isSubmitting, handleChange, handleBlur }) => (
//         <Form className='row g-md-4 g-3'>
//           <Col xs='12' className='form-group'>
//             <SimpleInputField
//               nameList={[
//                 {
//                   name: 'name',
//                   type: 'text',
//                   placeholder: t('FullName'),
//                   title: 'name',
//                   label: 'FullName',
//                 },
//               ]}
//               value={values.name}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//           </Col>

//           <Col xs='12' className='form-group'>
//             <SimpleInputField
//               nameList={[
//                 {
//                   name: 'email',
//                   type: 'email',
//                   placeholder: t('EmailAddress'),
//                   title: 'email',
//                   label: 'EmailAddress',
//                 },
//               ]}
//               value={values.email}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//           </Col>

//           <Col xs='12' className='form-group'>
//             <SimpleInputField
//               nameList={[
//                 {
//                   name: 'password',
//                   type: showPassword ? 'text' : 'password',
//                   placeholder: t('Password'),
//                   title: 'password',
//                   label: 'Password',
//                   onClick: toggleShowPassword,
//                   icon: showPassword ? <FaEye /> : <FaEyeSlash />,
//                 },
//               ]}
//               value={values.password}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//           </Col>


          // <Col xs='12' className='form-group'>
          //   <SimpleInputField
          //     nameList={[
          //       {
          //         name: 'phone',
          //         type: 'text',
          //         placeholder: t('EnterPhonenumber'),
          //         title: 'Phone',
          //         label: 'Phone',
          //       },
          //     ]}
          //     value={values.email}
          //     onChange={handleChange}
          //     onBlur={handleBlur}
          //   />
          // </Col>
// {/* 
//           <Col xs='12' className='form-group'>
//             <div className='country-input'>
//               <SearchableSelectInput
//                 nameList={[
//                   {
//                     name: 'country_code',
//                     notitle: 'true',
//                     inputprops: {
//                       name: 'country_code',
//                       id: 'country_code',
//                       options: AllCountryCode,
//                     },
//                   },
//                 ]}
//                 value={values.country_code}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               <SimpleInputField
//                 nameList={[
//                   {
//                     name: 'phone',
//                     type: 'text',
//                     placeholder: t('EnterPhoneNumber'),
//                     colclass: 'country-input-box',
//                     title: 'Phone',
//                     label: 'Phone',
//                   },
//                 ]}
//                 value={values.phone}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//             </div>
//           </Col> */}

//           <Col xs={12}>
//             <div className='forgot-box'>
//               <div className='form-check remember-box'>
//                 <Input
//                   className='checkbox_animated check-box'
//                   type='checkbox'
//                   id='flexCheckDefault'
//                   checked={agreeToTerms}
//                   onChange={() => setAgreeToTerms(!agreeToTerms)}
//                 />
//                 <Label className='form-check-label' htmlFor='flexCheckDefault'>
//                   {t('Iagreewith')}
//                   <span>{t('Terms')}</span> {t('and')} <span>{t('Privacy')}</span>
//                 </Label>
//               </div>
//             </div>
//           </Col>

//           <Col xs={12}>
//             <FormBtn
//               title={t('SignUp')}
//               classes={{ btnClass: 'btn btn-animation w-100' }}
//               disabled={isSubmitting || !agreeToTerms}
//             />
//           </Col>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default RegisterForm;






import { useState, useContext, useMemo } from 'react';
import axios from 'axios';
import { Form, Formik } from 'formik';
import { Col, Input, Label } from 'reactstrap';
import { useTranslation } from '@/app/i18n/client';
import I18NextContext from '@/Helper/I18NextContext';
import { YupObject, addressschema, cityschema, countryschmea, emailSchema, nameSchema, passwordSchema, phoneSchema, pincodeschema, stateschema } from '@/Utils/Validation/ValidationSchemas';
import FormBtn from '@/Components/Common/FormBtn';
import { toast } from 'react-toastify';
import { REGISTER_API } from '@/Config/Constant';
import SimpleInputField from '@/Components/Common/InputFields/SimpleInputField';
import { AllCountryCode } from '../../../../Data/AllCountryCode';
import SearchableSelectInput from '@/Components/Common/InputFields/SearchableSelectInput';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = useMemo(() => ({
    name: '',
    email: '',
    password: '',
    country_code: '91',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
  }), []);

  const validationSchema = useMemo(() => YupObject({
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema,
    phone: phoneSchema,
    // address: addressschema,
    // city: cityschema,
    // state: stateschema,
    // country: countryschmea,
    // pincode: pincodeschema,
  }), []);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(REGISTER_API, {
        name: values.name,
        email: values.email,
        password: values.password,
        mobile: values.phone,
        address: values.address,
        city: values.city,
        state: values.state,
        country: values.country,
        pincode: values.pincode,
      }, {
        headers: {
          'token': 'essentials',
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        toast.success(t('SignupSuccessful'));
        router.push(`/${i18Lang}/auth/login`); // Redirect to login after successful signup
      } else {
        console.error('Error:', response.status, response.data);
        toast.error(t('SignupFailed'));
      }
    } catch (error) {
      console.error('Error:', error.response || error.message || error);
      toast.error(t('SignupFailed'));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, isSubmitting, handleChange, handleBlur }) => (
        <Form className='row g-md-4 g-3'>
          <Col xs='12' className='form-group '>
            <SimpleInputField
              nameList={[
                {
                  name: 'name',
                  type: 'text',
                  placeholder: t('FullName'),
                  title: 'name',
                  label: 'FullName',
                },
              ]}
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Col>

          <Col xs='12' className='form-group'>
            <SimpleInputField
              nameList={[
                {
                  name: 'email',
                  type: 'email',
                  placeholder: t('EmailAddress'),
                  title: 'email',
                  label: 'EmailAddress',
                },
              ]}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Col>

          <Col xs='12' className='form-group'>
            <SimpleInputField
              nameList={[
                {
                  name: 'password',
                  type: showPassword ? 'text' : 'password',
                  placeholder: t('Password'),
                  title: 'password',
                  label: 'Password',
                  onClick: toggleShowPassword,
                  icon: showPassword ? <FaEye /> : <FaEyeSlash />,
                },
              ]}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Col>

          <Col xs='12' className='form-group'>
            <SimpleInputField
              nameList={[
                {
                  name: 'phone',
                  type: 'text',
                  placeholder: t('EnterPhonenumber'),
                  title: 'Phone',
                  label: 'Phone',
                },
              ]}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Col>

          {/* <Col xs='12' className='form-group'>
            <div className='country-input'>
              <SearchableSelectInput
                name='country_code'
                options={AllCountryCode}
                value={values.country_code}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <SimpleInputField
                nameList={[
                  {
                    name: 'phone',
                    type: 'text',
                    placeholder: t('EnterPhoneNumber'),
                    colclass: 'country-input-box',
                    title: 'Phone',
                    label: 'Phone',
                  },
                ]}
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </Col> */}

          <Col xs={12}>
            <div className='forgot-box'>
              <div className='form-check remember-box'>
                <Input
                  className='checkbox_animated check-box'
                  type='checkbox'
                  id='flexCheckDefault'
                  checked={agreeToTerms}
                  onChange={() => setAgreeToTerms(!agreeToTerms)}
                />
                <Label className='form-check-label' htmlFor='flexCheckDefault'>
                  {t('Iagreewith')}
                  <span>{t('Terms')}</span> {t('and')} <span>{t('Privacy')}</span>
                </Label>
              </div>
            </div>
          </Col>

          <Col xs={12}>
            <FormBtn
              title={t('SignUp')}
              classes={{ btnClass: 'btn btn-animation w-100' }}
              disabled={isSubmitting || !agreeToTerms}
            />
          </Col>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;



