
function item(id, title, price, state_name, thumbnail,free_shipping, condition, sold_quantity) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.state_name = state_name;
    this.thumbnail = thumbnail;
    this.free_shipping = free_shipping;
    this.condition = condition;
    this.sold_quantity = sold_quantity;
    

}
module.exports = item;

