import axios from "axios";
import { FormEventHandler, useRef } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Footer from "../components/footer/Footer";

export default function Contact() {
  const name = useRef<HTMLInputElement>(null);
  const desc = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLInputElement>(null);
  const image = useRef<HTMLInputElement>(null);

  const onSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    if (
      !name.current?.value ||
      !desc.current?.value ||
      !price.current?.value ||
      !image.current?.files
    )
      return alert("Помилка");
    console.log(name.current.value);
    console.log(desc.current.value);
    console.log(price.current.value);
    console.log(image.current.files);

    const formData = new FormData();
    formData.append("name", name.current.value);
    formData.append("description", desc.current.value);
    formData.append("price", price.current.value);
    formData.append("image", image.current.files[0]);

    const res = await axios.post(
      "http://tlwsn.westeurope.cloudapp.azure.com/api/items",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(res, res.data);
  };

  return (
    <div>
      <p>Contact</p>
      <div>
        <form className="m-5"
          onSubmit={onSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "200px",
          }}
        >
          <input className="m-1" type="text" placeholder="name" ref={name} />
          <input className="m-1" type="text" placeholder="desc" ref={desc} />
          <input className="m-1" type="text" placeholder="price" ref={price} />
          <input className="m-1" type="file" name="" id="" ref={image} />
          <input className="m-1" type="submit" value="ДОДАТИ" />
        </form>
      </div>
      <Footer />
    </div>
  );
}
