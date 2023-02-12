import Link from 'next/link';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-6">
      <Link href="/">
        <a>
          <Container className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0">
            <Row className="flex items-center w-auto pr-10 dark:bg-transparent bg-opacity-0 rounded-3xl flex justify-center align-center">
              <Col className="mx-5 mb-5 mt-6">
                <Image src="/profile.jpeg" className="rounded-full mx-auto opacity-100" alt="" layout='intrinsic' width='150' height='150'></Image>
              </Col>
              <Col>
                <div className=" text-1xl dark:text-white text-left ml-5 mb-5" >
                    <h1>Gustavo Reyes</h1>
                    <p>Software Engineer</p>
                    <p>greyescarrion@gmail.com</p>
                </div>
              </Col>
            </Row>
          </Container>
        </a>
      </Link>
    </header>
  );
}
