import clsx from "clsx";
import { useRef } from "react";

import useLazyLoad from "../../hooks/useLazyLoad";
import { ThumbnailCard } from "../../components";

export const MovieList = ({ loading, data, fetchData }) => {
  const triggerRef = useRef(null);
  useLazyLoad(triggerRef, loading, fetchData);

  return (
    <>
      <div className="grid grid-cols-3 content-start gap-x-6 gap-y-10 lg:gap-x-7 lg:gap-y-16 2xl:gap-y-[90px] 2xl:gap-x-[30px]">
        {data.map((image, i) => {
          return (
            <ThumbnailCard
              owner={image["name"]}
              imageUrl={image["poster-image"]}
              key={i}
            />
          );
        })}
      </div>
      <div
        ref={triggerRef}
        className={clsx("trigger", { visible: loading })}
      ></div>
    </>
  );
};
