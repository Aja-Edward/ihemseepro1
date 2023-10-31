import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import Newsletter from './Newsletter'

const MailchimpForm = () => {
  const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`

  const CustomForm = ({ status, message, onValidated }) => {
    let emailRef

    const handleSubmit = (e) => {
      e.preventDefault()
      const email = emailRef.value
      if (email && email.indexOf('@') > -1) {
        onValidated({ EMAIL: email })
      }
    }

    return (
      <Newsletter
        status={status}
        message={message}
        onValidated={handleSubmit}
        setEmailRef={(node) => (emailRef = node)}
      />
    )
  }

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  )
}

export default MailchimpForm
