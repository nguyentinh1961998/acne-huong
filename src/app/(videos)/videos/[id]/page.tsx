'use client'

import { Col, Row, Spin } from 'antd'
import classNames from 'classnames/bind'
import Image from 'next/image'
import VideoPlayer from 'components/VideoPlay'
import { usePathname } from 'next/navigation'
import { useGetData } from 'hooks/useGetData'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const Video = () => {
  const router = usePathname()
  const id = router.split('/')[2]

  const { data } = useGetData({
    url: `api/items/${id}`,
  })

  console.log(data?.data)

  return (
    <div className={cx('video')}>
      <div className={cx('video__overlay')}>
        <Image
          src={data?.data?.thumbnail?.path}
          alt="abc"
          layout="fill"
          objectFit="cover"
        />
        <div className={cx('video__wrapper', 'container')}>
          <h1 className={cx('video__title')}>{data?.data?.title || 'Title'}</h1>
          <Row
            gutter={[24, 24]}
            align="middle"
            justify="space-between"
            className={cx('video__content')}
          >
            <Col lg={24} xl={12}>
              <Row
                className={cx('video__section')}
                align="middle"
                justify="space-between"
              >
                <Col md={24} xs={24} className={cx('video__thumbnail')}>
                  <Image
                    src={data?.data?.thumbnail?.path}
                    alt={data?.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </Col>

                <Col>
                  <Row
                    className={cx('video__detail')}
                    align="middle"
                    justify="space-between"
                  >
                    <div>
                      {/* <p>Category: {data?.category || '--'}</p> */}
                      {/* <p>Running time: {data?.time || '--'}</p> */}
                      <p>Country: {data?.data?.country || 'Viet Nam'}</p>
                    </div>
                    <p className={cx('video__desc')}>
                      {data?.description || 'Mô tả'}
                    </p>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col lg={24} xl={12} className={cx('video__video')}>
              <VideoPlayer url={data?.video?.path} />
            </Col>
          </Row>
        </div>
      </div>

      <div className={cx('container')}>
        <Row justify="space-between" gutter={[24, 24]}>
          <Col lg={16} sm={24}>
            <h2 className={cx('title-main')}>Comments</h2>
          </Col>

          <Col lg={8} sm={24}>
            <h2 className={cx('title-main')}>Related Videos</h2>
            <Row className={cx('video__relate')} gutter={[16, 16]}>
              abc
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Video
