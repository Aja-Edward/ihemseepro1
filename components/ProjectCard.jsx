import { Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className='proj-imgbx'>
        <img src={imgUrl} />
        <div className='proj-txtx'>
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
