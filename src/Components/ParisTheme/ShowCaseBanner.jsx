import { Col, Row } from 'reactstrap';
import OfferBanner from './OfferBanner';
import { ASSETS_URL, bannerData } from '@/Config/Constant';

const ShowCaseBanner = ({ dataAPI }) => {
  return (
    <div className='section-t-space section-b-space'>
      <Row className='g-md-4 g-3 ratio_30'>
      {
        bannerData?.map((row) => {
           return (
            <Col md={6}>
              <OfferBanner classes={{ customHoverClass: 'banner-contain hover-effect b-left' }} imgUrl={ASSETS_URL + row} ratioImage={true} />
            </Col>
           )
        })
      }
      </Row>
    </div>
  );
};

export default ShowCaseBanner;
