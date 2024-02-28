import SortBar from "../../components/SortBar";
import MobileCategories from "../../components/MobileCategories";
import MobileSortBar from "../../components/MobileSortBar";
import SortRow from "../../components/SortRow";
import axios from "axios";
import PostList from "../../components/PostList";
import queryString from "query-string";
import Layout from "../../containers/layout";
const blogs = ({ blogsData, categories }) => {
  return (
    <Layout>
      <section className="w-full flex justify-center">
        <div className="w-full h-auto container md:mt-10">
          <div className="w-full h-20"></div>
          <div className="w-full grid grid-cols-12 grid-rows-12 gap-4 md:px-6">
            <div className="hidden md:flex col-span-3 row-span-12 ">
              <SortBar categories={categories} />
            </div>
            <div className="col-span-12 row-span-1 md:hidden py-6 flex flex-col gap-8 justify-center items-center">
              <MobileCategories categories={categories} />
              <MobileSortBar />
            </div>
            <div className="hidden col-span-12 md:col-span-9 row-span-1 md:flex justify-center">
              <SortRow />
            </div>
            <div className="row-span-12 col-span-12 md:col-span-9 md:row-span-11">
              {/* start blogs */}

              <PostList blogsData={blogsData} />
              {/* end blogs */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default blogs;

export async function getServerSideProps(context) {
  const { query } = context;
  const { data } = await axios.get(
    `http://localhost:5000/api/posts?${queryString.stringify(query)}`
  );
  const { data: postCategories } = await axios.get(
    "http://localhost:5000/api/post-category"
  );
  return {
    props: {
      blogsData: data.data.docs,
      categories: postCategories.data,
    },
  };
}
