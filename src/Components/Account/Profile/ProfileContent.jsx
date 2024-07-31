// import CustomHeading from '@/Components/Common/CustomHeading';
// import Image from 'next/image';
// import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
// import dashboardProfile from '../../../../public/assets/images/inner-page/dashboard-profile.png';
// import { LeafSVG } from '@/Components/Common/CommonSVG';
// import { useTranslation } from '@/app/i18n/client';
// import { useContext } from 'react';
// import I18NextContext from '@/Helper/I18NextContext';
// import Btn from '@/Elements/Buttons/Btn';
// import { CHANGE_PASSWORD , headers  } from '@/Config/Constant';

// const ProfileContent = () => {
//   const { i18Lang } = useContext(I18NextContext);
//   const { t } = useTranslation(i18Lang, 'common');


//   return (
//     <div className='dashboard-profile'>
//       <CustomHeading title={'MyProfile'} svgUrl={<LeafSVG className='icon-width bg-gray' />} svgClass='bg-gray' />
//       <div className='dashboard-bg-box'>
//         <Row>
//           <Col xxl={7}>
//             <div className='dashboard-title mb-3'>
//               <h3>{t('ProfileAbout')}</h3>
//             </div>
//             <Form>
//               <FormGroup floating>
//                 <Input id='exampleEmail' name='email' placeholder={t('EnterEmail')} type='email' />
//                 <Label htmlFor='exampleEmail'>{t('Email')}</Label>
//               </FormGroup>
//               <FormGroup floating>
//                 <Input id='examplePassword' name='password' placeholder={t('EnterPassword')} type='password' />
//                 <Label htmlFor='examplePassword'>{t('Password')}</Label>
//               </FormGroup>
//             </Form>

//             <div className='dashboard-title mb-3'>
//               <h3>{t('ChangePassword')}</h3>
//             </div>
//             <Form>
//               <FormGroup floating>
//                 <Input id='currentPassword' name='currentPassword' placeholder={t('EnterEmail')} type='password' />
//                 <Label htmlFor='currentPassword'>{t('CurrentPassword')}</Label>
//               </FormGroup>
//               <FormGroup floating>
//                 <Input id='newPassword' name='newPassword' placeholder={t('EnterNewPassword')} type='password' />
//                 <Label htmlFor='newPassword'>{t('NewPassword')}</Label>
//               </FormGroup>
            

//               <Btn className="btn bg-theme ms-auto text-white mt-4" type="submit" title="Save" />
//             </Form>
//           </Col>

//           <Col xxl={5}>
//             <div className='profile-image'>
//               <Image src={dashboardProfile} className='img-fluid ' alt='dashboard-profile' height={428} width={428} />
//             </div>
//           </Col>
//         </Row>
//       </div>
//     </div>
//   );
// };

// export default ProfileContent;


// import { useState } from 'react';
// import CustomHeading from '@/Components/Common/CustomHeading';
// import Image from 'next/image';
// import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
// import dashboardProfile from '../../../../public/assets/images/inner-page/dashboard-profile.png';
// import { LeafSVG } from '@/Components/Common/CommonSVG';
// import { useTranslation } from '@/app/i18n/client';
// import { useContext } from 'react';
// import I18NextContext from '@/Helper/I18NextContext';
// import Btn from '@/Elements/Buttons/Btn';
// import axios from 'axios';
// import { CHANGE_PASSWORD, headers } from '@/Config/Constant';
// import { toast, ToastContainer } from 'react-toastify'; // Import react-toastify
// import 'react-toastify/dist/ReactToastify.css'; // Import CSS for react-toastify

// const ProfileContent = () => {
//   const { i18Lang } = useContext(I18NextContext);
//   const { t } = useTranslation(i18Lang, 'common');

//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');

//   const handleChangePassword = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         CHANGE_PASSWORD,
//         {
//           oldPassword: currentPassword,
//           newPassword: newPassword,
//         },
//         headers
//       );

//       if (response.status === 200) {
//         toast.success(t('PasswordChangedSuccessfully'));
//         setCurrentPassword('');
//         setNewPassword('');
//       } else {
//         toast.error(t('PasswordChangeFailed'));
//       }
//     } catch (error) {
//       console.error('Error changing password:', error.response || error.message);
//       toast.error(t('PasswordChangeFailed'));
//     }
//   };

//   return (
//     <div className='dashboard-profile'>
//       <CustomHeading title={'MyProfile'} svgUrl={<LeafSVG className='icon-width bg-gray' />} svgClass='bg-gray' />
//       <div className='dashboard-bg-box'>
//         <Row>
//           <Col xxl={7}>
//             <div className='dashboard-title mb-3'>
//               <h3>{t('ProfileAbout')}</h3>
//             </div>
//             <Form>
//               <FormGroup floating>
//                 <Input id='exampleEmail' name='email' placeholder={t('EnterEmail')} type='email' />
//                 <Label htmlFor='exampleEmail'>{t('Email')}</Label>
//               </FormGroup>
//               <FormGroup floating>
//                 <Input id='examplePassword' name='password' placeholder={t('EnterPassword')} type='password' />
//                 <Label htmlFor='examplePassword'>{t('Password')}</Label>
//               </FormGroup>
//             </Form>

//             <div className='dashboard-title mb-3'>
//               <h3>{t('ChangePassword')}</h3>
//             </div>
//             <Form onSubmit={handleChangePassword}>
//               <FormGroup floating>
//                 <Input
//                   id='currentPassword'
//                   name='currentPassword'
//                   placeholder={t('EnterCurrentPassword')}
//                   type='password'
//                   value={currentPassword}
//                   onChange={(e) => setCurrentPassword(e.target.value)}
//                 />
//                 <Label htmlFor='currentPassword'>{t('CurrentPassword')}</Label>
//               </FormGroup>
//               <FormGroup floating>
//                 <Input
//                   id='newPassword'
//                   name='newPassword'
//                   placeholder={t('EnterNewPassword')}
//                   type='password'
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                 />
//                 <Label htmlFor='newPassword'>{t('NewPassword')}</Label>
//               </FormGroup>
//               <Btn className="btn bg-theme ms-auto text-white mt-4" type="submit" title={t('Save')} />
//             </Form>
//           </Col>

//           <Col xxl={5}>
//             <div className='profile-image'>
//               <Image src={dashboardProfile} className='img-fluid ' alt='dashboard-profile' height={428} width={428} />
//             </div>
//           </Col>
//         </Row>
//       </div>
//       <ToastContainer /> {/* Add ToastContainer here */}
//     </div>
//   );
// };

// export default ProfileContent;


// import { useState, useContext } from 'react';
// import CustomHeading from '@/Components/Common/CustomHeading';
// import Image from 'next/image';
// import { Col, Form, FormGroup, Input, Label, Row, InputGroup, InputGroupText } from 'reactstrap';
// import dashboardProfile from '../../../../public/assets/images/inner-page/dashboard-profile.png';
// import { LeafSVG } from '@/Components/Common/CommonSVG';
// import { useTranslation } from '@/app/i18n/client';
// import I18NextContext from '@/Helper/I18NextContext';
// import Btn from '@/Elements/Buttons/Btn';
// import axios from 'axios';
// import { CHANGE_PASSWORD, headers } from '@/Config/Constant';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';

// const ProfileContent = () => {
//   const { i18Lang } = useContext(I18NextContext);
//   const { t } = useTranslation(i18Lang, 'common');

//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [showCurrentPassword, setShowCurrentPassword] = useState(false);
//   const [showNewPassword, setShowNewPassword] = useState(false);

//   const toggleCurrentPasswordVisibility = () => {
//     setShowCurrentPassword(!showCurrentPassword);
//   };

//   const toggleNewPasswordVisibility = () => {
//     setShowNewPassword(!showNewPassword);
//   };

//   const handleChangePassword = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         CHANGE_PASSWORD,
//         {
//           oldPassword: currentPassword,
//           newPassword: newPassword,
//         },
//         headers
//       );

//       if (response.status === 200) {
//         toast.success(t('PasswordChangedSuccessfully'));
//         setCurrentPassword('');
//         setNewPassword('');
//       } else {
//         toast.error(t('PasswordChangeFailed'));
//       }
//     } catch (error) {
//       console.error('Error changing password:', error.response || error.message);
//       toast.error(t('PasswordChangeFailed'));
//     }
//   };

//   return (
//     <div className='dashboard-profile'>
//       <CustomHeading title={'MyProfile'} svgUrl={<LeafSVG className='icon-width bg-gray' />} svgClass='bg-gray' />
//       <div className='dashboard-bg-box'>
//         <Row>
//           <Col xxl={7}>
//             <div className='dashboard-title mb-3'>
//               <h3>{t('ProfileAbout')}</h3>
//             </div>
//             <Form>
//               <FormGroup floating>
//                 <Input id='exampleEmail' name='email' placeholder={t('EnterEmail')} type='email' />
//                 <Label htmlFor='exampleEmail'>{t('Email')}</Label>
//               </FormGroup>
//               <FormGroup floating>
//                 <Input id='examplePassword' name='password' placeholder={t('EnterPassword')} type='password' />
//                 <Label htmlFor='examplePassword'>{t('Password')}</Label>
//               </FormGroup>
//             </Form>

//             <div className='dashboard-title mb-3'>
//               <h3>{t('ChangePassword')}</h3>
//             </div>
//             <Form onSubmit={handleChangePassword}>
//               <FormGroup floating>
               
//                   <Input
//                     id='currentPassword'
//                     name='currentPassword'
//                     placeholder={t('EnterCurrentPassword')}
//                     type={showCurrentPassword ? 'text' : 'password'}
//                     value={currentPassword}
//                     onChange={(e) => setCurrentPassword(e.target.value)}
//                   />
//                   <Label htmlFor='currentPassword'>{t('CurrentPassword')}</Label>
                 
               
//               </FormGroup>
//               <FormGroup floating>
                
//                   <Input
//                     id='newPassword'
//                     name='newPassword'
//                     placeholder={t('EnterNewPassword')}
//                     type={showNewPassword ? 'text' : 'password'}
//                     value={newPassword}
//                     onChange={(e) => setNewPassword(e.target.value)}
//                   />
//                   <Label htmlFor='newPassword'>{t('NewPassword')}</Label>
                
               
//               </FormGroup>
//               <Btn className="btn bg-theme ms-auto text-white mt-4" type="submit" title={t('Save')} />
//             </Form>
//           </Col>

//           <Col xxl={5}>
//             <div className='profile-image'>
//               <Image src={dashboardProfile} className='img-fluid ' alt='dashboard-profile' height={428} width={428} />
//             </div>
//           </Col>
//         </Row>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default ProfileContent;


import { useState, useContext } from 'react';
import CustomHeading from '@/Components/Common/CustomHeading';
import Image from 'next/image';
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import dashboardProfile from '../../../../public/assets/images/inner-page/dashboard-profile.png';
import { LeafSVG } from '@/Components/Common/CommonSVG';
import { useTranslation } from '@/app/i18n/client';
import I18NextContext from '@/Helper/I18NextContext';
import Btn from '@/Elements/Buttons/Btn';
import axios from 'axios';
import { CHANGE_PASSWORD, headers } from '@/Config/Constant';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ProfileContent = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        CHANGE_PASSWORD,
        {
          oldPassword: currentPassword,
          newPassword: newPassword,
        },
        headers
      );

      if (response.status === 200) {
        toast.success(t('PasswordChangedSuccessfully'));
        setCurrentPassword('');
        setNewPassword('');
      } else {
        toast.error(t('PasswordChangeFailed'));
      }
    } catch (error) {
      console.error('Error changing password:', error.response || error.message);
      toast.error(t('PasswordChangeFailed'));
    }
  };

  return (
    <div className='dashboard-profile'>
      <CustomHeading title={'Change Password'} svgUrl={<LeafSVG className='icon-width bg-gray' />} svgClass='bg-gray' />
      <div className='dashboard-bg-box'>
        <Row>
          <Col xxl={7}>
            {/* <div className='dashboard-title mb-3'>
              <h3>{t('ProfileAbout')}</h3>
            </div>
            <Form>
              <FormGroup floating>
                <Input id='exampleEmail' name='email' placeholder={t('EnterEmail')} type='email' />
                <Label htmlFor='exampleEmail'>{t('Email')}</Label>
              </FormGroup>
              <FormGroup floating>
                <Input id='examplePassword' name='password' placeholder={t('EnterPassword')} type='password' />
                <Label htmlFor='examplePassword'>{t('Password')}</Label>
              </FormGroup>
            </Form> */}

            {/* <div className='dashboard-title mb-3'>
              <h3>{t('ChangePassword')}</h3>
            </div> */}
            <Form onSubmit={handleChangePassword}>
              <FormGroup floating className="mt-2">
                <Input
                  id='currentPassword'
                  name='currentPassword'
                  placeholder={t('EnterCurrentPassword')}
                  type={showCurrentPassword ? 'text' : 'password'}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
                <Label htmlFor='currentPassword'>{t('CurrentPassword')}</Label>
                <div
                  onClick={toggleCurrentPasswordVisibility}
                  className="position-absolute end-0 top-50 translate-middle-y me-3"
                  style={{ cursor: 'pointer' }}
                >
                  {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </FormGroup>
              <FormGroup floating className="position-relative">
                <Input
                  id='newPassword'
                  name='newPassword'
                  placeholder={t('EnterNewPassword')}
                  type={showNewPassword ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <Label htmlFor='newPassword'>{t('NewPassword')}</Label>
                <div
                  onClick={toggleNewPasswordVisibility}
                  className="position-absolute end-0 top-50 translate-middle-y me-3"
                  style={{ cursor: 'pointer' }}
                >
                  {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </FormGroup>
              <Btn className="btn bg-theme ms-auto text-white mt-4" type="submit" title={t('Save')} />
            </Form>
          </Col>

          <Col xxl={5}>
            <div className='profile-image'>
              <Image src={dashboardProfile} className='img-fluid ' alt='dashboard-profile' height={428} width={428} />
            </div>
          </Col>
        </Row>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProfileContent;
