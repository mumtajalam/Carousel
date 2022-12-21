import React from "react";
import "../components/MyCarousel";
import "./Style.css";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const MyCarousel = () => {
  return (
    <>
      <section>
        <div className="row">
          <Carousel breakPoints={breakPoints}>
            <div className="product">
              <div className="product-thumb">
                <img
                  src="https://i.pinimg.com/736x/9c/52/f1/9c52f1c5b7fab519643b41b81956f848.jpg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="product">
              <div className="product-thumb">
                <img
                  src="https://images.unsplash.com/photo-1591035901227-1840ce5f7f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxOTI0MzA3fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
                  alt="logo"
                />
              </div>
            </div>
            <div className="product">
              <div className="product-thumb">
                <img
                  src="https://st4.depositphotos.com/1752371/20387/i/600/depositphotos_203872716-stock-photo-beautiful-woman-rural-field-scene.jpg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="product">
              <div className="product-thumb">
                <img
                  src="https://st4.depositphotos.com/1752371/20387/i/600/depositphotos_203872716-stock-photo-beautiful-woman-rural-field-scene.jpg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="product">
              <div className="product-thumb">
                <img
                  src="https://i.pinimg.com/originals/fe/6a/57/fe6a579d48b964bbd4c383fb234a8e58.jpg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="product">
              <div className="product-thumb">
                <img
                  src="https://media.gettyimages.com/id/1168172186/photo/girl-in-the-sunflower-fields.jpg?s=612x612&w=gi&k=20&c=sR_lZwKNWKe8Ea1ZOb14sprIeR6bxCr-qPXPDNqumbs="
                  alt="logo"
                />
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default MyCarousel;
