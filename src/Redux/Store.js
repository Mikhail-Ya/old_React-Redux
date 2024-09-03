import dialogsReducer from "./dialogs-reduser";
import profileReducer from "./profile-reduser";
import sideBarReducer from "./sideBar-reduser";


let store = {
    _state: {
        dialogs: {
            message: [
                {id: 1, text: 'Здрасти!'},
                {id: 2, text: 'И вам не хвароть!'},
                {id: 3, text: 'Здоровей ведали.'}
            ],
            newTextMessage: '' ,
            contact: [
                {id: 1, name: 'Михаил', avatar: 'https://cs8.pikabu.ru/avatars/2498/x2498396-1221354000.png'},
                {id: 2, name: 'Алёна', avatar: 'http://www.mamachita.ru/uploads/pages/pages-WROJ73e5Jg.jpg'},
                {id: 3, name: 'Дмитрий', avatar: 'https://cs8.pikabu.ru/avatars/2345/x2345111-1581900344.png'},
                {
                    id: 4,
                    name: 'Марина',
                    avatar: 'https://im0-tub-ru.yandex.net/i?id=eb8cd7fd9403696f6430a6155b58aa08-sr&n=13&exp=1'
                }
            ]
        },
        profilePost: {
            posts: [
                {id: 1, text: 'по большей части лето жаркое, но дождей хваает', name: 'Михаил', nrav: 10, head: 'Лето'},
                {id: 2, text: 'как по мне так больше дождей', name: 'Алёна', nrav: 12, head: 'Лето'},
            ],
            newPostText: '',
            newThemePost: ''
        },
        sideBar: { },
    },
    callSubscriber() {
        console.log(store);
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this.callSubscriber = observer;
    },

    dispatch(action) {
        this._state.dialogs = dialogsReducer(this._state.dialogs,action);
        this._state.profilePost = profileReducer(this._state.profilePost,action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);
        this.callSubscriber(this._state);
    }
}


export default store;
window.store = store;