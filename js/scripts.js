function Order(name, phone, income, cost) {
  this.name = name;
  this.phone = phone;
  this.income = income;
  this.cost = 0;
  return name;
}

Order.prototype.adjustedBasePrice = function() {
  if (this.income < 3) {
    this.cost += 5;
  } else if (this.income < 5) {
    this.cost += 8;
  } else {
    this.cost += 10;
  }
  return this.cost;
}

Order.prototype.add = function() {
  this.cost += price;
}

$(document).ready(function() {

  $("form#new-login").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var inputtedPhone = $("input#phone").val();
    var inputtedIncome = parseInt($("input#income").val());
    var cost = cost;

    if (inputtedIncome < 1) {
      $(".specialDealMessage").show();
    } else {
      var newOrder = new Order(inputtedName, inputtedPhone, inputtedIncome, cost);
      var cost = newOrder.adjustedBasePrice();
      order = newOrder;
      $("#welcome").append("Pizza Club Member: " + order.name + "<br><br>" + "Phone number: " + order.phone + "<br><br>Base cost: $" + order.cost + ".00");
      $("div.initial-form").remove();
      $("#headline").replaceWith("<h2>Welcome " + order.name + "</h2>");
      $("#welcome").show();
      $("#order-pizza").show();
    }
  });
  //
  // $("form#new-pizza-order").submit(function(event) {
  //   event.preventDefault();
  //   var cost =
  //
  //   order.add(price);
  // });

});
