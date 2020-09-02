import { EventEmitter } from 'events';
import dispatcher from '../Dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _users = [];
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
        const actualUser = _users.find((user) => user.id === id);
        console.log("ara estic al store", actualUser);
        return actualUser;
    }
}

const userStore = new UserStore();

dispatcher.register((action) => {
    if (action.type === actionTypes.LOAD_DETAIL_USER) {
        _users = action.data;
        userStore.emitChange(_users);
    }
});

export default userStore;