/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Button, Form, Input, Spin } from 'antd'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const { TextArea } = Input
const cx = classNames.bind(styles)

type ReplyProps = {
  $type?: String
  onComment?: (data: any) => void
  parentId?: any
  loading: boolean
}

const Reply = ({
  $type = 'comment',
  onComment,
  parentId,
  loading,
}: ReplyProps) => {
  const [form] = Form.useForm()

  const onSubmit = async (data: any) => {
    if ($type === 'reply') {
      data.parentId = parentId
    }

    onComment && (await onComment(data))
    form.setFieldsValue({ content: '' })
  }

  return (
    <Spin spinning={loading}>
      <div className={cx('write')}>
        <h4>Type you {$type} here</h4>
        <Form onFinish={onSubmit} form={form}>
          <Form.Item
            name="userName"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Type your name" />
          </Form.Item>
          <Form.Item
            name="content"
            rules={[
              {
                required: true,
                message: 'Please write your comment before submit!',
              },
            ]}
          >
            <TextArea rows={4} placeholder="Add comment" />
          </Form.Item>
          <Form.Item>
            <Button
              className="button-main"
              type="primary"
              htmlType="submit"
              style={{ background: '#558657' }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Spin>
  )
}

export default Reply
