import React from 'react';
import e from './Profile.module.css';
import Mypost from './Myposts/Mypost';
import ProfInfo from "./profInfo/profInfo";
import Post from "./Myposts/Posts/Post";


const Profile = (props) => {

    let postsElement = props.posts.map(p => <Post name={p.name} head={p.head} text={p.text}
                                                  nrav={p.nrav}/>);

    return <div className={e.content}>
        <img
            src='https://avatars.mds.yandex.net/get-pdb/219263/caadf056-6581-4caa-ad63-52a41d42995c/s375'
            alt=""/>
        <ProfInfo/>
        <Mypost newPost={props.newPost}
                newPostText={props.newPostText}
                newThemePost={props.newThemePost}
                textPost={props.textPost}
                themePost={props.themePost}
        />
        {postsElement}
    </div>

}

export default Profile;