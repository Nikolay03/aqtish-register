import React from 'react'
import { Box, Center, Text } from '@chakra-ui/react'

import Paragraph from '~/components/Chakra/Paragraph'
import PageWrapper from '~/components/PageWrapper'
import { DetailLayout } from '~/components/Layouts'
import SectionTitlesWrap from '~/components/Titles/SectionTitlesWrap'
import { SectionTitle } from '~/components/Titles'
import HomeSection from '~/Containers/Home/HomeSection'
import { Image } from '~/components/Images'
import ContactHookForm from '~/Containers/Contracts/ContactForm'

function ContactGrid () {
  return (
    <PageWrapper title={'YUMECS'}>
      <DetailLayout>
        <Box
          pos={'relative'}
          pt={8}
          pb={{ base: 8, sm: 16 }}
        >
          <Image
            pos={'absolute'}
            left={'0px'}
            bottom={{ base: '-60px', lg: '-120px' }}
            alt={'man'}
            h={{ base: 'calc(740px / 2)', lg: '740px' }}
            w={{ base: 'calc(480px / 2)', lg: '480px' }}
            src={'/assets/stone.png'}
          />
          <HomeSection>
            <Center>
              <Box maxW={'480px'}>
                <SectionTitlesWrap alignItems={'center'} mb={{ base: 8, sm: 16 }}>
                  <Paragraph lineHeight={'none'} mb={3} align={'center'}>
                  Contact us
                  </Paragraph>
                  <SectionTitle lineHeight={'none'} mb={6} align={'center'}>
                  Get in touch
                  </SectionTitle>
                  <Text align={'center'} maxW={'700px'} color={'primary.200'} fontSize={{ md: 'md', lg: 'xl' }}>
                  We’d love to hear from you. Please fill out this form.
                  </Text>
                </SectionTitlesWrap>
                <ContactHookForm />
              </Box>
            </Center>
          </HomeSection>
        </Box>
      </DetailLayout>
    </PageWrapper>
  )
}

ContactGrid.propTypes = {
}

export default ContactGrid
