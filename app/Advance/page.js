import PosList from "@/Components/Blog/PosList";
import PostForm from "@/Components/Blog/PostForm";

const PostContainer = () => {
  return (
    <section className="flex justify-center items-center md:min-h-screen">
      <div className="max-w-screen-xl m-0 max-h-screen h-screen md:h-fit bg-white shadow-lg sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 w-full p-6 sm:p-12">
          <div className="flex flex-col items-center">
            <div className="w-full flex-1 mt-8">
              <PostForm />
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat LoginBG">
            <PosList />
          </div>
        </div>
      </div>
    </section>
  );
};
export default PostContainer;
