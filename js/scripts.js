function Pizza(size,toppings)
{
  this.size = size,
  this.toppings = toppings,
  this.price = 0;
}
Pizza.prototype.cost = function()
{
  if (this.size=="small")
    this.price = 5;
  else if (this.size == "medium")
    this.price = 7;
  else if (this.size == "large")
    this.price = 10;
  else
    this.price = 12;
  for(var i=0;i<this.toppings.length;i++)
  {
    if(this.toppings[i]=="cheese")
      this.price += 2;
    else if(this.toppings[i]=="pepperoni")
      this.price += 3;
    else if(this.toppings[i]=="sausage")
      this.price += 2;
    else if (this.toppings[i]=="sausage")
      this.price += 2.50;
  }
  return this.price;
}
var pizza1 = new Pizza (1,["cheese", "pepperoni"]);
$(document).ready(function()
{
  $("form#pizzaForm").submit(function(event)
  {
    event.preventDefault();
    var size = $("input[name = 'pSize']:checked").val();
    var toppings = [];
    toppings = $("input[name = 'toppings']:checked").val();
    console.log(size , toppings[1]);
  });
});
