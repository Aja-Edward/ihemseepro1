'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import MultiCarousel from './MultiCarousel'
import Banner from './banner/Banner'
import { mobile, tablet } from '@/components/responsiveness'

const Contact = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  }

  const [formValues, setFormValues] = useState(initialValues)
  const [touched, setTouched] = useState({})
  const [loading, setLoading] = useState(false)
  const [isClient, setIsClient] = useState(false)

  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [emailError, setEmailError] = useState('')

  const [phoneError, setPhoneError] = useState()
  const [messageError, setMessageError] = useState('')

  const router = useRouter()

  console.log(loading)
  console.log(formValues)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // *******************

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const handleInputBlur = (fieldName) =>
    setTouched((prev) => ({ ...prev, [fieldName]: true }))

  const sendMessage = async () => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formValues),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      if (response.ok) {
        alert('Message sent successfully!')
        router.push('/')
      }
    } catch (error) {
      alert('Cannot send your message as', error)
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await sendMessage(formValues)
    } catch (error) {
      setLoading(false)
      console.error(error.message)
    }
    console.log(e.target)
  }

  return (
    <Container id='contacts'>
      {isClient ? (
        <div>"This is never prerendered"</div>
      ) : (
        <>
          <Banner
            imagesource={'assets/images/contactus2.png'}
            title='Contact Us'
            content='You can reach us via social media, phone call, emial or just by dropping a message in our content form below'
          />
          <Wrapper>
            <ImageContainer>
              <Image
                src={'assets/images/contact-img.svg'}
                alt='the contact image'
              />
            </ImageContainer>
            <FormContainer>
              <FormTitle>Get In Touch</FormTitle>
              <ContactForm onSubmit={onSubmit}>
                <Input
                  type='text'
                  value={formValues.firstName}
                  name='firstName'
                  placeholder='First Name'
                  onChange={handleChange}
                  onBlur={() => handleInputBlur('firstName')}
                  className={
                    touched.firstName && !formValues.firstName
                      ? 'isInvalidInput'
                      : 'isValidInput'
                  }
                />

                <Input
                  type='text'
                  value={formValues.lastName}
                  name='lastName'
                  placeholder='Last Name'
                  onChange={handleChange}
                  onBlur={() => handleInputBlur('lastName')}
                  className={
                    touched.lastName && !formValues.lastName
                      ? 'isInvalidInput'
                      : 'isValidInput'
                  }
                />

                <Input
                  type='email'
                  value={formValues.email}
                  name='email'
                  placeholder='Email Address'
                  onChange={handleChange}
                  onBlur={() => handleInputBlur('email')}
                  className={
                    touched.email && !formValues.email
                      ? 'isInvalidInput'
                      : 'isValidInput'
                  }
                />

                <Input
                  type='text'
                  value={formValues.subject}
                  placeholder='Subject'
                  name='subject'
                  onChange={handleChange}
                  onBlur={() => handleInputBlur('subject')}
                  className={
                    touched.subject && !formValues.subject
                      ? 'isInvalidInput'
                      : 'isValidInput'
                  }
                />

                <PhoneInputContainer>
                  <NumberInput
                    type='number'
                    value={formValues.phone}
                    placeholder='Phone No'
                    name='phone'
                    onChange={handleChange}
                    onBlur={() => handleInputBlur('phone')}
                    className={
                      touched.phone && !formValues.phone
                        ? 'isInvalidInput'
                        : 'isValidInput'
                    }
                  />
                </PhoneInputContainer>

                <TextArea
                  row='8'
                  col='6'
                  value={formValues.message}
                  name='message'
                  placeholder='Message'
                  onChange={handleChange}
                  // onBlur={() => handleInputBlur('message')}
                  className={
                    touched.message && !formValues.message
                      ? 'isInvalidInput'
                      : 'isValidInput'
                  }
                ></TextArea>

                <SubmitButton
                  disabled={
                    !formValues.firstName ||
                    !formValues.lastName ||
                    !formValues.email ||
                    !formValues.subject
                  }
                >
                  {loading ? (
                    <LoadingImage>
                      <ImageLoading
                        src='assets/images/loading.gif'
                        alt='the loading gif'
                      />{' '}
                      Sending...
                    </LoadingImage>
                  ) : (
                    'Send'
                  )}
                </SubmitButton>
              </ContactForm>
            </FormContainer>
          </Wrapper>
          <MultiCarousel />
        </>
      )}
    </Container>
  )
}

export default Contact

const Container = styled.div`
  height: auto;
  background-color: #2e3234;
  width: 100vw;
  justify-content: center;
  padding: 100px 0;
`
const Wrapper = styled.div`
  height: 80%;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  padding: 30px;
  align-items: center;
  ${mobile({ flexDirection: 'column', padding: '3px' })}
  ${tablet({ flexDirection: 'column', padding: '3px' })}
`
const ImageContainer = styled.div`
  width: 50%;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.02;
  }
  ${mobile({ width: '100%' })}
  ${tablet({ width: '100%' })}
`
const Image = styled.img`
  width: 100%;
`
const FormContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${mobile({ width: '100%' })}
  ${tablet({ width: '100%' })}
`
const FormTitle = styled.h2`
  color: #2e3234;
  font-size: 45px;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  line-height: 60px;
  transition: all 1s ease;
  &:hover {
    transform: scale(1.1);
    color: #f9004d;
  }
`
const Location = styled.p`
  color: #ffffff;
  font-weight: 900;
`
const Small = styled.span`
  color: #f9004d;
`
const ContactForm = styled.form`
  display: flex;
  width: 90%;
  flex-direction: column;
  background-color: #2e3234;
  padding: 10px;
  transition: all 0.8s ease-in;
`
const PhoneInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ width: '100%' })}
  ${tablet({ width: '100%' })}
`

const LoadingImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  width: 20px;
  height: 20px;
`
const ImageLoading = styled.img`
  width: 100%;
  height: 100%;
`

const NumberInput = styled.input`
  flex: 1;
  margin: 15px 0px 0px 0px;
  padding: 10px;
  width: 100%;
  background-color: transparent;
  color: white;
  ${mobile({ width: '100%' })}
  ${tablet({ width: '100%' })}
  &:focus {
    outline: none;
    border-bottom: 2px solid #f9004d;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
  }
  :-ms-input-placeholder {
    color: red;
  }
`
const Input = styled.input`
  flex: 1;
  width: 100%;
  margin: 15px 10px 0px 0px;
  padding: 10px;
  background-color: transparent;
  color: white;
  &:focus {
    outline: none;
    border-bottom: 2px solid #f9004d;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
  }
  :-ms-input-placeholder {
    color: red;
  }
`

const TextArea = styled.textarea`
  flex: 1;
  width: 100%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  background-color: transparent;
  color: white;
  &:focus {
    outline: none;
    border-bottom: 2px solid #f9004d;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
  }
  :-ms-input-placeholder {
    color: red;
  }
`
const SubmitButton = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #f9004d;
  color: white;
  font-weight: bold;
  transition: all 1s ease;
  &:hover {
    background-color: #f9004f70;
  }
  ${mobile({ width: '100%' })}
  ${tablet({ width: '100%' })}
`
