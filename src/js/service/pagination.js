import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import getProducts from '../render_cart-list';

export default async function paginy({ perPage, totalPages, page }) {
  const options = {
    totalItems: totalPages * perPage,
    itemsPerPage: perPage,
    visiblePages: 5,
    page: page,
    centerAlign: true,

    // template: {
    //   page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    //   currentPage:
    //     '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    //   moveButton:
    //     '<a href="#" class="tui-page-btn tui-{{type}}">' +
    //     '<span class="tui-ico-{{type}}">{{type}}</span>' +
    //     '</a>',
    //   disabledMoveButton:
    //     '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
    //     '<span class="tui-ico-{{type}}">{{type}}</span>' +
    //     '</span>',
    //   moreButton:
    //     '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
    //     '<span class="tui-ico-ellip">...</span>' +
    //     '</a>',
    // },
  };

  const pagination = await new Pagination('pagination', options);

  pagination.on('beforeMove', function (event) {
    const page = event.page;
    getProducts(page);
  });

  // pagination.on('afterMove', function (eventData) {
  //   alert('The current page is ' + eventData.page);
  // });
}
