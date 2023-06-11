import React from "react";

const OurBlog = () => {
  return (
    <section className="blog section mb-6" id="blog">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <h2 className="text-3xl font-bold">Latest Blog</h2>
        </div>
        <div className="flex flex-wrap mt-8">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-gray-100 rounded-lg shadow-md p-6">
              <div className="mb-4">
                <img
                  src="https://preview.colorlib.com/theme/fashe/images/blog-01.jpg"
                  alt="Blog"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="mb-2 ">
                <div className="text-red-500">4 jun 2020</div>
              </div>
              <div className="mb-4">
                <h4 className="text-xl font-bold mb-2">The Best Coffee</h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolore, porro rem quod illo quam, eum alias id, repellendus
                  magni, quas.
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  Tags:{" "}
                  <a href="#" className="text-red-500">
                    coffee
                  </a>
                  ,{" "}
                  <a href="#" className="text-red-500">
                    best
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-gray-100 rounded-lg shadow-md p-6">
              <div className="mb-4">
                <img
                  src="https://preview.colorlib.com/theme/fashe/images/blog-02.jpg"
                  alt="Blog"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="mb-2">
                <div className="text-red-500">4 jun 2020</div>
              </div>
              <div className="mb-4">
                <h4 className="text-xl font-bold mb-2">Cuts For Men</h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolore, porro rem quod illo quam, eum alias id, repellendus
                  magni, quas.
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  Tags:{" "}
                  <a href="#" className="text-red-500">
                    cuts
                  </a>
                  ,{" "}
                  <a href="#" className="text-red-500">
                    men
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-gray-100 rounded-lg shadow-md p-6">
              <div className="mb-4">
                <img
                  src="https://preview.colorlib.com/theme/fashe/images/blog-03.jpg"
                  alt="Blog"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="mb-2">
                <div className="text-red-500">4 jun 2020</div>
              </div>
              <div className="mb-4">
                <h4 className="text-xl font-bold mb-2">The Wine House</h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolore, porro rem quod illo quam, eum alias id, repellendus
                  magni, quas.
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  Tags:{" "}
                  <a href="#" className="text-red-500">
                    wine
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBlog;
