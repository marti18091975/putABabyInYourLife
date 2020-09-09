import { EventEmitter } from 'events';
import dispatcher from '../Dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _users = [];
let _usersFiltered = [];
const filters = [{}];
class UserStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
    emitChange() {
        this.emit(CHANGE_EVENT);
    }
    getDetailUsers() {

        return _users;
    }
    getDetailUserById(id) {

        //console.log("ara estic al store", actualUser);
        return _users.find((user) => user._id === id);;
    }
    applyingFilters(filters, _users) {
        _usersFiltered = _users.filter(
            (element) =>
                element.age >= +filters.ageDown &&
                element.age <= +filters.ageUp &&
                +element.distance <= +filters.distance &&
                ((element.sons > 0 && filters.withSons === "yes") ||
                    (element.sons === 0 && filters.withoutSons === "no")) &&
                ((element.job === "yes" && filters.withJob === "yes") ||
                    (element.job === "no" && filters.withoutJob === "no")) &&
                ((element.civilState === "single" && filters.single === "single") ||
                    (element.civilState === "divorced" && filters.divorced === "divorced") ||
                    (element.civilState === "widow" && filters.widow === "widow") ||
                    (element.civilState === "married" && filters.married === "married"))
        );
        return _usersFiltered;
    }
}

const userStore = new UserStore();

dispatcher.register((action) => {
    console.log("AQUEST ES EL ACTION", action);
    switch (action.type) {
        case actionTypes.LOAD_USERS:
            _users = action.data;
            userStore.emitChange(_users);
            break;
        case actionTypes.LOAD_DETAIL_USER:
            _users = action.data;
            userStore.emitChange(_users);
            break;
        case actionTypes.FILTERLIST:
            filters = action.data;
            _usersFiltered = userStore.applyingFilters(filters, _users);
            userStore.emitChange(_usersFiltered);
            break;

        default: break;

    }

});

export default userStore;