exports.seed = function(knex, Promise) {
    return knex('recipes').del()
      .then(function () {
        return knex('recipes').insert([
          { recipe_name: 'Pizza'},
          { recipe_name: 'Burgers'},
          { recipe_name: 'Tacos'}
        ]);
      });
  };