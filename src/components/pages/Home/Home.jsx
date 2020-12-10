import React from 'react'
import Head from '../../commons/Head/Head'
import DefaultLayout from '../../commons/Layouts/DefaultLayout'
import Text from '../../commons/Text/Text'

const Home = () => (
  <>
    <Head title="Home Page" description="Welcome to Home page" />
    <DefaultLayout>
      <Text fontWeigth="200" lineHeight="20px">
        Welcome to Home page
      </Text>
    </DefaultLayout>
  </>
)

export default Home
