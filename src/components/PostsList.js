import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/slices/postsSlice";
import { addFavorite, removeFavourite } from "../store/slices/favoriteSlice";
import "./PostsList.css";

function PostList(){
    const dispatch = useDispatch();
    const {items: posts, loading, error} = useSelector((state)=>state.post);
    const favorites = useSelector((state) => state.favorite.list);


    useEffect(()=>{
        dispatch(fetchPosts());
    }, [dispatch]);

    if (loading) return <p>Загрузка...</p>
    if (error) return <p>Ошибка....</p>

    return (
        <div className="posts-list">
            <h2>Популярные фильмы</h2>
            <div className="posts-grid">
                {posts.map((post)=>{
                    const isFav = favorites.some((fav)=> fav.id === post.id);
                    return(
                        <div key={post.id} className="post-card">
                            <h3>{post.title}</h3>
                            <p>{post.body.slice(0, 100)}....</p>
                            <button 
                            onClick={()=>
                                isFav
                                ?dispatch(removeFavourite(post.id))
                                :dispatch(addFavorite(post))
                            }
                            >
                                {isFav ? "Удалить из избранного": "в избранное"}

                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );

}
export default PostList;