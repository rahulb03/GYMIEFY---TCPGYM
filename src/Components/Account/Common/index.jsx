// import React, { useContext, useState , useEffect} from 'react';
// import Image from 'next/image';
// import AccountContext from '@/Helper/AccountContext';
// import coverImage from '../../../../public/assets/images/inner-page/cover-img.jpg';
// import Avatar from '@/Components/Common/Avatar';
// import { GET_PROFILE , headers } from '@/Config/Constant';
// import  image from '../../../../public/assets/images/about-avatar.png';
// import axios from 'axios';

// const SidebarProfile = () => {
//   const { accountData , setAccountData} = useState();

//   const getProfileDetail = async () => {
//     const response = await axios?.get(GET_PROFILE, headers);
//     // console.log('response :: ', response?.data, response?.config)
//     setAccountData(response.status == 200 ? { ...response.data.data } : {});
//   };

//   useEffect(() => {
//     getProfileDetail();
//   }, []);

//   return (
//     <>
//       <div className='profile-box'>
//         <div className='cover-image'>
//           <Image src={coverImage} className='img-fluid' alt='cover-image' height={150} width={378} />
//         </div>

//         <div className='profile-contain'>
//           <div className='profile-image'>
//             <div className='position-relative'>
//               <div className='user-round'>
//                 {/* <Avatar name={accountData?.name} customImageClass={'update_img'} alt='profile-image' height={108} width={108} /> */}
//                 <Image src={image} alt="alt" width={108} height={108} />
//               </div>
//             </div>
//           </div>

//           <div className='profile-name'>
//             <h3>{accountData?.name}</h3>
//             <h6 className='text-content'>{accountData?.email}</h6>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SidebarProfile;


import React, { useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import AccountContext from '@/Helper/AccountContext';
import coverImage from '../../../../public/assets/images/inner-page/cover-img.jpg';
import Avatar from '@/Components/Common/Avatar';
import { GET_PROFILE, headers } from '@/Config/Constant';
import image from '../../../../public/assets/images/about-avatar.png';
import axios from 'axios';

const SidebarProfile = () => {
  const { accountData, setAccountData } = useContext(AccountContext); // Use useContext instead of useState
  const [profileData, setProfileData] = useState({}); // State for profile data

  const getProfileDetail = async () => {
    try {
      const response = await axios.get(GET_PROFILE,  headers ); // Pass headers correctly
      setProfileData(response.status === 200 ? response.data.data : {});
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };

  useEffect(() => {
    getProfileDetail();
  }, []);

  return (
    <div className='profile-box'>
      <div className='cover-image'>
        <Image src={coverImage} className='img-fluid' alt='cover-image' height={150} width={378} />
      </div>
      <div className='profile-contain'>
        <div className='profile-image'>
          <div className='position-relative'>
            <div className='user-round'>
              {/* <Avatar name={profileData?.name} customImageClass={'update_img'} alt='profile-image' height={108} width={108} /> */}
              <Image src={image} alt="alt" width={108} height={108} />
            </div>
          </div>
        </div>
        <div className='profile-name'>
          <h3>{profileData?.name}</h3>
          <h6 className='text-content'>{profileData?.email}</h6>
        </div>
      </div>
    </div>
  );
};

export default SidebarProfile;
