"use client";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface InfinityScrollProps {
  children: React.ReactNode;
  pageTotal: number;
  fetchUrl: string;
  fetchOptions?: RequestInit;
  initialData?: any[];
  loader?: React.ReactNode;
  endMessage?: React.ReactNode;
}

const InfinityScroll: React.FC<InfinityScrollProps> = ({
  children,
  pageTotal,
  fetchUrl,
  fetchOptions = {},
  initialData = [],
  loader = <h4>Loading...</h4>,
  endMessage = <p>That&apos;s All!</p>,
}) => {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalPages, setTotalPages] = useState(pageTotal);
  const [data, setData] = useState(initialData);

  const fetchData = async () => {
    if (page > totalPages) {
      setHasMore(false);
      return;
    }
    try {
      const response = await fetch(fetchUrl, fetchOptions);
      const newData = await response.json();
      setData((prev) => [...prev, ...newData]);
      setPage((prevPage) => prevPage + 1);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchUrl, fetchOptions, pageTotal]);

  return (
    <InfiniteScroll
      loader={loader}
      dataLength={data.length}
      next={fetchData}
      hasMore={hasMore}
      endMessage={endMessage}
    >
      {children}
    </InfiniteScroll>
  );
};

export default InfinityScroll;