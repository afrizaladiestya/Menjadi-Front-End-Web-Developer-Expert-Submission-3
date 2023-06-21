import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div tabindex="0" class="main">
      <h2 tabindex="0" class="explore-restaurant__label">Detail Restaurant</h2>
      <section id="detail-rest"></section>
      <div class="like" id="likeButtonContainer"></div>
    </div>
  `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.restaurantDetail(url.id);
    const restaurantContainer = document.querySelector('#detail-rest');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(
      restaurant.restaurant,
    );

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        city: restaurant.restaurant.city,
        pictureId: restaurant.restaurant.pictureId,
        description: restaurant.restaurant.description,
        rating: restaurant.restaurant.rating,
      },
    });
  },
};

export default Detail;
