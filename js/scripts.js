function Login(name, phone, income) {
  this.name = name;
  this.phone = phone;
  this.income = income;
  return name + " " + phone;
}


$(document).ready(function() {

  $("form#new-login").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var inputtedPhone = $("input#phone").val();
    var inputtedIncome = parseInt($("input#income").val());
    if (inputtedIncome < 1) {
      $(".specialDealMessage").show();
    } else {
      var newLogin = new Login(inputtedName, inputtedPhone, inputtedIncome);
      login = newLogin;
      $("#welcome").append("Pizza Club Member: " + login.name + "<br><br>" + "Phone number: " + login.phone);
      $("div.initial-form").remove();
      $("#headline").replaceWith("<h2>Welcome " + login.name + "</h2>");
      $("#welcome").show();
      $("#order-pizza").show();
    }
  });

  $("form#")

});
