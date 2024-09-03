const NEW_MESSAGE = 'NEW_MESSAGE';
const TEXT_MESSAGE = 'TEXT_MESSAGE';

let initialState = {
    message: [
        {id: 1, text: 'Здрасти!'},
        {id: 2, text: 'И вам не хвароть!'},
        {id: 3, text: 'Здоровей ведали.'}
    ],
    newTextMessage: '',
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
};

const dialogsReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.message = [...state.message];

    switch (action.type) {
        case TEXT_MESSAGE :
            stateCopy.newTextMessage = action.Text;
            return stateCopy;

        case NEW_MESSAGE :
            let newMessage = {
                id: 4,
                text: stateCopy.newTextMessage,
            };
            stateCopy.message.push(newMessage);
            stateCopy.newTextMessage = '';
            return stateCopy;

        default:
            return state;
    }
}

export const textMessageActiveCreator = (text) => ({type: TEXT_MESSAGE, Text: text});
export const addMessageActionCreator = () => ({type: NEW_MESSAGE});

export default dialogsReducer;