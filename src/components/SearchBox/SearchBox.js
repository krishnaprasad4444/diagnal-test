import SearchBtnIcon from "../../assets/images/search.png";

const SearchBox = ({ onChange }) => {
  return (
    <div className="flex justify-between items-center px-4 h-full relative">
      <input
        onChange={onChange}
        type="search"
        placeholder="Search"
        aria-label="Search"
        className="peer cursor-pointer relative z-10 h-10 xl:h-12 w-12 rounded-full bg-transparent pl-12 outline-none focus:border focus:w-full focus:cursor-text focus:border-white focus:pl-16 focus:pr-4 text-white"
      />
      <div className="flex justify-center items-center absolute inset-y-0 my-auto h-12 w-12">
        <img src={SearchBtnIcon} className="h-2/5 xl:h-3/5" alt={"Search"} />
      </div>
    </div>
  );
};

export default SearchBox;
