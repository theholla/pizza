describe('Order', function(){
  it("creates a new order", function() {
    var testOrder = new Order("Jonathan", "(408) 333-222", "3", 0);
    expect(testOrder.name).to.equal("Jonathan");
    expect(testOrder.income).to.equal("3");
  });

});

describe('adjustedBasePrice', function() {
  it("gives a standard initial cost for high incomes", function() {
    var testOrder = new Order("Prince William", "Europe", "5", 0);
    testOrder.adjustedBasePrice();
    expect(testOrder.cost).to.equal(10);
  })

  it("gives a low initial cost for low incomes", function() {
    var testOrder = new Order("Pauper Paul", "Europe", "1", 0);
    testOrder.adjustedBasePrice();
    expect(testOrder.cost).to.equal(5);
  })

})

describe('add', function() {
  it("adds the price of a topping to the current total", function() {
    var testOrder = new Order("Jake", "(503) 111-2222", "5", 0);
    testOrder.add(10);
    expect(testOrder.cost).to.equal(10);
  });
});

describe('multiply', function() {
  it("multiplies a total based on how many pizzas wil be purchased", function() {
    var testOrder = new Order("Jake", "(503) 111-2222", "5", 0);
    testOrder.add(10);
    testOrder.multiply(5);
    expect(testOrder.cost).to.equal(50);
  });
});
