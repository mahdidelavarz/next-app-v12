import axios from "axios";
import { FaRegBookmark } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";
import PostComments from "../../../components/PostComments";
import Layout from "../../../containers/layout";
const PostPage = ({ postData }) => {
  console.log(postData);
  return (
    <Layout>
      <div className="container w-full h-auto mx-auto md:px-10 mt-20">
        <header className="w-full h-44 md:h-36 bg-stone-100 shadow-md flex flex-col md:flex-row justify-between md:items-center p-4 gap-4 md:gap-0">
          <div className="flex gap-4">
            <div className="w-20 h-20 rounded-full">
              <img
                src={postData.coverImage}
                alt=""
                className="w-full h-full rounded-full "
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <span>{postData.author.name}</span>
                <span className="px-4 py-1 rounded-full border-2 border-slate-400">
                  front end
                </span>
              </div>
              <span>{postData.author.biography}</span>
              <div className="flex gap-2">
                <span>
                  {new Date(postData.createdAt).toLocaleDateString("fa-IR")}
                </span>
                <span>reading time {postData.readingTime} minutes</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse gap-10 items-center">
            <div className="px-4 py-2 flex gap-1 rounded-xl shadow-md items-center cursor-pointer">
              <FaRegBookmark className="text-blue-600" />
              <span>bookmark</span>
            </div>
            <IoIosLink className="text-2xl text-slate-500 cursor-pointer" />
          </div>
        </header>
        <main className="md:px-10 px-4 py-4 format format-lg w-full ">
          <div>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <h3>Lorem, ipsum dolor.</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus a cumque earum neque enim impedit possimus mollitia
              alias nobis quibusdam. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatum fuga excepturi tenetur. Illum quae
              similique itaque voluptatibus provident rerum molestias, ex ad
              commodi saepe velit sint ratione hic asperiores maiores quis
              voluptas quam necessitatibus magnam iste? Fuga quas natus
              similique?
            </p>
          </div>
          <div>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <h3>Lorem, ipsum dolor.</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus a cumque earum neque enim impedit possimus mollitia
              alias nobis quibusdam. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatum fuga excepturi tenetur. Illum quae
              similique itaque voluptatibus provident rerum molestias, ex ad
              commodi saepe velit sint ratione hic asperiores maiores quis
              voluptas quam necessitatibus magnam iste? Fuga quas natus
              similique?
            </p>
          </div>
          {/* comments */}
          <PostComments post={postData} />
        </main>
      </div>
    </Layout>
  );
};

export default PostPage;

export async function getServerSideProps(context) {
  const { query } = context;
  const {
    data: { data },
  } = await axios.get(`http://localhost:5000/api/posts/${query.postSlug}`);
  return {
    props: {
      postData: data,
    },
  };
}
