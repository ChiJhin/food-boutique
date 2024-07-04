import icon from '/img/icons.svg';

export default {
  mainCatd: function handleMarkup(data) {
    return data
      .map(
        ({
          category,
          img,
          name,
          popularity,
          price,
          size,
          _id,
          is10PercentOff,
        }) => `
                <li class="card__item js-object" id="${_id}" data-productId="${_id}">
                  <div class="card__wrap">
                    <div class="card__image-wrap">
                      <img src="${img}" alt="${name}" class="card__image" />
                    </div>
                    <h2 class="card__title">${name}</h2>
                    <div class="card__description">
                      <p class="card__text">
                        Category:<span class="card__accent">${category}</span>
                      </p>
                      <p class="card__text">Size:<span class="card__accent">${size}</span></p>
                      <p class="card__text">
                        Popularity:<span class="card__accent">${popularity}</span>
                      </p>
                    </div>
                    <div class="card__order">
                      <p class="curd__price">$${price}</p>
                      <button
                        id="${_id}"
                        class="card__btn js-object"
                        data-jsname="btn1${_id}"
                        type="button"
                      >
                        <svg class="card__btn-icon js-btn">
                          <use class="js-btn" href="${icon}#discount-cart"></use>
                        </svg>
                      </button>
                       
                    </div>
                  </div>
                </li>
                `
      )
      .join('');
  },

  popularCard: function popularCard(data) {
    return data
      .map(
        ({ _id, img, name, category, size, popularity }) => ` 
        <li class ="popular__item" data-productid="${_id}" >
            <div id ="${_id}" class="card">
                  <div class="card__image-wrap">
                        <img class = "card__image" src="${img}" alt="${name}" loading="lazy" />
                  </div>
                
                <div class="card__description">
                        <h3 class="card__description-title">${name}</h3>      
                        <p class="card__description-text card__description-category">
                            Category:<span class="card__description-accent"> ${category}</span>
                        </p>
                        <div class="card__description-info">
                            <p class="card__description-text">
                                Size:<span class="card__description-accent"> ${size}</span>
                            </p>
                            <p class="card__description-text">
                                Popularity:<span class="card__description-accent"> ${popularity}</span>
                            </p>
                        </div>
                   </div>
                    <button
                        id="${_id}"
                        class="card__btn  js-object"
                        data-jsname="btn1${_id}"
                        type="button"
                      >
                        <svg class="card__btn-icon">
                          <use class="js-btn" href="${icon}#discount-cart"></use>
                        </svg>
                      </button>
                      
                        </div> 
                   </li>`
      )
      .join('');
  },

  dicountCard: function discountCard(data) {
    const DISCOUNTNUMBER = 2;

    let i = 0;

    if (data.length < DISCOUNTNUMBER) {
      i = data.length;
    } else {
      i = DISCOUNTNUMBER;
    }
    const productsList = [];

    let firstProduct = Math.floor(Math.random() * data.length);
    let secondProduct = firstProduct - 1;

    productsList.push(data[firstProduct], data[secondProduct]);

    return productsList
      .map(
        ({ _id, img, name, price }) => `
                                <li class="discount__item" data-productId="${_id}">
                                  <div id="${_id}" class="card">
                                    <div class="card__image-wrap">
                                      <img
                                        class="card__img"
                                        src="${img}"
                                        alt="${name}"
                                        data-productId="${_id}"
                                        loading="lazy"
                                      />
                                    </div>

                                    <div class="card__description" data-productId="${_id}">
                                      <h3 class="card__description-title">${name}</h3>
                                      <div class="card__price" data-productId="${_id}">
                                        <span class="discount-price" data-productId="${_id}"> $${price} </span>
                                        <button
                                          id="${_id}"
                                          class="card__btn js-object"
                                          data-jsname="btn1${_id}"
                                          type="button"
                                        >
                                          <svg class="card__btn-icon">
                                            <use class="js-btn" href="${icon}#discount-cart"></use>
                                          </svg>
                                        </button>
                                        
                                      </div>
                                    </div>
                                  </div>
                                </li>
            `
      )
      .join('');
  },
};
