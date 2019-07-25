export function dispatchActions(store, modules, startsWith) {
    Object.keys(modules).forEach(moduleName => {
        Object.keys(modules[moduleName].actions).forEach(actionName => {
            if (actionName.startsWith(startsWith)) {
                if (modules[moduleName].namespaced) {
                    store.dispatch(`${moduleName}/${actionName}`);
                } else {
                    store.dispatch(moduleName);
                }
            }
        })
    })
}