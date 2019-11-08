function Pizza(size,toppings)
{
  this.size = size,
  this.toppings = toppings,
  this.price = 0;
}
Pizza.prototype.cost = function()
{
  if (this.size==1)
    this.price = 5;
  else if (this.size == 2)
    this.price = 7;
  else if (this.size == 3)
    this.price = 10;
  else
    this.price = 12;
  return this.price;
}

var pizza1 = new Pizza (1,2);
