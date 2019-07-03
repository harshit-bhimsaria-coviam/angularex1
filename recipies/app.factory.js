var app = angular.module('myApp');

app.factory('ShoppingList', function(){
  return {
    shoppingList: [],
    inList: function(ingredient) {
      let inList = -1;
      this.ShoppingList.forEach((element, index) => {
        if(element.ingredientName === ingredient){
          inList = index;
        }
      });
      return inList;
    },
    addToShoppingList: function(ingredient) {
      let itemIndex = this.inList(ingredient);
      if(itemIndex === -1){
        let shoppingListItem = {};
        shoppingListItem['ingredientName'] = ingredient;
        shoppingListItem['quantity'] = 1;
        this.ShoppingList.push(shoppingListItem);
      }
      else{
        this.ShoppingList[itemIndex].quantity += 1;
      }
    },
    removeFromShoppingList: function(ingredient) {
      let itemIndex = this.inList(ingredient);
      if(this.ShoppingList[itemIndex].quantity === 1)
        this.ShoppingList.splice(itemIndex, 1);
      else
        this.ShoppingList[itemIndex].quantity -= 1;
    },
    shoppingListItemCount: function(){
      return this.ShoppingList.length;
    },
    shoppingListQuantityCount: function(){
      let sum = 0;
      this.ShoppingList.forEach(ele=>{
        sum += ele.quantity;
      });
      return sum;
    }
  };
});