import '../css/home.css';
import '../css/global.css';
import Rodape from '../components/footer';
import '../js/script.js';
import Posts from '../components/Posts'
function PostPages() {
  return (
    <div className="Posts">
    <section className="posts pagPosts">
        <div className="container">
            <h2>Posts</h2>
            <Posts></Posts>
        </div>
    </section>
    <Rodape />
    </div>
  );
}

export default PostPages;