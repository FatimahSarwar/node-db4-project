exports.seed = function(knex, Promise) {
    return knex('ingredients').del()
      .then(function () {
        return knex('ingredients').insert([
          {ingredient_name: 'Bread crust'},
          {ingredient_name: 'Cheese'},
          {ingredient_name: 'Meat'},
          {ingredient_name: 'Taco Seasoning'},
          {ingredient_name: 'Tortillas'},
          {ingredient_name: 'Green Onions'},
          {ingredient_name: 'Salami'},
          {ingredient_name: 'Shredded Cheese'},
          {ingredient_name: 'Tomato Sauce'},
          {ingredient_name: 'Buns'},
          {ingredient_name: 'Patties'},
          {ingredient_name: 'Pickles'}
        ]);
      });
  };