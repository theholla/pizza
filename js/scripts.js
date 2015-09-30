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
    var inputtedIncome = $("input#income").val();
      var newLogin = new Login(inputtedName, inputtedPhone, inputtedIncome);
      login = newLogin;
      $("p#welcome").append("<br><br>You are " + login.name + "<br><br>" + "and your number is" + login.phone);
      $("form#new-login").remove();
      $("#headline").replaceWith("<h2>Welcome " + login.name + "</h2>");
      $("#order-pizza").show();
  });

});
