export default {
    namespaced: true,
    state: {
        items: [
            {
                key: 'user-data',
                to: '/user-data',
                icon: 'table',
                title: 'User data',
            },
            {
                key: 'user-activity',
                to: '/user-activity',
                icon: 'mouse-pointer',
                title: 'User activity',
            }
        ]
    },
    getters: {
        items: state => state.items,
    },
    actions: {},
    mutations: {},
}