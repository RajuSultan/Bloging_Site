import React, { useEffect, useState } from 'react';
import gravatar from '../../assets/img/gravatar.jpg'
import Categories from './Categories';

const GridCard = ({ post }) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(`https://www.prakritic.com/wp-json/wp/v2/categories/${post?.categories[0]}`)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [post])
    console.log(posts?.name);
    // console.log(post)
    // const { title } = post;
    // console.log(post?.yoast_head_json?.@graph);


    return (

        <div class="grid-item">
            <article class="post featured">
                <a href="article.html"><img style={{ height: '250px' }}
                    src={post?.yoast_head_json?.og_image[0]?.url} alt='' /></a>
                <div class="wrapgriditem">
                    <header class="post-header">
                        <h2 class="post-title"><a href="article.html">{post?.yoast_head_json?.title}</a></h2>
                    </header>
                    <section class="post-excerpt">
                        <p>
                            {post?.yoast_head_json?.og_description}<a
                                class="read-more"
                                href="/drinking-whenever-you-are-ready-or-even-if-youre-not/">&raquo;</a>
                        </p>
                    </section>
                    <footer class="post-meta">
                        <img class="author-thumb" src={gravatar} alt="David" nopin="nopin" />
                        <a href="author.html">
                            {posts?.name}
                        </a>
                        <time class="post-date" datetime="2016-12-14">{post?.date}</time>
                    </footer>
                </div>
            </article>
        </div>

    );
};

export default GridCard;