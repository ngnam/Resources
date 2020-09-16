'use strict';

(function () {
  // add style sheet

  var cssMenu =
      '.menu-page{position:fixed;top:0;left:0;margin-top:1%;margin-left:1%;background:#fff;border-radius:5px;border:1px solid #ddd;width:320px;padding:5px;font-size:14px;min-height:500px;max-height:500px;overflow:auto} .menu-page .menu-item {color: #333; line-height: 1.5em; padding-bottom: 10px;}@media only screen and (max-width:700px){.menu-page{display:none;}.btnmenu{display: block!important;}}.btnmenu{display: none;position:fixed;top:0;left:0;width:20px;height:20px;border:10px solid #ddd;border-radius:50px;background:#b57e19;margin-top:10px;margin-left:10px;cursor:pointer}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

  head.appendChild(style);

  style.type = 'text/css';
  if (style.styleSheet) {
    // This is required for IE8 and below.
    style.styleSheet.cssText = cssMenu;
  } else {
    style.appendChild(document.createTextNode(cssMenu));
  }

  const bodyTag = document.getElementsByTagName('body');
  const btnMenuEL = document.createElement('span');

  // create a div
  const menuEl = document.createElement('ol');
  menuEl.classList.add('menu-page');

  const linkBlogs = [
    {
      lessionId: 'Ngày 1',
      lessionName: 'Làm quen với oracle DB',
      lessionLink: 'https://ngnam.github.io/ngay-thu-nhat-lam-quen-voi-oracle/',
    },
    {
      lessionId: 'Ngày 2',
      lessionName: 'Sử dụng package trong oracle DB',
      lessionLink: 'https://ngnam.github.io/ngay-thu-hai-su-dung-oracle/',
    },
  ];

  linkBlogs.forEach((item) => {
    const link = document.createElement('li');
    link.innerHTML = `<a href="${item.lessionLink}">${item.lessionId} ${item.lessionName}</a>`;
    link.classList.add('menu-item');
    menuEl.appendChild(link);
  });

  // handle btn menu click
  var handleBtnMenu = function () {
    if (menuEl.style.display === 'none') {
      menuEl.style.display = 'block';
    } else {
      menuEl.style.display = 'none';
    }
  };

  btnMenuEL.classList.add('btnmenu');
  btnMenuEL.addEventListener('click', handleBtnMenu, false);
  btnMenuEL.addEventListener('onmouseleave', function () {
    btnMenuEL.removeEventListener('click', handleBtnMenu, false);
  });

  // add menu to div
  bodyTag[0].appendChild(menuEl);
  bodyTag[0].appendChild(btnMenuEL);
})();
