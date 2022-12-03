import React from "react";
import "./Home.css";
import klop from "../assets/book_ukr-1.jpg";
import { Carousel, Container } from "react-bootstrap";
import jar1 from "../assets/malyna_jam-470x470.jpg";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function Home() {
  return (
    <div className="mt-4 ">
      <h1 className=" home_title d-flex justify-content-center align-items-center ">
        Новини & Огляд
      </h1>
      <Container className="recipe d-flex mt-7 m-5">
        <img className="klop fluid mt-5" src={klop} alt="" />
        <Container className="flex-column d-flex m-5 ">
          <h2 className="mb-1">
            КОЛІР ЗАХОДУ СОНЦЯ: РЕЦЕПТ ВАРЕННЯ З АЙВИ НА ЗИМУ ВІД ЄВГЕНА
            КЛОПОТЕНКА
          </h2>
          <p>
            Яскраво-жовта, наче саме сонце, айва – це щось середнє між грушею та
            яблуком. Її можна запікати із картоплею чи м’ясом, щоб отримати
            неймовірну страву з приємним солодкуватим посмаком, або зробити
            смачне варення. Шкода, що про цей цікавий фрукт часто забувають.
            Радимо вам обов’язково звернути на нього увагу на базарі чи в
            супермаркеті. Ви впізнаєте айву за кольором та округлою, трохи
            неправильною формою. У сирому вигляді вона має досить терпкий смак,
            але він чарівним чином змінюється, якщо піддати фрукт обробці, а
            особливо – якщо додати цукор. Ми вже розповідали, чим корисна айва,
            тож настав час приготувати насичене смаком варення з айви на зиму з
            легким квітковим ароматом.
          </p>

          <h2 className=" mt-3">ПОРАДИ З ПРИГОТУВАННЯ ВАРЕННЯ З АЙВИ</h2>
          <p>
            Щоб отримати ідеальне варення з айви, треба знати лише кілька
            простих правил. Нарізайте плід скибочками однакового розміру. Так
            вони й рівномірно приготуються, і варення буде мати красивіший
            вигляд. Головне – не полінуйтеся проварити варення стільки разів,
            скільки вказано у рецепті, роблячи перерви на 15-20 хвилин. Це
            запорука того, що скибочки айви залишаться цільними, а не
            розлізуться та не перетворяться на кашу.
          </p>
        </Container>
      </Container>
      <MDBCarousel
        className="d-flex justify-content-center align-items-center m-auto mb-5  w-75"
        showIndicators
        showControls
        fade
      >
        <MDBCarouselItem
          className="w-100 "
          itemId={1}
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
          alt="..."
        >
        </MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
          alt="..."
        >
          <p>Наші варення по всьому світу</p>
        </MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src={"https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"}
          alt="..."
        >
        </MDBCarouselItem>
      </MDBCarousel>
    </div>
  );
}
