

import { useRouter } from 'next/navigation';
import AccountContext from '@/Helper/AccountContext';
import I18NextContext from '@/Helper/I18NextContext';
import { useTranslation } from '@/app/i18n/client';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { Col, Row, Table } from 'reactstrap';
import dashProfileImage from '../../../../public/assets/images/inner-page/dashboard-profile.png';
import EmailPassword from './EmailPassword';
import axios from 'axios';
import { GET_PROFILE, headers, SIGN_OUT, userDetail } from '@/Config/Constant';

const ProfileInformation = () => {
  const router = useRouter();
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');
  const [accountData, setAccountData] = useState();

  const getProfileDetail = async () => {
    const response = await axios?.get(GET_PROFILE, headers);
    console.log('response :: ', response?.data, response?.config)
    setAccountData(response.status == 200 ? { ...response.data.data } : {});
  };

  useEffect(() => {
    getProfileDetail();
  }, []);

 
  return (
    <div className='profile-about dashboard-bg-box'>
      <Row>
        <Col xxl={7}>
          <div className='dashboard-title mb-3 d-flex justify-content-between align-items-center'>
            <h3>{t('ProfileInformation')}</h3>
            
          </div>

          <div className='table-responsive'>
            <Table>
              <tbody>
                <tr>
                  <td>{t('Name')} :</td>
                  <td>{accountData?.name}</td>
                </tr>
                <tr>
                  <td>{t('PhoneNumber')} :</td>
                  <td>
                    {accountData?.mobile}
                    {accountData?.country_code} {accountData?.phone}
                  </td>
                </tr>
                <tr>
                  <td>{t('Address')} :</td>
                  <td>{accountData?.address}</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <div className='dashboard-title mb-3'>
            <h3>{t('LoginDetails')}</h3>
          </div>

          <div className='table-responsive'>
            <Table>
              <tbody>
                <tr>
                  <td>{t('Email')} :</td>
                  <td>{accountData?.email}</td>
                </tr>
                <tr>
                  <td>{t('Password')} :</td>
                  <td>●●●●●●</td>
                </tr>
              </tbody>
            </Table>
          </div>

          {/* <EmailPassword /> */}
        </Col>
        <Col xxl={5}>
          <div className='profile-image'>
            <Image src={dashProfileImage} className='img-fluid' alt='profile-image' height={450} width={450} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileInformation;







