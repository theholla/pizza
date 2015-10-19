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

Order.prototype.add = function(price) {
  if (price) {
    this.cost += price;
  } else {
    this.cost += 0;
  }
}

Order.prototype.multiply = function(price) {
  this.cost = this.cost * price;
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
      $("#welcome").html("Base cost: <h2>$" + order.cost + "</h2>");
      $("div.initial-form").remove();
      $("#headline").replaceWith("<h2>Order for " + order.name + "</h2>");
      $("#welcome").show();
      $("#order-pizza").show();
    }
  });

  $("form#size").submit(function(event) {
    event.preventDefault();
    var sizeCost = parseInt($("input[name=size]:checked").val());
    order.add(sizeCost);
    $("#welcome").html("Price so far: <h2>$" + order.cost + "</h2>");
    $("#size").remove();
    $("#sauce").show();
  })

  $("form#sauce").submit(function(event) {
    event.preventDefault();
    var sauceCost = parseInt($("input[name=sauce]:checked").val());
    order.add(sauceCost);
    $("#welcome").html("Price so far: <h2>$" + order.cost + "</h2>");
    $("#sauce").remove();
    $("#cheese").show();
  });

  $("form#cheese").submit(function(event) {
    event.preventDefault();
    var cheeseCost = parseInt($("input[name=cheese]:checked").val());
    order.add(cheeseCost);
    $("#welcome").html("Price so far: <h2>$" + order.cost + "</h2>");
    $("#cheese").remove();
    $("#meat").show();
  });

  $("form#meat").submit(function(event) {
    event.preventDefault();
    var meatCost = parseInt($("input[name=meat]:checked").val());
    order.add(meatCost);
    $("#welcome").html("Price so far: <h2>$" + order.cost + "</h2>");
    $("#meat").remove();
    $("#vegetable").show();
  });

  $("form#vegetable").submit(function(event) {
    event.preventDefault();
    var vegCost = parseInt($("input[name=vegetables]:checked").val());
    order.add(vegCost);
    $("#welcome").html("Price so far: <h2>$" + order.cost + "</h2>");
    $("#vegetable").remove();
    $("#amount").show();
  });

  $("form#amount").submit(function(event) {
    event.preventDefault();
    var howMany = parseInt($("input#howmany").val());
    order.multiply(howMany);
    $("#welcome").html("Total price: <h2>$" + order.cost + "</h2>");
    $("#amount").remove();
    $("#thanks").show();
  })

});
