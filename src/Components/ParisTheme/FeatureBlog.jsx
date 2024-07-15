import React, { useContext, useMemo } from 'react';
import Slider from 'react-slick';
import RatioImage from '@/Utils/RatioImage';
import Link from 'next/link';
import { dateFormate } from '@/Utils/CustomFunctions/DateFormate';
import I18NextContext from '@/Helper/I18NextContext';
import { useTranslation } from '@/app/i18n/client';
import BlogContext from '@/Helper/BlogContext';
import { ASSETS_URL, blogData } from '@/Config/Constant';

const FeatureBlog = ({ classes = {}, dataAPI }) => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');

  const { blogState } = useContext(BlogContext);
  const filterBlogs = useMemo(() => {
    if (dataAPI) {
      return blogState?.filter((el) => dataAPI?.blog_ids.includes(el.id));
    } else {
      return blogState;
    }
  }, [blogState, dataAPI]);
  return (
    <>
      <div className={classes?.sliderClass ? classes?.sliderClass : ''}>
        <Slider {...classes?.sliderOption}>
          {blogData?.map((elem, index) => {
            console.log('thumbnail :: ', elem?.blogThumbnail)
            return (
            <div key={index}>
              <div className={`blog-box ${elem?.is_sticky == 1 ? 'sticky-blog-box' : ''} ${classes?.ratioClass ? classes?.ratioClass : ''}`}>
                {elem?.is_featured ? (
                  <div className='blog-label-tag'>
                    <span>{t('Featured')}</span>
                  </div>
                ) : null}
                <div className='blog-box-image'>
                  <Link href={`/blogs/${elem?.slug}`} className='blog-image'>
                    <RatioImage src={ASSETS_URL + elem?.blogThumbnail} className='bg-img' alt='blog' height={classes?.height} width={classes?.width}/>
                  </Link>
                </div>

                <Link href={`/blogs/${elem?.slug}`} className='blog-detail'>
                  <h6>{dateFormate(elem?.blogCreatedAt)}</h6>
                  <h5>{elem?.blogTitle}</h5>
                </Link>
              </div>
            </div>
          )}
          )}
        </Slider>
      </div>
    </>
  );
};

export default FeatureBlog;
