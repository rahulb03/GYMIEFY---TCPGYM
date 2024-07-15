import { useMemo } from 'react';
import { Col, Row } from 'reactstrap';
import Slider from 'react-slick';
import CustomHeading from '@/Components/Common/CustomHeading';
import ProductBox1 from '@/Components/Common/ProductBox/ProductBox1/ProductBox1';
import { productSliderOption } from '../../../../Data/SliderSettingsData';
import { productData2 } from '@/Config/Constant';

const ProductSection3 = ({ dataAPI, ProductData, svgUrl }) => {
  // const filterProduct = useMemo(() => {
  //   return ProductData.filter((el) => dataAPI?.product_ids?.includes(el.id));
  // }, [ProductData, dataAPI]);
  return (
    <div className='my-4'>
      <CustomHeading title={'always on top'} svgUrl={svgUrl} subTitle={'the which never gonna down'} />
      <div className='product-border overflow-hidden product-slider-bolder border-0'>
        <div className='product-box-slider no-arrow'>
          <Slider {...productSliderOption}>
            {productData2.map((elem) => (
              <div key={elem.id}>
                <Row className='m-0'>
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

export default ProductSection3;
