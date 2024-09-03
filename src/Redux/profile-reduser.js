const ADD_POST = 'ADD_POST';
const TEXT_POST = 'TEXT_POST';
const THEME_POST = 'THEME_POST';

let initialState = {
    posts: [
        {id: 1, text: 'по большей части лето жаркое, но дождей хваает', name: 'Михаил', nrav: 10, head: 'Лето'},
        {id: 2, text: 'как по мне так больше дождей', name: 'Алёна', nrav: 12, head: 'Лето'},
    ],
    newPostText: '',
    newThemePost: '',
};

const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.posts = [...state.posts];

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                text: stateCopy.newPostText,
                name: 'Михаил',
                nrav: 0,
                head: stateCopy.newThemePost,
            };
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            stateCopy.newThemePost = '';
            return stateCopy;

        case TEXT_POST:
            stateCopy.newPostText = action.Text;
            return stateCopy;

        case THEME_POST:
            stateCopy.newThemePost = action.Text;
            return stateCopy;

        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const textPostActiveCreator = (text) => ({type: TEXT_POST, Text: text});
export const textThemePostActiveCreator = (text) => ({type: THEME_POST, Text: text});

export default profileReducer;
