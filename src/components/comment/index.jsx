/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-filename-extension */
import { EditFilled, UserOutlined } from '@ant-design/icons'
import { Avatar, Row } from 'antd'
import classNames from 'classnames/bind'
import { useToggle } from 'ahooks'
import dayjs from 'dayjs'
import Reply from '../reply'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const Comment = ({ onComment, item, loading }) => {
  const [showReply, { toggle: toggleReply }] = useToggle()
  if (!item) {
    return null
  }
  const { content, createdAt, _id, userName } = item

  return (
    <Row align="middle" className={cx('comments')}>
      <div className={cx('comments__wrapper')}>
        <Avatar shape="square" size={50} icon={<UserOutlined />} />
        <div>
          <h4 className={cx('comments__name')}>{userName}</h4>
          <p className={cx('comments__time')}>
            {dayjs(createdAt).format('DD/MM/YYYY hh:mm')}
          </p>
        </div>
      </div>
      <div className={cx('comments__text')}>
        <div>
          <p className={cx('comments__user')}>{content}</p>
          {item?.children &&
            item?.children.length > 0 &&
            item?.children?.map((element) => (
              <div className={cx('comments__admin')} key={element?._id}>
                <div className={cx('avatar')}>
                  <Avatar shape="square" size={50} icon={<UserOutlined />} />
                </div>
                <div>
                  <h4 className={cx('comments__name')}>{element?.userName}</h4>
                  <p className={cx('comments__time')}>
                    {dayjs(element?.createdAt).format('DD/MM/YYYY hh:mm')}
                  </p>
                </div>
                {element?.content}
              </div>
            ))}
        </div>
        <Row
          onClick={toggleReply}
          align="middle"
          justify="end"
          className={cx('comments__reply')}
        >
          <EditFilled />
          <p>reply</p>
        </Row>

        {showReply && (
          <Reply
            $type="reply"
            onComment={onComment}
            parentId={_id}
            loading={loading}
          />
        )}
      </div>
    </Row>
  )
}

export default Comment
