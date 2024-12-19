import { useEffect, useState } from "react";
import { Image, Row, Col } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import "./ImageUpload.css";
function ImageUpload() {
  const [imgs, setImgs] = useState([]);
  const getData = async () => {
    const rawResponse = await fetch(
      import.meta.env.VITE_REACT_API + "/pictures",
      {
        method: "GET",
        headers: {
          "Content-Type": "image",
          Referer: "quinn-is-thirty.com",
          "auth-token": import.meta.env.VITE_REACT_TOKEN,
        },
        mode: "cors",
      }
    );
    const content = (await rawResponse.json()).object_keys;
    for (const i in content) {
      const newContent = content[i].content;
      console.log(typeof newContent);
    }
    console.log(content);

    setImgs(content);
  };
  useEffect(() => {
    getData();
  }, []);

  return imgs.length >= 0 ? (
    <>
      {" "}
      <div className="pics-container">
        <h1 className="font-color">QUINN PHOTOS!</h1>
        <div id="piclist" className=" justify-content-center">
          {imgs.map((item, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <div className="image-container">
                <Image
                  src={item.content}
                  alt={`Image ${index + 1}`}
                  fluid
                  rounded
                />
              </div>
            </Col>
          ))}
        </div>
      </div>
    </>
  ) : (
    <Spinner
      animation="border"
      className="spinner"
      variant="light"
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default ImageUpload;
