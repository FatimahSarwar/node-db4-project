exports.seed = function(knex, Promise) {
    return knex('steps').del()
      .then(function () {
        return knex('steps').insert([
          { recipe_id: 1, step_number: 1, step_instructions: 'Prep Pizza'},
          { recipe_id: 1, step_number: 2, step_instructions: 'Make Pizza'},
          { recipe_id: 1, step_number: 3, step_instructions: 'Serve Pizza'},
          { recipe_id: 2, step_number: 1, step_instructions: 'Prep Burger'},
          { recipe_id: 2, step_number: 2, step_instructions: 'Make Burger'},
          { recipe_id: 2, step_number: 3, step_instructions: 'Serve Burger'},
          { recipe_id: 3, step_number: 1, step_instructions: 'Open Taco'},
          { recipe_id: 3, step_number: 2, step_instructions: 'Cook Taco'},
          { recipe_id: 3, step_number: 3, step_instructions: 'Serve Taco'}
        ]);
      });
  