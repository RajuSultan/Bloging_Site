// import logo from './logo.svg';
import './App.css';
import './assets/css/screen.css';
import intro from './assets/img/intro.jpg';
import shadow from './assets/img/shadow.png';
// import gravatar from './assets/img/gravatar.jpg';
import GridCard from './Component/GridCard/GridCard';
import { useEffect, useState } from 'react';
import Navbar from './Component/Navbar/Navbar';

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://www.prakritic.com/wp-json/wp/v2/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [posts])
  // console.log(posts);
  return (
    <div className="home-template">
      <div className="site-wrapper">

        <Navbar></Navbar>
        <header class="main-header " style={{ backgroundImage: ` url(${intro})` }}>
          <div class="vertical">
            <div class="main-header-content inner">
              <h1 class="page-title">Fashion Critiques</h1>
              <div class="entry-title-divider">
                <span></span><span></span><span></span>
              </div>
              <h2 class="page-description">Thoughts, reviews and ideas since 1999.</h2>
            </div>
          </div>
          <a class="scroll-down icon-arrow-left" href="#content" data-offset="-45"><span class="hidden">Scroll
            Down</span></a>
        </header>
        <main id="content" class="content" role="main">
          <div class="wraps">
            <img src={shadow} class="wrapshadow" alt='' />
            <div class="grid">

              {
                posts.map(post => <GridCard key={post.id} post={post}></GridCard>)
              }
              {/* <GridCard></GridCard> */}

            </div>
            <nav class="pagination" role="navigation">
              <span class="page-number">Page 1 of 2</span>
              <a class="older-posts" href="page2.html">Older Posts &rarr;</a>
            </nav>
          </div>
        </main>
        <footer class="site-footer clearfix">
          <a href="#top" id="back-to-top" class="back-top"> </a>
          <div class="text-center">
            <a href="index.html">Nectaria Template</a> &copy; 2016<br />
            Free HTML Template by <a href="https://wowthemes.net">WowThemes.net</a>
          </div>
        </footer>


      </div>

    </div>
  );
}

export default App;
