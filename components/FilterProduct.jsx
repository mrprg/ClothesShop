const clothesType = ["Men", "Woman", "Kid"];
const clothesSize = ["M", "L", "XL", "2XL"];

const FilterProduct = () => {
  return (
    <div
      className="w-[300px] h-[500px] border-y-0 border-r-0 mt-[60px] border">
      <div>
        <h1 className="ml-[14px] mt-[10px] font-semibold text-lg">
          Categories
        </h1>
        {clothesType.map((type) => (
          <button className="flex items-center mt-[25px] ml-[14px] pl-1 py-2 text-sm w-[150px] h-[30px] font-medium rounded-md hover:bg-red-700 hover:scale-105 hover:text-white active:scale-95 transition-all duration-300">
            {type}
          </button>
        ))}
      </div>
      <div className="h-[1px] w-[230px] bg-slate-200 ml-3 my-4"></div>
      <div>
        <h1 className="ml-[16px] mb-3 font-semibold text-lg">
        Size
        </h1>
        {clothesSize.map((size) => (
          <button
            onClick={(e) => console.log(e.target.value)}
            value={size}
            className="rounded-full mx-[14px] bg-red-700 text-white hover:scale-125 active:scale-95 transition-all duration-300 w-8 h-8 text-[12px] font-bold">
            {size}
          </button>
        ))}
      </div>
      <div className="h-[1px] w-[230px] bg-slate-200 ml-3 my-8"></div>
      <div className="w-[250px] flex items-center justify-center">
        <input
          type="search"
          placeholder="search"
          className="flex items-center pt-2 pb-3 outline-none border w-[200px] h-[35px] pl-[20px] text-sm rounded-lg hover:border-slate-300 focus:border-slate-400  transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default FilterProduct;
