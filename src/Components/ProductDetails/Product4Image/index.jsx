import { Col, Row } from 'reactstrap';
import WrapperComponent from '@/Components/Common/WrapperComponent';
import ProductDetailImage from '../Common/ProductDetailImage';
import ProductDetailsTab from '../Common/ProductDetailsTab';
import MainProductContent from '../Common/MainProductContent';
import { ASSETS_URL } from '@/Config/Constant';

const Product4Image = ({ productState, setProductState }) => {
  return (
    <WrapperComponent classes={{ sectionClass: 'product-section section-b-space bg-white', row: 'g-4' }}    customCol={true}>
      <Col xl={6}>
        <div className='product-left-box'>
          <Row className='g-sm-4 g-2'>
            {[1,2,3,4]?.map((image, i) => (
              <ProductDetailImage
                imageProps={{ height: 372, width: 372, imageUrl: `${ASSETS_URL}/images/product/product-detail-${image}.png` }}
                key={i}
              />
            ))}
          </Row>
        </div>
      </Col>
      <MainProductContent productState={productState} setProductState={setProductState} />
      <ProductDetailsTab productState={productState} />
    </WrapperComponent>
  );
};

export default Product4Image;
