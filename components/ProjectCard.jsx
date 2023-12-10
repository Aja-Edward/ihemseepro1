import { Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'

export const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className='proj-imgbx'>
        <Image
          height={300}
          width={300}
          src={imgUrl}
          alt='our beautiful service'
        />
        <div className='proj-txtx'>
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
