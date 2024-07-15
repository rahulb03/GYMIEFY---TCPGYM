import { useMemo } from 'react';
import { Col, Row } from 'reactstrap';
import Slider from 'react-slick';
import CustomHeading from '@/Components/Common/CustomHeading';
import { productSliderOption } from '../../../../Data/SliderSettingsData';
import ProductBox1 from '@/Components/Common/ProductBox/ProductBox1/ProductBox1';

import { productData } from '@/Config/Constant';

const ProductSection1 = ({ dataAPI, ProductData, svgUrl, noCustomClass = false, customClass, classObj, customSliderOption = productSliderOption, isHeadingVisible = true }) => {
  const filterProduct = useMemo(() => {
    return ProductData?.filter((el) => (dataAPI?.product_ids ? dataAPI?.product_ids?.includes(el.id) : el));
  }, [ProductData, dataAPI]);
  console.log('filterProduct :: ', filterProduct)
  return (
    <>
      {isHeadingVisible ? (
        <CustomHeading title={'Best Selling'} svgUrl={svgUrl} subTitle={dataAPI?.description} customClass={customClass ? customClass : noCustomClass ? '' : 'section-t-space title'} />
      ) : null}
      <div className={`${classObj?.productStyle} overflow-hidden`}>
        <div className='no-arrow'>
          <Slider {...customSliderOption}>
            {productData?.map((elem) => (
              <div key={elem?.id}>
                <Row className='m-0'>
                  <Col xs={12} className='px-0'>
                    <ProductBox1 imgUrl={elem?.productThumbnail} productDetail={{ ...elem }} classObj={classObj} />
                  </Col>
                </Row>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ProductSection1;
