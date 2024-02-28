import Breadcrumb from "../Components/Admin/Breadcrumbs/Breadcrumb";
import DefaultLayout from "../layout/DefaultLayout";
import { useForm } from "react-hook-form";
import useServices from "../services/useServices";
import { useState } from "react";

const Settings = () => {
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const { createBook } = useServices();

  const onSubmit = async (data) => {
    try {
      const { title, author, description, num_pages, genres, imageURL } = data;

      const bookData = {
        title,
        author,
        description,
        num_pages: parseInt(num_pages),
        genres: genres.split(","), // Aquí aplicamos split
        image: imageURL,
      };
      const response = await createBook(bookData);

      if (response.status === 200) {
        setSuccess("Book creado con éxito!");
        setTimeout(() => {
          setSuccess("");
        }, 3000);
      }
    } catch (error) {
      setError(
        "Ocurrió un error durante la creación. Por favor, inténtalo de nuevo."
      );
      setTimeout(() => {
        setError("");
      }, 3000);
    }
    reset();
  };

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Settings" pageRouteName="books/create" />

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Create book
                </h3>
              </div>
              <div className="p-7">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="title"
                    >
                      Title
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Harry potter"
                      {...register("title", {
                        required: {
                          value: true,
                          message: "Title is required",
                        },
                      })}
                    />
                    {errors.title && (
                      <span className="block text-red-600 text-[15px] font-bold">
                        {errors.title.message}
                      </span>
                    )}
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="author"
                    >
                      Author
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="author"
                      id="author"
                      placeholder="J. K. Rowling"
                      {...register("author", {
                        required: {
                          value: true,
                          message: "Name author is required",
                        },
                      })}
                    />
                    {errors.author && (
                      <span className="block text-red-600 text-[15px] font-bold">
                        {errors.author.message}
                      </span>
                    )}
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <div className="relative">
                      <span className="absolute left-4.5 top-4">
                        <svg
                          className="fill-current"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.8" clipPath="url(#clip0_88_10224)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.56524 3.23223C2.03408 2.76339 2.66997 2.5 3.33301 2.5H9.16634C9.62658 2.5 9.99967 2.8731 9.99967 3.33333C9.99967 3.79357 9.62658 4.16667 9.16634 4.16667H3.33301C3.11199 4.16667 2.90003 4.25446 2.74375 4.41074C2.58747 4.56702 2.49967 4.77899 2.49967 5V16.6667C2.49967 16.8877 2.58747 17.0996 2.74375 17.2559C2.90003 17.4122 3.11199 17.5 3.33301 17.5H14.9997C15.2207 17.5 15.4326 17.4122 15.5889 17.2559C15.7452 17.0996 15.833 16.8877 15.833 16.6667V10.8333C15.833 10.3731 16.2061 10 16.6663 10C17.1266 10 17.4997 10.3731 17.4997 10.8333V16.6667C17.4997 17.3297 17.2363 17.9656 16.7674 18.4344C16.2986 18.9033 15.6627 19.1667 14.9997 19.1667H3.33301C2.66997 19.1667 2.03408 18.9033 1.56524 18.4344C1.0964 17.9656 0.833008 17.3297 0.833008 16.6667V5C0.833008 4.33696 1.0964 3.70107 1.56524 3.23223Z"
                              fill=""
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.6664 2.39884C16.4185 2.39884 16.1809 2.49729 16.0056 2.67253L8.25216 10.426L7.81167 12.188L9.57365 11.7475L17.3271 3.99402C17.5023 3.81878 17.6008 3.5811 17.6008 3.33328C17.6008 3.08545 17.5023 2.84777 17.3271 2.67253C17.1519 2.49729 16.9142 2.39884 16.6664 2.39884ZM14.8271 1.49402C15.3149 1.00622 15.9765 0.732178 16.6664 0.732178C17.3562 0.732178 18.0178 1.00622 18.5056 1.49402C18.9934 1.98182 19.2675 2.64342 19.2675 3.33328C19.2675 4.02313 18.9934 4.68473 18.5056 5.17253L10.5889 13.0892C10.4821 13.196 10.3483 13.2718 10.2018 13.3084L6.86847 14.1417C6.58449 14.2127 6.28409 14.1295 6.0771 13.9225C5.87012 13.7156 5.78691 13.4151 5.85791 13.1312L6.69124 9.79783C6.72787 9.65131 6.80364 9.51749 6.91044 9.41069L14.8271 1.49402Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_88_10224">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>

                      <textarea
                        className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        name="description"
                        id="description"
                        rows={6}
                        placeholder="Describe book information"
                        {...register("description", {
                          required: {
                            value: true,
                            message: "Description is required",
                          },
                          minLength: {
                            value: 10,
                            message:
                              "The description must be at least 10 characters long",
                          },
                        })}
                      ></textarea>
                      {errors.description && (
                        <span className="block text-red-600 text-[15px] font-bold">
                          {errors.description.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="num_pages"
                    >
                      Number of Pages
                    </label>
                    <input
                      type="number"
                      id="num_pages"
                      name="num_pages"
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      placeholder="100"
                      {...register("num_pages", {
                        required: {
                          value: true,
                          message: "Num pages is required",
                        },
                      })}
                    />
                    {errors.num_pages && (
                      <span className="block text-red-600 text-[15px] font-bold">
                        {errors.num_pages.message}
                      </span>
                    )}
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="genres"
                      value="Fantasy, Young Adult, Fiction"
                    >
                      Genres
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="genres"
                      id="genres"
                      placeholder="Fantasy, Young Adult, Fiction"
                      {...register("genres", {
                        required: {
                          value: true,
                          message: "Genres is required",
                        },
                      })}
                    />
                    {errors.genres && (
                      <span className="block text-red-600 text-[15px] font-bold">
                        {errors.genres.message}
                      </span>
                    )}
                  </div>
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="imageURL"
                    >
                      Image URL
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="imageURL"
                      id="imageURL"
                      placeholder="https://..."
                      {...register("imageURL", {
                        required: {
                          value: true,
                          message: "ImageURL is required",
                        },
                      })}
                    />
                    {errors.imageURL && (
                      <span className="block text-red-600 text-[15px] font-bold">
                        {errors.imageURL.message}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                      type="submit"
                    >
                      Cancel
                    </button>
                    <button
                      className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                      type="submit"
                    >
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Settings;
