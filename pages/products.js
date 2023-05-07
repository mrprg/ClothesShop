import Image from "next/image";
import clientPromise from "../lib/mongodb";
import Link from "next/link";

export default function Movies({ product }) {
  return (
    // <div className="flex" dir="rtl">
    //   <ul className="grid w-full grid-cols-4 mt-10">
    //     {product.map((product) => (
    //       <li className="w-[500px] mr-[50px] mb-10">
    //         <Link href={`/products/${product._id}`}>
    //           <div className="w-full rounded-3xl shadow-md flex justify-between bg-slate-100 hover:scale-105 hover:shadow-lg transition-all">
    //             <div className="bg-slate-100 rounded-3xl rounded-l-none w-[500px] flex flex-col items-center">
    //               <h2 className="">{product.title}</h2>
    //               <h2>{product.description}</h2>
    //               <div className="flex">
    //                 <span>سایز:</span>
    //                 <h2>{product.size}</h2>
    //               </div>
    //               <h2>{`${product.price}`}هزار تومان</h2>
    //               <div>
    //                 <div>مطالعه بیشتر</div>
    //                 <div>افزودن</div>
    //               </div>‍
    //             </div>
    //             <Image
    //               className="rounded-3xl rounded-r-none"
    //               src={product.imageUrl}
    //               width={200}
    //               height={200}
    //               alt="product-image"
    //             />
    //           </div>
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <div className="p-5" dir="rtl">
      <h1 className="font-bold text-2xl">همه محصولات</h1>
      {/* main div that contains all of the products */}
      <div className="">
        <div className="grid grid-cols-3 place-items-center w-full 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 min-[350px]:grid-cols-1">
          {product.map((product) => (
            // product container
            <div className="mb-5 mt-10 mx-5 rounded-3xl shadow-md flex justify-between 2xl:w-[500px] lg:w-[450px] md:w-[420px] sm:w-[370px] min-[350px]:w-[330px] max-[640px]:flex-col-reverse hover:scale-105 hover:shadow-lg transition-all">
              {/* product text */}
              <div className="h-[308px] flex flex-col items-center bg-emerald-500 w-[600px] rounded-r-3xl max-[640px]:rounded-t-none max-[640px]:rounded-b-3xl max-[640px]:w-full">
                <h1 className="my-4 text-3xl font-bold text-white">
                  {product.title}
                </h1>
                <h1 className="font-semibold text-xl text-slate-100 mb-5">
                  {product.description}
                </h1>
                <div className="flex items-center mb-4">
                  <span className="font-semibold ml-2">
                    سایز :
                  </span>
                  <h2 className="font-bold text-xl text-white">
                    {product.size}
                  </h2>
                </div>
                <div className="flex mb-5">
                  <span className="font-semibold ml-2">
                    قیمت :
                  </span>
                  <div className="flex">
                    <h2 className="font-bold text-l text-white ml-1">
                      {product.price}
                    </h2>
                    <span className="font-bold">
                      هزار تومان
                    </span>
                  </div>
                </div>
                <div className="mt-1.5 flex items-center justify-evenly w-full">
                  <Link href={`/products/${product._id}`}>
                    <h1 className="bg-white p-3 rounded-xl text-orange-500 font-semibold active:scale-90 hover:bg-orange-600 hover:text-white transition-all ">
                      مشاهده بیشتر
                    </h1>
                  </Link>

                  <button className="bg-green-700 shadow-l font-bold text-white p-3 rounded-xl flex items-center active:scale-90 hover:bg-orange-600 transition-all">
                    افزودن
                    <svg
                      className="mr-2"
                      width="20px"
                      height="20px"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle
                        cx="20.5"
                        cy="41.5"
                        r="3.5"
                        fill="#fff"
                      />
                      <circle
                        cx="37.5"
                        cy="41.5"
                        r="3.5"
                        fill="#fff"
                      />
                      <path
                        d="M5 6L14 12L19 34H39L44 17H25"
                        stroke="#fff"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M25 26L32.2727 26L41 26"
                        stroke="#fff"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* product image */}
              <div>
                <Image
                  className="rounded-3xl h-[308px] object-cover rounded-r-none max-[640px]:w-full max-[640px]:rounded-t-3xl max-[640px]:rounded-b-none max-[640px]:h-[400px] max-[640px]:object-cover "
                  src={product.imageUrl}
                  width={500}
                  height={400}
                  alt="product-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("clothes-next13");

    const movies = await db
      .collection("products")
      .find({})
      .sort({ metacritic: -1 })
      .limit(4)
      .toArray();

    return {
      props: {
        product: JSON.parse(JSON.stringify(movies)),
      },
    };
  } catch (e) {
    console.error(e);
  }
}
