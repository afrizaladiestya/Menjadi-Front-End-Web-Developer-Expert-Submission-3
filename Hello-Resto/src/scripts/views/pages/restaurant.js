import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurant = {
  async render() {
    return `
      <main tabindex="0" id="mainContent" class="main-resto_container">
      <section class="content">
        <h2 tabindex="0" class="main-resto_label">
          Find the best Restaurant
        </h2>
        <div id="main-resto_list" class="list-resto"></div>
      </section>
    </main>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantContainer = document.querySelector('.list-resto');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Restaurant;
