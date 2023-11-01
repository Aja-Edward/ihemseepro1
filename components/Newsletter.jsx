'use client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect, useRef } from 'react'
import { Col, Row, Alert } from 'react-bootstrap'

const Newsletter = () => {
  const [email, setEmail] = useState('')

  return (
    <Col lg={12}>
      <div className='newsletter-bx'>
        <Row>
          <Col md={6} xl={7}>
            <form>
              <div className='new-email-bx'>
                <input
                  value={email}
                  type='email'
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Email Address'
                />
                <button type='submit'>Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  )
}

export default Newsletter
