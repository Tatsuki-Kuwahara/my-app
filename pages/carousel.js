import Layout from "../components/layout";
import Carousel from "react-bootstrap/Carousel";
import Img from "next/image"

export default function About() {
  return (
    <Layout title="カルーセル" description="カルーセル">
      <Carousel variant="dark">
        <Carousel.Item>
          <Img
            className="d-block w-100"
            src="/images/sass.png"
            width="400px"
            height="300px"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Img
            className="d-block w-100"
            src="/images/rails.png"
            width="400px"
            height="300px"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Img
            className="d-block w-100"
            src="/images/js.png"
            width="400px"
            height="300px"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Img
            className="d-block w-100"
            src="/images/sea.jpeg"
            width="400px"
            height="300px"
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    </Layout>
  )
}