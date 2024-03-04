import { Flex, Image, Text, Divider } from "@chakra-ui/react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import DefaultLayout from "../../layouts/DefaultLayout";
import userImage from "../../assets/images/people2.png";
import arrow from "../../assets/images/arrow-up-right.png";
import "../../components/styles/pagination.css";

function BlogsPage() {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = blogs.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(blogs.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % blogs.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <DefaultLayout>
      <Flex
        bg={"#FAF0E7"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        padding={"120px"}
        boxShadow={"0px 0px 20px 0px #0000004D"}
      >
        <Text fontSize="5xl" fontWeight={"600"}>
          Stories and interviews
        </Text>
        <Text fontSize="3xl" color={"#667085"}>
          Subscribe to learn about new product features, the latest in
          technology, solutions, and updates.
        </Text>
      </Flex>
      {/* recent blogs */}
      <Flex
        bg={"#ECECEC"}
        padding={{ base: "15px", sm: "80px" }}
        flexDirection={"column"}
      >
        <Text fontSize="3xl" fontWeight={"600"}>
          Recent blog posts
        </Text>
        <br />
        <Flex
          flexWrap={"wrap"}
          justifyContent={"center"}
          gap={5}
          flexDirection={{
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
          }}
        >
          <BlogCard
            author={blogs[0].author}
            date={blogs[0].date}
            title={blogs[0].title}
            description={blogs[0].description}
            image={blogs[0].image}
            w={"45%"}
          />
          <Flex flexDirection={"column"} w={"50%"} gap={5}>
            <Flex
              flexDirection={{
                base: "column",
                sm: "column",
                md: "column",
                lg: "row",
              }}
              gap={3}
            >
              <Image src={blogs[0].image} alt="blog image" maxH={"300px"} />
              <Flex flexDirection={"column"} gap={3}>
                <Text color={"#4BB543"}>
                  {blogs[0].author} • {blogs[0].date}
                </Text>

                <Text fontSize={"2xl"} fontWeight={600}>
                  {blogs[0].title}
                </Text>

                <Text>{blogs[0].description}</Text>
              </Flex>
            </Flex>

            <Flex
              flexDirection={{
                base: "column",
                sm: "column",
                md: "column",
                lg: "row",
                xl: "row",
              }}
              gap={3}
            >
              <Image src={blogs[0].image} alt="blog image" maxH={"300px"} />
              <Flex flexDirection={"column"} gap={3}>
                <Text color={"#4BB543"}>
                  {blogs[0].author} • {blogs[0].date}
                </Text>

                <Text fontSize={"2xl"} fontWeight={600}>
                  {blogs[0].title}
                </Text>

                <Text>{blogs[0].description}</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      {/* all blogs */}
      <Flex padding={"80px"} flexDirection={"column"}>
        <Text fontSize="2xl" fontWeight={"600"}>
          All blog posts
        </Text>
        <br />
        <Flex flexWrap={"wrap"} justifyContent={"space-between"} gap={5}>
          {currentItems.map((blog, index) => (
            <BlogCard
              key={index}
              author={blog.author}
              date={blog.date}
              title={blog.title}
              description={blog.description}
              image={blog.image}
              w={"396px"}
            />
          ))}
        </Flex>
      </Flex>
      <Divider />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next →"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="← previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName={"page-item"}
      />
    </DefaultLayout>
  );
}

function BlogCard({ author, date, title, description, image, ...rest }) {
  return (
    <Flex flexDirection={"column"} gap={3} {...rest}>
      <Image src={image} alt="blog image" />
      <Text color={"#4BB543"}>
        {author} • {date}
      </Text>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize={"2xl"} fontWeight={600}>
          {title}
        </Text>
        <Image src={arrow} w={"30px"} h={"30px"} />
      </Flex>
      <Text>{description}</Text>
    </Flex>
  );
}

const blogs = [
  {
    author: "Alec Whitten1",
    date: "17 Jan 2021",
    title: "How to get started with investing",
    description:
      "Investing can be a great way to build wealth and achieve your financial goals. Here are some tips to help you get started.",
    image: userImage,
  },
  {
    author: "Alec Whitten2",
    date: "17 Jan 2021",
    title: "How to get started with investing",
    description:
      "Investing can be a great way to build wealth and achieve your financial goals. Here are some tips to help you get started.",
    image: userImage,
  },
  {
    author: "Alec Whitten3",
    date: "17 Jan 2021",
    title: "How to get started with investing",
    description:
      "Investing can be a great way to build wealth and achieve your financial goals. Here are some tips to help you get started.",
    image: userImage,
  },
  {
    author: "Alec Whitten",
    date: "17 Jan 2021",
    title: "How to get started with investing",
    description:
      "Investing can be a great way to build wealth and achieve your financial goals. Here are some tips to help you get started.",
    image: userImage,
  },
  {
    author: "Alec Whitten",
    date: "17 Jan 2021",
    title: "How to get started with investing",
    description:
      "Investing can be a great way to build wealth and achieve your financial goals. Here are some tips to help you get started.",
    image: userImage,
  },
  {
    author: "Alec Whitten",
    date: "17 Jan 2021",
    title: "How to get started with investing",
    description:
      "Investing can be a great way to build wealth and achieve your financial goals. Here are some tips to help you get started.",
    image: userImage,
  },
  {
    author: "Alec Whitten",
    date: "17 Jan 2021",
    title: "How to get started with investing",
    description:
      "Investing can be a great way to build wealth and achieve your financial goals. Here are some tips to help you get started.",
    image: userImage,
  },
  {
    author: "Alec Whitten",
    date: "17 Jan 2021",
    title: "How to get started with investing",
    description:
      "Investing can be a great way to build wealth and achieve your financial goals. Here are some tips to help you get started.",
    image: userImage,
  },
  {
    author: "Alec Whitten",
    date: "17 Jan 2021",
    title: "How to get started with investing",
    description:
      "Investing can be a great way to build wealth and achieve your financial goals. Here are some tips to help you get started.",
    image: userImage,
  },
  {
    author: "Alec Whitten",
    date: "17 Jan 2021",
    title: "How to get started with investing",
    description:
      "Investing can be a great way to build wealth and achieve your financial goals. Here are some tips to help you get started.",
    image: userImage,
  },
  {
    author: "Alec Whitten",
    date: "17 Jan 2021",
    title: "How to get started with investing",
    description:
      "Investing can be a great way to build wealth and achieve your financial goals. Here are some tips to help you get started.",
    image: userImage,
  },
  {
    author: "Alec Whitten",
    date: "17 Jan 2021",
    title: "How to get started with investing",
    description:
      "Investing can be a great way to build wealth and achieve your financial goals. Here are some tips to help you get started.",
    image: userImage,
  },
  {
    author: "Alec Whitten",
    date: "17 Jan 2021",
    title: "How to get started with investing",
    description:
      "Investing can be a great way to build wealth and achieve your financial goals. Here are some tips to help you get started.",
    image: userImage,
  },
  {
    author: "Alec Whitten",
    date: "17 Jan 2021",
    title: "How to get started with investing",
    description:
      "Investing can be a great way to build wealth and achieve your financial goals. Here are some tips to help you get started.",
    image: userImage,
  },
  {
    author: "Alec Whitten",
    date: "17 Jan 2021",
    title: "How to get started with investing",
    description:
      "Investing can be a great way to build wealth and achieve your financial goals. Here are some tips to help you get started.",
    image: userImage,
  },
  {
    author: "Alec Whitten",
    date: "17 Jan 2021",
    title: "How to get started with investing",
    description:
      "Investing can be a great way to build wealth and achieve your financial goals. Here are some tips to help you get started.",
    image: userImage,
  },
  {
    author: "Alec Whitten",
    date: "17 Jan 2021",
    title: "How to get started with investing",
    description:
      "Investing can be a great way to build wealth and achieve your financial goals. Here are some tips to help you get started.",
    image: userImage,
  },
  {
    author: "Alec Whitten",
    date: "17 Jan 2021",
    title: "How to get started with investing",
    description:
      "Investing can be a great way to build wealth and achieve your financial goals. Here are some tips to help you get started.",
    image: userImage,
  },
  {
    author: "Alec Whitten",
    date: "17 Jan 2021",
    title: "How to get started with investing",
    description:
      "Investing can be a great way to build wealth and achieve your financial goals. Here are some tips to help you get started.",
    image: userImage,
  },
  {
    author: "Alec Whitten",
    date: "17 Jan 2021",
    title: "How to get started with investing",
    description:
      "Investing can be a great way to build wealth and achieve your financial goals. Here are some tips to help you get started.",
    image: userImage,
  },
  {
    author: "Alec Whitten",
    date: "17 Jan 2021",
    title: "How to get started with investing",
    description:
      "Investing can be a great way to build wealth and achieve your financial goals. Here are some tips to help you get started.",
    image: userImage,
  },
  {
    author: "Alec Whitten",
    date: "17 Jan 2021",
    title: "How to get started with investing",
    description:
      "Investing can be a great way to build wealth and achieve your financial goals. Here are some tips to help you get started.",
    image: userImage,
  },
  {
    author: "Alec Whitten",
    date: "17 Jan 2021",
    title: "How to get started with investing",
    description:
      "Investing can be a great way to build wealth and achieve your financial goals. Here are some tips to help you get started.",
    image: userImage,
  },
  {
    author: "Alec Whitten",
    date: "17 Jan 2021",
    title: "How to get started with investing",
    description:
      "Investing can be a great way to build wealth and achieve your financial goals. Here are some tips to help you get started.",
    image: userImage,
  },
  {
    author: "Alec Whitten",
    date: "17 Jan 2021",
    title: "How to get started with investing",
    description:
      "Investing can be a great way to build wealth and achieve your financial goals. Here are some tips to help you get started.",
    image: userImage,
  },
  {
    author: "Alec Whitten",
    date: "17 Jan 2021",
    title: "How to get started with investing",
    description:
      "Investing can be a great way to build wealth and achieve your financial goals. Here are some tips to help you get started.",
    image: userImage,
  },
  {
    author: "Alec Whitten",
    date: "17 Jan 2021",
    title: "How to get started with investing",
    description:
      "Investing can be a great way to build wealth and achieve your financial goals. Here are some tips to help you get started.",
    image: userImage,
  },
  {
    author: "Alec Whitten",
    date: "17 Jan 2021",
    title: "How to get started with investing",
    description:
      "Investing can be a great way to build wealth and achieve your financial goals. Here are some tips to help you get started.",
    image: userImage,
  },
];

export default BlogsPage;
