"use client";
import React, { useEffect, useRef, useState } from "react";

const TextOverview = ({ overview }: { overview: string }) => {
  const [btn, setBtn] = useState(false);

  const ref: { current: any } = useRef();

  useEffect(() => {
    const pEle = ref.current;
    if (pEle.offsetHeight < pEle.scrollHeight) {
      setBtn(true);
    } else {
      setBtn(false);
    }
  }, []);

  const hanldeShowMore = () => {
    const pEle = ref.current;
    if (pEle.offsetHeight < pEle.scrollHeight) {
      ref.current.classList.remove("line-clamp-4");
      console.log("", ref.current);
      ref.current.nextElementSibling.innerText = "Thu gọn";
    } else {
      ref.current.classList.add("line-clamp-4");
      ref.current.nextElementSibling.innerText = "Xem thêm";
    }
  };

  return (
    <p className="hero-overview">
      <span className="line-clamp-4" ref={ref}>
        {overview}
      </span>
      {btn && (
        <button onClick={() => hanldeShowMore()} className="text-pink-1 block">
          Xem thêm
        </button>
      )}
    </p>
  );
};

export default TextOverview;
