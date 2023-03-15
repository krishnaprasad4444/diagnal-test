import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MovieList } from "../../containers";
import { Header } from "../../components";
import { debounce } from "../../helpers";
import { api } from "../../store/movies";

export const CategorizedMovies = () => {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState("");
  const { loading, data, currentPage, title } = useSelector(
    (state) => state.movies
  );

  const fetchData = () => {
    if (currentPage < 4) dispatch(api.getMovies(currentPage));
  };

  const onSearch = (e) => {
    setSearchKey(e.target.value);
  };

  const filteredData = useMemo(() =>
    data.filter(
      (movie) => {
        return movie?.name
          .toLowerCase()
          .includes(searchKey.toLocaleLowerCase());
      },
      [data, searchKey]
    )
  );

  return (
    <div className="bg-black h-full">
      <Header title={title} onSearch={debounce(onSearch, 400)} />
      <div className="p-[20px] sm:p-[30px]">
        <MovieList
          loading={loading}
          data={filteredData}
          fetchData={fetchData}
        />
      </div>
    </div>
  );
};
