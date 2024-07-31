import { RiBankLine, RiCoinLine, RiFileTextLine, RiHomeLine, RiNotificationLine, RiWalletLine, RiMapPinLine } from 'react-icons/ri';

export const sidebarMenu = [
  {
    title: 'Dashboard',
    icon: <RiHomeLine />,
    id: 'dashboard',
    path: '/account/dashboard',
  },
  {
    title: 'Edit Profile ',
    icon: <RiNotificationLine />,
    id: 'updateprofile',
    path: '/account/updateprofile',
    // badge: <span className='notification-count'>1</span>,
  },
  {
    title: 'ChangePassword',
    icon: <RiBankLine />,
    id: 'bank-details',
    path: '/account/profile',
  },
  // {
  //   title: 'MyWallet',
  //   icon: <RiWalletLine />,
  //   id: 'wallet',
  //   path: '/account/wallet',
  // },
  // {
  //   title: 'EarningPoints',
  //   icon: <RiCoinLine />,
  //   id: 'point',
  //   path: '/account/point',
  // },
  // {
  //   title: 'MyOrders',
  //   icon: <RiFileTextLine />,
  //   id: 'order',
  //   path: '/account/order',
  // },
  // {
  //   title: 'RefundHistory',
  //   icon: <RiMapPinLine />,
  //   id: 'refund',
  //   path: '/account/refund',
  // },
  // {
  //   title: 'SavedAddress',
  //   icon: <RiMapPinLine />,
  //   id: 'address',
  //   path: '/account/addresses',
  // },
];
