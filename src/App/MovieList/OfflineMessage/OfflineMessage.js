import { Alert } from 'antd'

const OfflineMessage = () => {
  return <Alert message="Ooops!" description="There is no internet connection." type="error" showIcon />
}

export default OfflineMessage
