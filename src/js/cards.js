import icon from '/img/icons.svg';

export default {
  mainCard: function mainCard(data) {
    const list = data
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
                        Category: <span class="card__accent">${category}</span>
                      </p>
                      <p class="card__text">Size: <span class="card__accent">${size}</span></p>
                      <p class="card__text">
                        Popularity: <span class="card__accent">${popularity}</span>
                      </p>
                    </div>
                    <div class="card__order">
                      <p class="curd__price">$${price}</p>
                      <button
                        id="${_id}"
                        class="card__btn js-btn-buy js-object"
                        data-jsname="buy${_id}"
                        type="button"
                      >
                        <svg class="card__icon js-btn">
                          <use class="js-btn" href="${icon}#discount-cart"></use>
                        </svg>
                      </button>
                      <button
                        id="${_id}"
                        class="card__btn js-btn-check js-object"
                        data-jsname="check${_id}"
                        type="button"
                      >
                        <svg class="card__icon card__icon--checked js-btn">
                          <use class="js-btn" href="${icon}#check-mark-icon"></use>
                        </svg>
                      </button>
                       
                    </div>
                  </div>
                </li>
                `
      )
      .join('');

    return list;
  },

  popularCard: function popularCard(data) {
    const list = data
      .map(
        ({ _id, img, name, category, size, popularity }) => ` 
        <li class ="card__item" data-productid="${_id}" >
            <div id ="${_id}" class="card">
                  <div class="card__image-wrap">
                        <img class = "card__image" src="${img}" alt="${name}" loading="lazy" />
                  </div>
                
                <div class="card__description">
                        <h3 class="card__title">${name}</h3>      
                        <p class="card__text card__description-category">
                            Category: <span class="card__accent"> ${category}</span>
                        </p>
                        <div class="card__description-info">
                            <p class="card__text">
                                Size: <span class="card__accent"> ${size}</span>
                            </p>
                            <p class="card__text">
                                Popularity: <span class="card__accent"> ${popularity}</span>
                            </p>
                        </div>
                   </div>
                    <button
                        id="${_id}"
                        class="card__btn js-btn-buy js-object"
                        data-jsname="buy${_id}"
                        type="button"
                      >
                        <svg class="card__icon">
                          <use class="js-btn" href="${icon}#discount-cart"></use>
                        </svg>
                      </button>
                      <button
                        id="${_id}"
                        class="card__btn js-btn-check js-object"
                        data-jsname="check${_id}"
                        type="button"
                      >
                        <svg class="card__icon card__icon--checked js-btn">
                          <use class="js-btn" href="${icon}#check-mark-icon"></use>
                        </svg>
                      </button>
                        </div> 
                   </li>`
      )
      .join('');
    return list;
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

    const list = productsList
      .map(
        ({ _id, img, name, price }) => `
                                <li class="card__item" data-productId="${_id}">
                                  <div id="${_id}" class="card">
                                    <div class="card__image-wrap">
                                      <img
                                        class="card__image"
                                        src="${img}"
                                        alt="${name}"
                                        data-productId="${_id}"
                                        loading="lazy"
                                      />
                                    </div>

                                    <div class="card__description" data-productId="${_id}">
                                      <h3 class="card__description-title">${name}</h3>
                                      <div class="card__order" data-productId="${_id}">
                                        <span class="discount-price" data-productId="${_id}"> $${price} </span>
                                        <button
                                          id="${_id}"
                                          class="card__btn js-btn-buy js-object"
                                          data-jsname="buy${_id}"
                                          type="button"
                                        >
                                          <svg class="card__icon">
                                            <use class="js-btn" href="${icon}#discount-cart"></use>
                                          </svg>
                                        </button>
                                        <button
                                          id="${_id}"
                                          class="card__btn js-btn-check js-object"
                                          data-jsname="check${_id}"
                                          type="button"
                                        >
                                          <svg class="card__icon card__icon--checked js-btn">
                                            <use class="js-btn" href="${icon}#check-mark-icon"></use>
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
            `
      )
      .join('');

    return list;
  },

  checkBtn: function checkBtn(data) {
    return data.map(product => {
      const item = document.querySelector(`[data-jsname=check${product._id}]`);
      if (!item) {
        return;
      }
      item.style.display = 'none';
    });
  },
};
