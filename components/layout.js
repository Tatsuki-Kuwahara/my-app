import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Layout({ children, title, description }) {
  const pageTitle = title || 'ホームページタイトル';
  return (
    <div className={styles.container}>
      <Head>
        <title>{pageTitle}</title>
        <meta name='description' content={description || 'ホームページ概要'} />
      </Head>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
        <Navbar.Brand href="/">Hey You!</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/carousel">Carousel</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>&copy; Hey You!</footer>
    </div>
  );
}
