import cartIcon from '/img/icons.svg#discount-cart';
import checkedIcon from '/img/icons.svg#discount-checked';
import refs from './service/refs';

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
        }) => {
          if (is10PercentOff) {
            return `
                <li class="product_card-item js-object" id=${_id} data-productId="${_id}" >
                     <div class="product_card-wrapper">
                      <div class="card-img-wrapper"><img src="${img}" alt="${name}" class="product_card-image"></div>
                      <h2 class="product_card-name">${name}</h2>
                      <div class="product_card-info">
                          <p class="info-text">
                              Category:<span class="info-span">${category}</span>
                          </p>
                          <p class="info-text">
                              Size:<span class="info-span">${size}</span>
                          </p>
                          <p class="info-text">
                              Popularity:<span class="info-span">${popularity}</span>
                          </p>
                      </div>
                      <div class="product_card-bottom">
                      <p class="product-curd-price">$${price}</p>
                       <button id="${_id}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn2${_id}"  type="button">
                                  <svg class="card_buy-icon-svg js-btn "   width="18" height="18">
                                      <use class="js-btn" href="${cartIcon}"></use>
                                  </svg>
                              </button>
                              <div id="${_id}" class="check js-object" data-jsname="check1${_id}" >
                              <svg  class="check-icon-svg  discount-buy " width="18" height="18">
                                      <use href="${checkedIcon}"></use>
                                  </svg></div>
                      </div>
                      </div>
                  </li>
                `;
          }
          return `
      <li class="product_card-item js-object" id=${_id} data-productId="${_id}" >
    
           <div class="product_card-wrapper">
            <div class="card-img-wrapper"><img src="${img}" alt="${name}" class="product_card-image"></div>
            <h2 class="product_card-name">${name}</h2>
            <div class="product_card-info">
                <p class="info-text">
                    Category:<span class="info-span">${category}</span>
                </p>
                <p class="info-text">
                    Size:<span class="info-span">${size}</span>
                </p>
                <p class="info-text">
                    Popularity:<span class="info-span">${popularity}</span>
                </p>
            </div>
            <div class="product_card-bottom">
            <p class="product-curd-price">$${price}</p>
            
            <button id="${_id}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn2${_id}"  type="button">
                        <svg class="card_buy-icon-svg js-btn "   width="18" height="18">
                            <use class="js-btn" href="${cartIcon}"></use>
                        </svg>
                    </button>
                    <div id="${_id}" class="check js-object" data-jsname="check1${_id}" >
                    <svg  class="check-icon-svg  discount-buy " width="18" height="18">
                            <use href="${checkedIcon}"></use>
                        </svg></div>
            </div>
            </div>
        </li>`;
        }
      )
      .join('');
  },

  popularCard: function popularCard(data) {
    return data
      .map(
        ({ _id, img, name, category, size, popularity }) => ` 
        <li class ="cards-item" data-productid="${_id}" >
            <div id ="${_id}" class="photo-card">
                        <img class = "cards__image" src="${img}" alt="${name}" loading="lazy" />
                     
                </div> 
                <div class=" discount-show">
                        <h3 class="info-title">${name}</h3>      
                        <p class="info-text">
                            Category:<span class="info-span">${category}</span>
                        </p>
                        <wraper class="info-wraper">
                            <p class="info-text">
                                Size:<span class="info-span">${size}</span>
                            </p>
                            <p class="info-text">
                                Popularity:<span class="info-span">${popularity}</span>
                            </p>
                        </wraper>
                   </div>
                   <button id="${_id}" class="popular-products-btn js-btn discount-buy js-object" data-jsname="btn1${_id}"  type="button">
                        <svg class="basket-icon-svg js-btn "   width="12" height="12">
                            <use class="js-btn" href="${cartIcon}"></use>
                        </svg>
                    </button>
                    <div id="${_id}" class="check-btn js-object js-btn" data-jsname="check${_id}" >
                    <svg  class="check-icon-svg  discount-buy  js-btn" width="12" height="12">
                            <use href="${checkedIcon}"></use>
                        </svg></div>
                   </li>    
                      
    `
      )
      .join('');
  },

  dicountCard: async function discountCard() {
    // number of products to draw
    const DISCOUNTNUMBER = 2;
    // get all nodes
    const frontEnd = new refs();
    //clear
    frontEnd.discountList.innerHTML = '';
    //get list of discount products
    const discountProducts = await fetchAPI.discount();

    //array of products to draw
    const productsToDraw = [];
    let i = 0;
    //do we have enough products to draw?
    if (discountProducts.length < DISCOUNTNUMBER) {
      i = discountProducts.length;
    } else {
      i = DISCOUNTNUMBER;
    }
    //choose random products and add to array to be drawn
    for (; i > 0; i--) {
      let randomNumber = Math.floor(Math.random() * discountProducts.length);
      productsToDraw.push(discountProducts[randomNumber]);
      discountProducts.splice(randomNumber, 1); //remove used products
    }

    //read saved Cart
    let cart = localStorageApi.loadCart();
    //get saved products id
    const productsInCart = [];
    if ('products' in cart) {
      cart = cart.products;
      cart.forEach(product => productsInCart.push(product.productId));
    }
    //draw discount products
    const productsList = [];
    productsToDraw.forEach(product => {
      //chose icon
      let icon = cartIcon;
      if (productsInCart.includes(product._id)) {
        icon = checkedIcon;
      }
      productsList.push(`
            <li class="discount-list-item discount-show" data-productId="${product._id}">
                <svg width="60" height="60" class="discount-icon discount-show"  data-productId="${product._id}">
                  <use href="${discountIcon}" class="discount-show"  data-productId="${product._id}"></use>
                </svg>
                <div class="discount-image-box discount-show"  data-productId="${product._id}">
                  <img
                    class="discount-image discount-show"
                    src="${product.img}"
                    width="114"
                    height="114"
                    alt="${product.name}"
                    data-productId="${product._id}"
                  />
                </div>
                <div class="discount-description discount-show"  data-productId="${product._id}">
                  <p class="discount-title discount-show"  data-productId="${product._id}">${product.name}</p>
                  <div class="discount-description-price discount-show"  data-productId="${product._id}">
                    <span class="discount-price discount-show"  data-productId="${product._id}">$${product.price}</span>
                    <button type="button" class="discount-icon-box discount-buy" data-productId="${product._id}">
                      <svg width="18" height="18" class="discount-cart discount-buy" data-productId="${product._id}">
                        <use href="${icon}" class="js-object discount-buy" data-jsname="discountIcon${product._id}" data-productId="${product._id}"></use>
                      </svg>
                    </button>
                  </div>
                </div>
             </li>
            `);
    });
  },
};
