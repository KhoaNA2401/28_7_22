// let a = parseFloat(prompt("Nhap canh a:"));
// let b = parseFloat(prompt("Nhap canh b:"));
// let c = parseFloat(prompt("Nhap canh c:"));
// if (a < b + c && b < a + c && c < a + b) {
//   if (
//     a * a == b * b + c * c ||
//     b * b == a * a + c * c ||
//     c * c == a * a + b * b
//   )
//     console.log("Day la tam giac vuong");
//   else if (a == b && b == c) console.log("Day la tam giac deu");
//   else if (a == b || a == c || b == c) console.log("Day la tam giac can");
//   else if (
//     a * a > b * b + c * c ||
//     b * b > a * a + c * c ||
//     c * c > a * a + b * b
//   )
//     console.log("Day la tam giac tu");
//   else console.log("Day la tam giac nhon");
// } else console.log("Ba canh a, b, c khong phai la ba canh cua mot tam giac");
// console.log(`${a} ${b} ${c}`);
///////////////////
class Shop {
  /**
   *
   * @param {string} name
   * @param {Item[]} products
   * @param {string} address
   * @param {Vendor} vendor
   */
  constructor(name, address) {
    this.name = name;
    this.products = [];
    this.vendors = [];
    this.address = address;
  }
  addVendor(vendor) {
    let findVendor = this.vendors.find((value) => value.name === vendor.name);
    if (!findVendor) {
      this.vendors.push(vendor);
    } else {
      throw new Error(`${vendor.name} is already in the shop`);
    }
  }
  addProduct(product) {
    this.products.push(product);
  }
  getProducts() {
    return this.products;
  }
}
class Item {
  /**
   *
   * @param {string} name
   * @param {number} quantity
   * @param {number} price
   * @param {string} description
   * @param {string} vendorName
   * @param {string} imgURL
   */
  constructor(name, quantity, price, vendorName, description, imgURL) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.vendorName = vendorName;
    this.description = description;
    this.imgURL = imgURL;
  }
}
class Vendor {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}

let hcmVendor = new Vendor("Nhà phân phối tp. HCM", "Số 8 Nguyễn Văn Tráng");

let listItems = [
  new Item(
    "iPhone",
    10,
    2000,
    "Nhà phân phối tp. HCM",
    "iPhone 13, 6, 128GB, Space Gray",
    "Gearvn_Samurai (P.2)_ (11).jpg"
  ),
  new Item(
    "Samsung",
    10,
    1000,
    "Nhà phân phối tp. HCM",
    "Samsung Galaxy S22, 12, 128GB",
    "Gearvn_Samurai (P.2)_ (12).jpg"
  ),
  new Item(
    "Oppo",
    10,
    900,
    "Nhà phân phối tp. HCM",
    "Oppo Reno, 12, 128GB, Space Gray",
    "Gearvn_Samurai (P.2)_ (21).jpg"
  ),
  new Item(
    "Xiaomi",
    10,
    800,
    "Nhà phân phối tp. HCM",
    "Xiaomi Redmi Note 7, 12, 128GB, Space Gray",
    "Gearvn_Samurai (P.2)_ (20).jpg"
  ),
  new Item(
    "Vivo",
    10,
    700,
    "Nhà phân phối tp. HCM",
    "Vivo V15, 12, 128GB, Space Gray",
    "Gearvn_Samurai (P.2)_ (22).jpg"
  ),
  new Item(
    "Samsung",
    10,
    700,
    "Nhà phân phối tp. HCM",
    "Samsung V15, 12, 128GB, Space Gray",
    "Gearvn_Samurai (P.2)_ (35).jpg"
  ),
  new Item(
    "Samsung S2",
    10,
    700,
    "Nhà phân phối tp. HCM",
    "Samsung V15, 12, 128GB, Space Gray",
    "Gearvn_Samurai (P.2)_ (34).jpg"
  ),
  new Item(
    "Samsung S3",
    10,
    700,
    "Nhà phân phối tp. HCM",
    "Samsung V15, 12, 128GB, Space Gray",
    "Gearvn_Samurai (P.2)_ (33).jpg"
  ),
  new Item(
    "Samsung S4",
    10,
    700,
    "Nhà phân phối tp. HCM",
    "Samsung V15, 12, 128GB, Space Gray",
    "Gearvn_Samurai (P.2)_ (32).jpg"
  ),
];
let shop = new Shop("Shop 1", "Số 8 Nguyễn Văn Tráng");
shop.addVendor(hcmVendor);
for (let item of listItems) {
  shop.addProduct(item);
}
console.log(shop.getProducts());
/**
 *
 * @param {Item} item
 * @returns
 */
function createItemElm(item) {
  let itemElm = document.createElement("div");
  itemElm.className = "box green";
  itemElm.innerHTML = `<div class="container page-wrapper">
  <div class="page-inner">
    <div class="row">
      <div class="el-wrapper">
        <div class="box-up">
          <img class="img" src="./images/${item.imgURL}" alt="">
          <div class="img-info">
            <div class="info-inner">
              <span class="p-name">${item.name}</span>
              <span class="p-company">${item.vendorName}</span>
            </div>
          </div>
        </div>

        <div class="box-down">
          <div class="h-bg">
            <div class="h-bg-inner"></div>
          </div>

          <a class="cart" href="#">
            <span class="price">$${item.price}</span>
            <span class="add-to-cart">
              <span class="txt">Add in cart</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>`;
  return itemElm;
}
let parent = document.getElementsByClassName("parent")[0];

for (let i = 0; i < listItems.length; i++) {
  let newItem = createItemElm(listItems[i]);
  parent.appendChild(newItem);
}

let arr = [1, [2, 3], [[4]], "Hello", "World"];
console.log(arr[0]);
console.log(arr[3][2] + arr[2][0][0]);
console.log(arr[3][2] - arr[3][3]);
console.log(arr[0 / 0]);
let arr2 = [arr[1]];
console.log(arr2.length);
function convert(input) {
  let result = input;
  if (input === 0 || input === 1) {
    result = 1;
    return console.log(result);
  } else {
    while (input > 1) {
      input--;
      result *= input;
    }
    return console.log(result);
  }
}
console.log(convert(5));
/*------------------*/
var util = {
  mobileMenu() {
    $("#nav").toggleClass("nav-visible");
  },
  windowResize() {
    if ($(window).width() > 800) {
      $("#nav").removeClass("nav-visible");
    }
  },
  scrollEvent() {
    var scrollPosition = $(document).scrollTop();
    
    $.each(util.scrollMenuIds, function(i) {
      var link = util.scrollMenuIds[i],
          container = $(link).attr("href"),
          containerOffset = $(container).offset().top,
          containerHeight = $(container).outerHeight(),
          containerBottom = containerOffset + containerHeight;

      if (scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20) {
        $(link).addClass("active");
      } else {
        $(link).removeClass("active");
      }
    });
  }
};

$(document).ready(function() {
  
  util.scrollMenuIds = $("a.nav-link[href]");
  $("#menu").click(util.mobileMenu);
  $(window).resize(util.windowResize);
  $(document).scroll(util.scrollEvent);
  
});
/*------------------------------------*/
