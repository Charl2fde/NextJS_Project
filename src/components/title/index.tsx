import { Box, Heading, Text } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function Success(props: { title: string }) {

  const [title, setTitle] = useState<string>(props.title)
  const [lengthTitle, setLengthTitle] = useState(0)
  const routeur = useRouter()

  useEffect(() => {

    setLengthTitle(props.title.length)

  }, [props.title])

  const onChangeInput = (e: any) => {
    setTitle(e.target.value)

    if (e.target.value.length == 0) {
      setTitle(props.title)
    }
  }

  return (
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        {title}
      </Heading>
      <Text color={'gray.500'}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </Text>
      <Input
        placeholder='basic usage'
        onChange={onChangeInput}
      />
      <Button colorScheme='blue' onClick={() =>routeur.push('index')}>Home</Button>
    </Box>
  )
}
