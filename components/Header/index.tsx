import React, { useState, useMemo } from 'react'
import { withTranslation, i18n, Link } from '../../i18n';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

import { useRouter } from 'next/router'
import './Header.module.css'

const Header = ({ t }) => {
  const router = useRouter()
  let keyCurrent = 'home'

  // Create Constructor
  useMemo(() => {
    const { pathname } = router
    const [, namePath] = pathname.split('/')

    if (namePath === '' || namePath === '/' || namePath === undefined) {
      keyCurrent = 'home'
    } else {
      keyCurrent = namePath
    }
  }, [])


  const [currentNav, setCurrentNav] = useState(keyCurrent)  

  return (                
    <Navbar bg="dark" variant="dark" expand="lg">
      <Link href="/" passHref><Navbar.Brand>EMS Vietnam</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" defaultActiveKey="/" >
          <Link href="/" passHref><Nav.Link>Home</Nav.Link></Link>
          <Link href="/about" passHref><Nav.Link href="#features">Giới thiệu</Nav.Link></Link>
          <Link href="/services" passHref><Nav.Link href="#pricing">Pricing</Nav.Link></Link>
        </Nav>
              
        <Button variant="outline-info" onClick={() => i18n.changeLanguage(i18n.language === 'vn' ? 'en' : 'vn')}>{t('change-locale')}</Button>
      
      </Navbar.Collapse>
    </Navbar>        
  )
}

Header.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default withTranslation()(Header)
