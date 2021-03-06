const users = [];

const userService = {
    create: (user) => users.push(user),
    get: () => users,
    getById: (id) => users[id],
    delete: (id) => { users[id] = undefined },
};

module.exports = userService;
