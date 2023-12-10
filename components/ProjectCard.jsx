import { Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@components/Valuecard.css'
import Image from 'next/image'

export const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className='proj-imgbx'>
        <Image width={300} height={300} src={imgUrl} alt='our luxury system' />
        <div className='proj-txtx'>
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
