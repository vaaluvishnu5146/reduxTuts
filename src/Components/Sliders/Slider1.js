import React from "react";

export default function Slider1() {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/008/174/590/small/fashion-advertising-web-banner-illustration-vector.jpg"
            class="d-block w-100"
            alt="fashion image"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://cdn.vectorstock.com/i/preview-1x/66/81/shopping-boutique-banner-fashion-store-concept-vector-15036681.jpg"
            class="d-block w-100"
            alt="cosmetic"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
