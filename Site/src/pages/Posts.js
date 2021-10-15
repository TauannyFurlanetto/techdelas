import '../css/home.css';
import '../css/global.css';
import Cabecalho from '../components/header';
import Rodape from '../components/footer';
import '../js/script.js';
import Posts from '../components/Posts'
function PostPages() {
  return (
    <div className="Posts">
    <Cabecalho />
    <section class="posts pagPosts">
        <div class="container">
            <h2>Posts</h2>
            <Posts></Posts>
        </div>
    </section>
    <Rodape />
    </div>
  );
}

export default PostPages;