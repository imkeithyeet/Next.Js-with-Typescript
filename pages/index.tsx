import type  { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Container, Navbar, Text, Button} from '@nextui-org/react'

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
      {/* 3 Displaying Product Cards */}
    </Container>
    )

}

export default  Home
