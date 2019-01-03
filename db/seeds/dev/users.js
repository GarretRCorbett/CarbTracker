
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, createdAt: new Date(), updatedAt: new Date(), 
          first_name: 'Garret', last_name: 'Corbett', level: 1, experience: 0},
        {id: 2, createdAt: new Date(), updatedAt: new Date(), 
          first_name: 'Celina', last_name: 'Wilson', level: 1, experience: 0}
      ]);
    });
};
