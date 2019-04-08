var dishID;
var dishTitle;
var dishPrice = 0;
var dishQty = 1;
var subTotalPrice;
var totalPrice = 0;
var dishes = [];

//Get the order detail from localStorage
if (localStorage.length === 0) {
  loadEmptyCart();
} else {
  loadDishItem();
}

//Load empty cart
function loadEmptyCart() {
  $(".orderDetailHeader").hide();
  $(".orderDetailFooter").hide();
  $(".customer").hide();
  $(".orderNow").hide();

  $("#orderDetailContent").append(
    '<div class="emptyCart">' +
      '<div class="row text-center">' +
      '<div class="col col-12">' +
      "<p>Your cart is empty.</p>" +
      "</div>" +
      "</div>" +
      '<div class="row text-center">' +
      '<div class="col col-12">' +
      "<p>Please check the menu first.</p>" +
      "</div>" +
      "</div>" +
      '<div class="row text-center">' +
      '<div class="col col-12">' +
      '<i class="fas fa-cart-arrow-down" />' +
      "</div>" +
      "</div>" +
      "</div>"
  );
}

//Load dish item
function loadDishItem() {
  $.each(localStorage, function(key, value) {
    //console.log(key + ": " + value);

    if (key === "length") {
      //To exclude the built-in localstorage method;
      return false;
    }

    var singleValue = value.split(","); //Separate the value array into single value;

    dishID = singleValue[0];
    dishTitle = singleValue[1];
    dishPrice = parseFloat(singleValue[2]).toFixed(2);
    subTotalPrice = parseFloat(dishPrice * dishQty);

    $("#orderDetailContent").append(
      '<div class="row item">' +
        '<img src="./img/300/' +
        dishID +
        '_300.jpg" alt="' +
        dishTitle +
        '" />' +
        '<p class="dishTitle">' +
        dishTitle +
        "</p>" +
        '<i id="minus_' +
        dishID +
        '" class="fas fa-minus"></i>' +
        '<p id="qty_' +
        dishID +
        '" class="dishQty">' +
        dishQty +
        "</p>" +
        '<i id="plus_' +
        dishID +
        '" class="fas fa-plus"></i>' +
        '<p id="subTotalPrice_' +
        dishID +
        '" class="subTotalPrice">$' +
        subTotalPrice.toFixed(2) +
        "</p>" +
        '<i id="delete_' +
        dishID +
        '" class="fas fa-trash-alt"></i>' +
        '<p id="unitPrice_' +
        dishID +
        '" class="unitPrice">' +
        dishPrice +
        "</p>" +
        "</div>"
    );

    totalPrice += subTotalPrice;

    dishes.push({
      dishID: dishID,
      dishTitle: dishTitle,
      dishQty: dishQty,
      subTotalPrice: subTotalPrice
    });
  });
  $("#totalAmount").html("$" + totalPrice.toFixed(2));
}

//Delete the dish item
$(".fa-trash-alt").click(function(e) {
  var targetID = e.target.id;
  var splitTargetID = targetID.split("_");
  var dishID = splitTargetID[1];

  //Remove dish object from dishes array with callback function
  function searchDish(dish) {
    return dish.dishID === dishID;
  }

  var deletedDish = dishes.find(searchDish);
  var index = dishes.indexOf(deletedDish);
  dishes.splice(index, 1);

  localStorage.removeItem(dishID);
  if (localStorage.length === 0) {
    loadEmptyCart();
  }

  $("#" + targetID)
    .parent()
    .fadeOut(300, removeItem);

  function removeItem() {
    $("#" + targetID)
      .parent()
      .remove();
    calculateTotal();
  }
});

//Update the quantity
$(".fa-plus").click(function(e) {
  var target = e.target.id;
  var splitTarget = target.split("_");
  var dishID = splitTarget[1];
  var dishQty = $("#qty_" + dishID).html();
  var dishQty = parseInt(dishQty);
  dishQty++;
  $("#qty_" + dishID).html(dishQty);

  var dishPrice = $("#unitPrice_" + dishID).html();
  var dishPrice = parseFloat(dishPrice);
  var subTotalPrice = dishQty * dishPrice;
  $("#subTotalPrice_" + dishID).html("$" + subTotalPrice.toFixed(2));

  $.each(dishes, function(i) {
    if (dishes[i].dishID === dishID) {
      dishes[i].dishQty = dishQty;
      dishes[i].subTotalPrice = subTotalPrice;
    }
  });
  calculateTotal();
});

$(".fa-minus").click(function(e) {
  var target = e.target.id;
  var splitTarget = target.split("_");
  var dishID = splitTarget[1];
  var dishQty = $("#qty_" + dishID).html();
  var dishQty = parseInt(dishQty);
  dishQty--;

  if (dishQty == 0) {
    return false;
  }
  $("#qty_" + dishID).html(dishQty);

  var dishPrice = $("#unitPrice_" + dishID).html();
  var dishPrice = parseFloat(dishPrice);
  var subTotalPrice = dishQty * dishPrice;
  $("#subTotalPrice_" + dishID).html("$" + subTotalPrice.toFixed(2));

  $.each(dishes, function(i) {
    if (dishes[i].dishID === dishID) {
      dishes[i].dishQty = dishQty; //
      dishes[i].subTotalPrice = subTotalPrice; //
    }
  });

  calculateTotal();
});

//Calculate the total amount
function calculateTotal() {
  var totalPrice = 0;
  $(".subTotalPrice").each(function(index, element) {
    var subTotalPrice = element.innerHTML.slice(1);
    subTotalPrice = parseFloat(subTotalPrice);
    totalPrice += subTotalPrice;
  });
  $("#totalAmount").html("$" + totalPrice.toFixed(2));
}

//Send the order
$("#order").on("submit", function(e) {
  e.preventDefault();

  var name = $("#name").val();
  var phone = $("#phone").val();
  var time = $("#time").val();
  var remarks = $("#remarks").val();
  var totalAmount = $("#totalAmount")
    .html()
    .slice(1);
  var totalAmount = parseFloat(totalAmount).toFixed(2);

  var year = new Date().getFullYear().toString();
  var month = new Date().getMonth() + 1;
  month = twoDigits(month).toString();
  var date = new Date().getDate();
  date = twoDigits(date).toString();

  var orderDate = year + month + date;

  var orderNumber;
  var status = "unconfirmed";

  //Form Validation
  if (name === "") {
    $("#nameVali").show();
    setTimeout(function() {
      $("#nameVali").fadeOut(500);
    }, 1000);
    return false;
  }

  if (phone === "") {
    $("#phoneVali").show();
    setTimeout(function() {
      $("#phoneVali").fadeOut(500);
    }, 1000);
    return false;
  }

  //Load the spinner
  $("#orderDetail").empty();
  $("#orderDetail").append('<div class="loader"></div>');

  //Two Digits
  function twoDigits(n) {
    return (n < 10 ? "0" : "") + n;
  }

  //Check the order quantity in db;
  $.ajax({
    url:
      "https://api.mlab.com/api/1/databases/ec/collections/orders?apiKey=wOtbigKGuJqfYu8-hgRHNxDq5sFccSKr"
  }).done(function(res) {
    var number = 1;

    if (res.length === 0) {
      orderNumber = orderDate.slice(2) + "-01";
    } else if (res.length !== 0) {
      $.each(res, function(i, order) {
        if (order.orderDate === orderDate) {
          number++;
        }
      });

      number = twoDigits(number);
      orderNumber = orderDate.slice(2) + "-" + number.toString();
    }

    sendOrder();
  });

  //Send order to database
  function sendOrder() {
    $.ajax({
      url:
        "https://api.mlab.com/api/1/databases/ec/collections/orders?apiKey=wOtbigKGuJqfYu8-hgRHNxDq5sFccSKr",
      data: JSON.stringify({
        orderDate: orderDate,
        orderNumber: orderNumber,
        year: year,
        month: month,
        date: date,
        dishes: dishes,
        totalAmount: totalAmount,
        name: name,
        phone: phone,
        time: time,
        remarks: remarks,
        status: status
      }),
      type: "POST",
      contentType: "application/json",
      success: function() {
        window.location.href = "orderSent.html";
        //Notice: Thank you very much, your order has been confirmed, please get ready to pick up according to the time you set, and most importantly, enjoy your food.
        localStorage.clear();
      },
      error: function() {
        alert("Oops, something wrong here, please try again.");
      }
    });
  }
});
