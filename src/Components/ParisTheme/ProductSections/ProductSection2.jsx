import React, { useContext } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import CustomHeading from '@/Components/Common/CustomHeading';
import Avatar from '@/Components/Common/Avatar';
import { placeHolderImage } from '../../../../Data/CommonPath';
import CategoryContext from '@/Helper/CategoryContext';
import { useTranslation } from '@/app/i18n/client';
import I18NextContext from '@/Helper/I18NextContext';

import { ASSETS_URL, categoryData } from '@/Config/Constant';

const ProductSection2 = ({ dataAPI, isHeadingVisible = false, classes = {}, svgUrl }) => {
  const { filterCategory } = useContext(CategoryContext);
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');
  // const categoryData = filterCategory('product');
  return (
    <div className='my-3'>
      {isHeadingVisible ? <CustomHeading customClass={classes?.noCustomClass ? '' : 'section-t-space title'} title={dataAPI?.title} svgUrl={svgUrl} subTitle={dataAPI?.description} /> : ''}

      <div className='category-slider-2 product-wrapper no-arrow'>
        <Slider {...classes?.sliderOption}>
          {categoryData?.map((elem) => (
            <div key={elem?.id}>
              <Link href={`/${i18Lang}/collections?category=sports`} className={`category-box ${classes?.link} category-dark`}>
                <div>
                  <Avatar data={ASSETS_URL + elem?.categoryThumbnail} placeHolder={placeHolderImage} name={elem?.categoryName} />
                  <h5 className='text-capitalize'>{elem?.categoryName}</h5>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSection2;
