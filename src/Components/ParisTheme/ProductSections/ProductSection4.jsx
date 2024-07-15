import { useMemo } from 'react';
import CustomHeading from '@/Components/Common/CustomHeading';
import ProductBox2 from '@/Components/Common/ProductBox/ProductBox2/ProductBox2';
import ProductBox1 from '@/Components/Common/ProductBox/ProductBox1/ProductBox1';
import { productSliderOption } from '../../../../Data/SliderSettingsData';
import { productData } from '@/Config/Constant';
import Slider from 'react-slick';
import { Col, Row } from 'reactstrap';

const ProductSection4 = ({ dataAPI, ProductData, svgUrl, noCustomClass, customClass }) => {
  // const filterProduct = useMemo(() => {
  //   return ProductData?.filter((el) => dataAPI?.product_ids?.includes(el.id));
  // }, [ProductData, dataAPI]);
  return (
    <div className='my-4'>
      <CustomHeading title={"Today's Top"} svgUrl={svgUrl} subTitle={dataAPI?.description} customClass={customClass ? customClass : noCustomClass ? '' : 'section-t-space title'} />
      <div className='product-border overflow-hidden product-slider-bolder border-0'>
        <div className='product-box-slider no-arrow'>
          <Slider {...productSliderOption}>
            {productData.map((elem) => (
              <div key={elem.id}>
                <Row  className='m-0'>
                  <Col xs='12' className='px-0'>
                    <ProductBox1 imgUrl={elem?.productThumbnail} productDetail={{ ...elem }} />
                  </Col>
                </Row>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductSection4;
