
import { Heading } from '@react-email/heading'
import { Hr } from '@react-email/hr'
import { Html } from '@react-email/html'
import { Text } from '@react-email/text'

const Message = ({ params }) => {
  console.log(params)
  return (
    <Html>
      <Heading as='h1'> Hi dear, my name is {params.name}</Heading>
      <Heading as='h3'> My number is {params.phone}</Heading>
      <Heading as='h3'> My email address is {params.email}</Heading>
      <Text>
        {params.message}
      </Text>
     
      <Hr />
      <Heading as='h3'> Regards</Heading>
      <Text>Powered by Sterling Digitals Ltd.</Text>
    </Html>
  )
}

export default Message
