exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(t) {
        t.increments('id').unsigned().primary()
        t.dateTime('createdAt').notNull()
        t.dateTime('updatedAt').nullable()

        t.string('first_name').notNull()
        t.string('last_name').notNull()
        t.integer('level').notNull()
        t.integer('experience').notNull()
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
}
