import useAuth from "../hooks/useAuth";

const Testimonials = () => {
  const { isDark } = useAuth();
  return (
    <>
      <h2 className="text-4xl font-bold text-center mt-16 mb-10">
        Testimonial
      </h2>
      <figure className="max-w-screen-md mx-auto text-center">
        <svg
          className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <blockquote>
          <p
            className={`text-2xl italic font-medium${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Automotive Website is an awesome shop. I bought 2 cars from them.
            Their after service make me really happy.
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3">
          <img
            className="w-6 h-6 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            alt="profile picture"
          />
          <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite
              className={`${
                isDark ? "text-white" : "text-gray-900"
              } pr-3 font-medium `}
            >
              Micheal Gough
            </cite>
            <cite
              className={`${
                isDark ? "text-white" : "text-gray-900"
              } pl-3 text-sm text-gray-500`}
            >
              CEO at Traideas
            </cite>
          </div>
        </figcaption>
      </figure>
    </>
  );
};

export default Testimonials;
