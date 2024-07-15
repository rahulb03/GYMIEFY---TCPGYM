import Link from 'next/link';
import { placeHolderImage } from '../../../Data/CommonPath';
import HandleQuantity from './HandleQuantity';
import Avatar from '../Common/Avatar';
import { useContext } from 'react';
import I18NextContext from '@/Helper/I18NextContext';
import { useTranslation } from '@/app/i18n/client';
import SettingContext from '@/Helper/SettingContext';
import { ASSETS_URL, SITE_NAME } from '@/Config/Constant';

const CartProductDetail = ({ elem }) => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');
  const { convertCurrency } = useContext(SettingContext);
  return (
    <td className='product-detail'>
      <div className='product border-0'>
        <Link href={`/${i18Lang}/product/${elem?.product?.slug}`} className='product-image'>
          <Avatar customImageClass={'img-fluid'} data={ASSETS_URL + (elem?.variation?.variation_image ?? elem?.product?.productThumbnail)} placeHolder={placeHolderImage} name={elem?.product?.productName} />
        </Link>
        <div className='product-detail'>
          <ul>
            <li className='name text-capitalize'>
              <Link href={`/${i18Lang}/product/${elem?.product?.slug}`}>{elem?.variation?.name ?? elem?.product?.productName}</Link>
            </li>

            <li className='text-content'>
              <span className='text-title'>{t('SoldBy')} : </span> {t(SITE_NAME)}
            </li>

            {/* <li className='text-content'>
              <span className='text-title'>{t('Unit')}</span> : {elem?.variation?.unit ?? elem?.product?.unit}
            </li> */}

            {/* <li>
              <h5 className='text-content d-inline-block'>{t('Price')} :</h5>
              <span>{convertCurrency(elem?.product?.productPrice)}</span>
              <span className='text-content'>{convertCurrency(elem?.variation?.price) ?? convertCurrency(elem?.product?.productPrice)}</span>
            </li> */}

            <li>
              <h5 className='saving theme-color'>
                {t('Saving')} : {convertCurrency(Number((elem?.variation?.price ?? elem?.product?.productMrp) - (elem?.variation?.sale_price ?? elem?.product?.productPrice)))}
              </h5>
            </li>

            <HandleQuantity productObj={elem?.product} elem={elem} classes={{ customClass: 'quantity-price-box' }} />

            <li>
              <h5>
                {t('Total')}: ${elem?.sub_total}
              </h5>
            </li>
          </ul>
        </div>
      </div>
    </td>
  );
};

export default CartProductDetail;
