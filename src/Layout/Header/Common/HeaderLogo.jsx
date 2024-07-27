'use client';
import React, { useContext, useEffect, useState } from 'react';
import Btn from '@/Elements/Buttons/Btn';
import ThemeOptionContext from '@/Helper/ThemeOptionsContext';
import Avatar from '@/Components/Common/Avatar';
import Link from 'next/link';
import logoImage from '../../../../public/assets/images/logo/1.png';
import { RiMenuLine } from 'react-icons/ri';
import { usePathname } from 'next/navigation';
import I18NextContext from '@/Helper/I18NextContext';
import { useTranslation } from '@/app/i18n/client';
import ParisLogo from '../../../../public/assets/images/logo/1.png';
import TokyoLogo from '../../../../public/assets/images/logo/2.png';
import RomeLogo from '../../../../public/assets/images/logo/3.png';
import MadridLogo from '../../../../public/assets/images/logo/4.png';
import OtherLogo from '../../../../public/assets/images/logo/6.png';
import { DARK_LOGO } from '@/Config/Constant';
import Image from 'next/image';
import gymiefy from '../../../../public/assets/images/Gy2mify.png';
import { RiCloseLine } from 'react-icons/ri';
import MainHeaderMenu from './MainHeaderMenu';

const HeaderLogo = () => {
  
  const [logo, setLogo] = useState('');
  const { themeOption, mobileSideBar, setMobileSideBar } = useContext(ThemeOptionContext);
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');
  const pathName = usePathname();
  useEffect(() => {
    let logo = themeOption?.logo?.header_logo;
    if (pathName == `/${i18Lang}/theme/paris`) {
      logo = { original_url: ParisLogo };
    } else if (pathName == `/${i18Lang}/theme/tokyo`) {
      logo = { original_url: TokyoLogo };
    } else if (pathName == `/${i18Lang}/theme/rome`) {
      logo = { original_url: RomeLogo };
    } else if (pathName == `/${i18Lang}/theme/madrid`) {
      logo = { original_url: MadridLogo };
    } else if (pathName == `/${i18Lang}/theme/berlin` || pathName == `/${i18Lang}/theme/denver`) {
      logo = { original_url: OtherLogo };
    } else {
      logo = themeOption?.logo?.header_logo;
    }
    setLogo(logo);
  }, [pathName, i18Lang, themeOption?.logo?.header_logo]);
  return (
    <>
      <Btn className='navbar-toggler d-xl-none d-inline navbar-menu-button me-2' type='button'>
        <span className='navbar-toggler-icon' onClick={() => setMobileSideBar(!mobileSideBar)}>
          <RiMenuLine />
        </span>
      </Btn>
      <Link href='/' className='web-logo nav-logo'>
        <Image src={gymiefy} alt="alt"  placeHolder={logoImage} name={'Header'} customImageClass={'img-fluid'} height={28} width={162} />
      </Link>

        <div className=''> 
                <div className='main-nav navbar navbar-expand-xl navbar-light navbar-sticky'>
        <div className={`offcanvas offcanvas-collapse order-xl-2 ${mobileSideBar ? 'show' : ''}`} id='primaryMenu'>
          <div className='offcanvas-header navbar-shadow'>
            <h5>{t('Menu')}</h5>
            <Btn className='btn-close lead' type='button' onClick={() => setMobileSideBar(!mobileSideBar)}>
              <RiCloseLine/>
            </Btn>
          </div>
          <div className='offcanvas-body'>
            {/* <MainHeaderMenu /> */}

              
          </div>
        </div>
        {mobileSideBar && <div className={'offcanvas-backdrop fade show'} onClick={() => setMobileSideBar(!mobileSideBar)} />}
      </div>
    </div>
      
    </>
  );
};

export default HeaderLogo;
