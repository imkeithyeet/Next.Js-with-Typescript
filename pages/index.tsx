import type  { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Container, Navbar, Text, Button, Grid, Col} from '@nextui-org/react'
import InfoCard from '@/components/infoCard'

const Home : NextPage = ()=>{
  return (
    <Container>
      {/* Navbar */}
      <Navbar isCompact variant={"static"}>
        <Navbar.Brand>
          <Text b color="inherit">
            LearnToCode
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="md">
          <Navbar.Link href="#">Learning Platform</Navbar.Link>
          <Navbar.Link href="#">Community</Navbar.Link>
          <Navbar.Link href="#">Contact us</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
        <Navbar.Link href="#">Login</Navbar.Link>
        <Navbar.Item>
          <Button auto flat href='#'>
            Sign Up
          </Button>
        </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      {/* Jumbotron */}
      <Grid.Container justify="center" css={{"height":"500px", "backgroundImage":"url(https://littlevisuals.co/images/canal.jpg)"}}>
        <Grid xs={12} sm={6} alignItems="center">
          <Col css ={{"width": "100%"}}>
            <Text  weight={"bold"} size={70} css={{"textAlign": "center"}}> The Education Platform</Text>
            <Text  weight={"bold"} size={70} css={{"textAlign": "center"}}> Of The Future</Text>
            <Button size="md" shadow color="gradient" css={{"width": "100%", "marginTop": "10px"}}>Join For Free</Button>
          </Col>
        </Grid>
      </Grid.Container>
      {/* 3 Displaying Product Cards */}
      <Grid.Container gap={2}>
        <Grid xs={12} sm={4}> 
          <InfoCard
            label="Course"
            title="Learn Next.js with Keith Codes"
            imageURL='https://i.ytimg.com/vi/5UJA9KZba1E/maxresdefault.jpg'
            studentCount='1,500'
          />
        </Grid>
        <Grid xs={12} sm={4}> 
          <InfoCard
            label="Course"
            title="Learn Node.js with Keith Codes"
            imageURL='https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png'
            studentCount='3,000'
          />
        </Grid>
        <Grid xs={12} sm={4}> 
          <InfoCard
            label="Course"
            title="Learn Typescript and React with Keith Codes"
            imageURL='https://www.freecodecamp.org/news/content/images/2022/10/typescript-cover.jpg'
            studentCount='10,900'
          />
        </Grid>
      </Grid.Container>
    </Container>
    )

}

export default  Home
