import { Pagination } from 'antd'

import './Footer.css'

const Footer = ({ setPage }) => {
  const switchingPage = (page) => {
    setPage(page.toString())
  }

  return <Pagination align="center" total={50} onChange={switchingPage} />
}

export default Footer
