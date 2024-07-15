import { useContext } from 'react';
import I18NextContext from '@/Helper/I18NextContext';
import { useTranslation } from '@/app/i18n/client';
import ProductBox1Rating from '@/Components/Common/ProductBox/ProductBox1/ProductBox1Rating';
import CustomerOrderCount from '../Common/CustomerOrderCount';
import SettingContext from '@/Helper/SettingContext';

const ProductDetails = ({ productState }) => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');
  const { convertCurrency } = useContext(SettingContext);
  return (
    <>
      <CustomerOrderCount productState={productState} />
      <h2 className='name'>GYM24 EQUIPMENTS Bench Press Exercises Home Gym Set of 1 (Blackyellow 01)</h2>
      <div className='price-rating'>
        <h3 className='theme-color price'>
          {convertCurrency(14000)}
          <del className='text-content'>{convertCurrency(17500)}</del>
          <span className='offer-top'>
              20% {t('Off')}
            </span>
        </h3>
        <div className='product-rating custom-rate'>
          <ProductBox1Rating totalRating={productState?.selectedVariation?.rating_count ?? productState?.product?.rating_count} />
          <span className='review'>
            {productState?.selectedVariation?.reviews_count || productState?.product?.reviews_count || 0} {t('Review')}
          </span>
        </div>
      </div>
      <div className='product-contain'>
        <p>8in1 bench Comes with 300 kg weight capacity with multiple postions. This Bench is Very Strong and Comfortable comes with 300 kg weight capacity and its very easy to install, it is ideal for personal use for Bench Press (Incline,Decline, Flat), leg Curl / Extn, Preacher Curl and Squats also.it is cunstructed from isi mark heavy duty steel pipe, seats thinkness is 50mm.</p>
      </div>
    </>
  );
};

export default ProductDetails;
