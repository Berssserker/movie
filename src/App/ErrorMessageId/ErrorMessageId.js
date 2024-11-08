import { Alert } from 'antd'

const ErrorMessageId = () => {
  return <Alert message="Ooops!" description="Failed to create a guest session." type="error" showIcon />
}

export default ErrorMessageId
