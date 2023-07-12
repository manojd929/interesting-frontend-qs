import React, { useEffect, useState } from 'react';

const useBookSearch = (query, pageNumber) => {
  const [] = useState();
  useEffect(() => {
    fetch(
      'https://openlibrary.org/search.json?' +
        new URLSearchParams({ q: query, page: pageNumber })
    )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.toString());
      });
  }, [query, pageNumber]);
};

const InfiniteScroller = () => {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  useBookSearch(query, pageNumber);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };

  return (
    <div>
      <section>
        <input type="text" onChange={handleSearch} value={query} />
        <div>Title</div>
        <div>Title</div>
        <div>Title</div>
        <div>Title</div>
        <div>Loading...</div>
        <div>Error</div>
      </section>
    </div>
  );
};

export default InfiniteScroller;
