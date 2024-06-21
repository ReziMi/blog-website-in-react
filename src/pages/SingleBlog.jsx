import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaUser } from "react-icons/fa"; // Correct import
import { FaClock } from "react-icons/fa6"; // Correct import
import SideBar from "../components/SideBar";

const SingleBlog = () => {
  const data = useLoaderData();

  // Ensure that data is an array and contains at least one element
  if (!data || data.length === 0) {
    return <div>No blog data available</div>;
  }

  const {
    title,
    image,
    category,
    author,
    published_date,
    reading_time,
    content,
  } = data[0]; // Destructure the first element of the array

  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Single Blog Page
        </h2>
      </div>

      {/* blog details */}
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img src={image} alt={title} className="w-full mx-auto rounded" />
          </div>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            {title}
          </h2>
          <p className="mb-3 text-gray-600">
            <FaUser className="inline-flex items-center mr-2" />
            {author} | {published_date}
          </p>
          <p className="mb-3 text-gray-600">
            <FaClock className="inline-flex items-center mr-2" />
            {reading_time} minutes read
          </p>
          <p className="text-base text-gray-500 mb-6">{content}</p>
          <div className="text-base text-gray-500 mb-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              atque temporibus laboriosam. Facilis ad porro, quibusdam quaerat
              dignissimos molestias pariatur eos placeat voluptatem doloremque.
              Quisquam accusamus expedita illo sequi alias.
            </p><br/>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
              obcaecati odit laudantium exercitationem nostrum, porro natus,
              inventore dolores consequuntur blanditiis qui cum ea aliquam
              perspiciatis facere repellendus adipisci. Similique, et?
            </p><br/>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
              obcaecati odit laudantium exercitationem nostrum, porro natus,
              inventore dolores consequuntur blanditiis qui cum ea aliquam
              perspiciatis facere repellendus adipisci. Similique, et?
            </p><br/>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
              obcaecati odit laudantium exercitationem nostrum, porro natus,
              inventore dolores consequuntur blanditiis qui cum ea aliquam
              perspiciatis facere repellendus adipisci. Similique, et?
            </p><br/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              itaque quo, aut aliquam quia, fugiat illum officiis aliquid
              consectetur placeat non, id commodi laboriosam provident! Nulla
              quibusdam quas illum commodi.
            </p>
          </div>
        </div>
        <div className="lg-w-1/2">
            <SideBar/>
        </div>
      </div>
      
    </div>
  );
};

export default SingleBlog;
