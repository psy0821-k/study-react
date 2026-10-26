import { useEffect, useState } from 'react';
import S from './DataFetching.module.css';
import { getPosts, type Post } from '../api/getPosts';

export default function PostList() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const data = await getPosts();
        setPosts(data.posts);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <article className={S.container} aria-busy={isLoading}>
      <h2 className={S.title}>최신 포스트 리스트</h2>

      {isLoading && (
        <div role="status" className={`${S.statusMessage} ${S.loading}`}>
          데이터를 로딩중입니다...
        </div>
      )}

      {!isLoading && error && (
        <div role="alert" className={`${S.statusMessage} ${S.error}`}>
          🚨 {error}
        </div>
      )}

      {!isLoading && !error && (
        <ul className={S.postList}>
          {posts.map(post => {
            const formatDate = new Date(post.createdAt).toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });

            return (
              <li key={post.id} className={S.postItem}>
                <h3>{post.title}</h3>
                <p>
                  {post.content} ({formatDate})
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </article>
  );
}
