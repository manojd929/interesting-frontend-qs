import React, { useEffect, useState, useRef, useCallback } from 'react';

const useBookSearch = (query, pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    setLoading(true);
    setError(false);
    fetch(
      'https://openlibrary.org/search.json?' +
        new URLSearchParams({ q: query, page: pageNumber }),
      { signal }
    )
      .then((res) => res.json())
      .then((res) => {
        setBooks((prevBooks) => [
          ...prevBooks,
          ...res.docs?.map((b) => b.title),
        ]);
        setHasMore(res.docs.length > 0);
      })
      .catch((err) => {
        setError(err.toString());
        console.log(err.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query, pageNumber]);

  return { loading, error, books, hasMore };
};

const InfiniteScroller = () => {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };

  const { books, hasMore, loading, error } = useBookSearch(query, pageNumber);

  const observer = useRef(null);
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
          console.log('Visible');
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div style={{ margin: '1rem' }}>
      <section>
        <input type="text" onChange={handleSearch} value={query} />
        <ul>
          {books.map((book, index) => {
            if (books.length === index + 1) {
              return (
                <li key={index} ref={lastBookElementRef}>
                  {book}
                </li>
              );
            }
            return <li key={index}>{book}</li>;
          })}
        </ul>
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
      </section>
    </div>
  );
};

export default InfiniteScroller;
