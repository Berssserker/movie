import { Pagination } from 'antd'

import './Footer.css'

const Footer = ({ updatePage }) => {
  const switchingPage = (page) => {
    updatePage(page)
  }

  return <Pagination align="center" total={50} onChange={switchingPage} />
}

export default Footer
