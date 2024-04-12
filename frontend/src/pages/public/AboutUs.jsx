import { Flex, Text, Container, Stack, chakra, Grid } from "@chakra-ui/react";
import DefaultLayout from "../../layouts/DefaultLayout";
import GradientLine from "../../components/gradient/GradientLine";
import ReactPlayer from "react-player";
import BackgroundAndThesis from "../../components/sections/BackgroundAndThesis";
import VisionAndMission from "../../components/sections/VisionAndMission";
import MeetOurTeam from "../../components/sections/MeetOurTeam";
function AboutUs() {
  const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  backToTop()
  return (
    <DefaultLayout>
      <br />
      <br />
      <br />

      <Flex
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        w={"100%"}
        h={"100%"}
        p={5}
        bg={"#FAF0E7"}
      >
        <Text fontSize="48px" fontWeight={"bold"}>
          About Us
        </Text>
        <Container p={5} textAlign={"center"}>
          <Text fontSize="14px" color={"#667085"}>
            Welcome to PEV, the pioneering VC in the MENA region, guiding startups from concept to success. We go beyond traditional investment, creating an ecosystem that nurtures genuine development. At PEV, we connect innovative entrepreneurs with the knowledge, network, and funding needed for high-impact businesses. Join us in shaping the future of the global startup community – where ideas become reality and success stories unfold.
          </Text>
        </Container>
      </Flex>
      <GradientLine />

      <Stack direction={{ base: "column", lg: "row" }} p={8}>
        <Flex px={"100px"}>
          <svg
            width="50"
            height="75"
            viewBox="0 0 110 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M109.706 89H67.5673C63.4503 75.6803 61.3918 61.8762 61.3918 47.5878C61.3918 33.0571 65.1456 21.5537 72.6531 13.0775C80.4027 4.35918 91.785 0 106.8 0V20.3429C94.6912 20.3429 88.6367 27.7293 88.6367 42.502V49.4041H109.706V89ZM48.3143 89H6.17551C2.0585 75.6803 0 61.8762 0 47.5878C0 33.0571 3.75374 21.5537 11.2612 13.0775C19.0109 4.35918 30.3932 0 45.4082 0V20.3429C33.2993 20.3429 27.2449 27.7293 27.2449 42.502V49.4041H48.3143V89Z"
              fill="#4BB543"
            />
          </svg>

          <Container maxW={"container.lg"}>
            <Stack spacing={6} p={8} alignItems={"start"} fontWeight={"500"}>
              <Text fontSize="32px" textAlign={"center"}>
                “At PEV, we recognize that the journey from concept to success requires more than just funding. We are dedicated to providing startups with the essential tools, support, and resources they need to flourish”
              </Text>
              <Text fontSize="14px">
                “What sets PEV apart is our focus on strengthening the global startup community. We bridge the gap between innovative entrepreneurs and the key elements for success. By connecting visionaries with the right mentors, industry experts, and investors, we catalyze the growth of high-impact businesses that redefine industries and ensure real impact.”
              </Text>
            </Stack>
          </Container>
        </Flex>
      </Stack>
      <Stack
        spacing={4}
        align={"center"}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <Text fontSize="48px" fontWeight="700" color="black">
          {" "}
          Our Track Record
        </Text>
        <Text>
          {" "}
          Everything you need to convert, engage, and retain more users.
        </Text>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={"80px"}
          p={8}
          color={"#4BB543"}
        >
          <Stack
            borderRight={{ base: "none", md: "1px solid " }}
            pr={8}
            borderBottom={{ base: "1px solid ", md: "none" }}
          >
            <Text fontSize={"64px"} fontWeight={"700"}>
              40+
            </Text>
            <Text>Integerations</Text>
          </Stack>
          <Stack
            borderRight={{ base: "none", md: "1px solid " }}
            pr={8}
            borderBottom={{ base: "1px solid ", md: "none" }}
          >
            <Text fontSize={"64px"} fontWeight={"700"}>
              600%
            </Text>
            <Text>Return On Investment</Text>
          </Stack>
          <Stack pr={8}>
            <Text fontSize={"64px"} fontWeight={"700"}>
              4K
            </Text>
            <Text>Global customers</Text>
          </Stack>
        </Stack>
      </Stack>

      <BackgroundAndThesis />

      <VisionAndMission />
      <GradientLine />
      <MeetOurTeam />
      <Flex px={"100px"} w={"100%"} py={8}>
        <Flex
          p={8}
          w={"100%"}
          px={"100px"}
          direction={"column"}
          align={"center"}
          borderTop={"1px solid #4BB543"}
          gap={6}
        >
          <Stack spacing={4} align={"center"}>
            <Text fontSize="48px" fontWeight="700" color="#4BB543">
              Join 4,000+ startups already growing
            </Text>To be the leading catalyst for transformative entrepreneurship, driving sustainable development and shaping the future of the global startup landscape
          </Stack>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(5, 1fr)",
            }}
            gap={2}
          >
            <svg fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.2775 22.3182C14.0998 19.25 17.2537 16.0961 20.322 15.2738L39.4509 10.1474C42.5192 9.32516 44.3399 11.1459 43.5177 14.2142L38.3913 33.3432C37.569 36.4114 34.4151 39.5653 31.3469 40.3876L12.2179 45.514C9.14963 46.3362 7.32888 44.5155 8.15115 41.4472L13.2775 22.3182Z"
                fill="#9E77ED"
              />
              <path
                d="M5.60882 14.6493C6.43108 11.5811 9.58498 8.42717 12.6533 7.60491L31.7822 2.47854C34.8505 1.65628 36.6713 3.47702 35.849 6.54529L30.7226 25.6743C29.9004 28.7425 26.7465 31.8964 23.6782 32.7187L4.5492 37.8451C1.48093 38.6673 -0.339816 36.8466 0.482448 33.7783L5.60882 14.6493Z"
                fill="#6941C6"
              />
              <path
                d="M61.292 31.424H67.872V34H58.1V14.54H61.292V31.424Z"
                fill="#101828"
              />
              <path
                d="M69.4774 26.216C69.4774 24.6666 69.7948 23.2946 70.4294 22.1C71.0828 20.9053 71.9601 19.9813 73.0614 19.328C74.1814 18.656 75.4134 18.32 76.7574 18.32C77.9708 18.32 79.0254 18.5626 79.9214 19.048C80.8361 19.5146 81.5641 20.1026 82.1054 20.812V18.572H85.3254V34H82.1054V31.704C81.5641 32.432 80.8268 33.0386 79.8934 33.524C78.9601 34.0093 77.8961 34.252 76.7014 34.252C75.3761 34.252 74.1628 33.916 73.0614 33.244C71.9601 32.5533 71.0828 31.6013 70.4294 30.388C69.7948 29.156 69.4774 27.7653 69.4774 26.216ZM82.1054 26.272C82.1054 25.208 81.8814 24.284 81.4334 23.5C81.0041 22.716 80.4348 22.1186 79.7254 21.708C79.0161 21.2973 78.2508 21.092 77.4294 21.092C76.6081 21.092 75.8428 21.2973 75.1334 21.708C74.4241 22.1 73.8454 22.688 73.3974 23.472C72.9681 24.2373 72.7534 25.152 72.7534 26.216C72.7534 27.28 72.9681 28.2133 73.3974 29.016C73.8454 29.8186 74.4241 30.4346 75.1334 30.864C75.8614 31.2746 76.6268 31.48 77.4294 31.48C78.2508 31.48 79.0161 31.2746 79.7254 30.864C80.4348 30.4533 81.0041 29.856 81.4334 29.072C81.8814 28.2693 82.1054 27.336 82.1054 26.272Z"
                fill="#101828"
              />
              <path
                d="M103.406 18.572L93.942 41.252H90.638L93.774 33.748L87.698 18.572H91.254L95.594 30.332L100.102 18.572H103.406Z"
                fill="#101828"
              />
              <path
                d="M119.955 25.908C119.955 26.4866 119.918 27.0093 119.843 27.476H108.055C108.148 28.708 108.606 29.6973 109.427 30.444C110.248 31.1906 111.256 31.564 112.451 31.564C114.168 31.564 115.382 30.8453 116.091 29.408H119.535C119.068 30.8266 118.219 31.9933 116.987 32.908C115.774 33.804 114.262 34.252 112.451 34.252C110.976 34.252 109.651 33.9253 108.475 33.272C107.318 32.6 106.403 31.6666 105.731 30.472C105.078 29.2586 104.751 27.8586 104.751 26.272C104.751 24.6853 105.068 23.2946 105.703 22.1C106.356 20.8866 107.262 19.9533 108.419 19.3C109.595 18.6466 110.939 18.32 112.451 18.32C113.907 18.32 115.204 18.6373 116.343 19.272C117.482 19.9066 118.368 20.8026 119.003 21.96C119.638 23.0986 119.955 24.4146 119.955 25.908ZM116.623 24.9C116.604 23.724 116.184 22.7813 115.363 22.072C114.542 21.3626 113.524 21.008 112.311 21.008C111.21 21.008 110.267 21.3626 109.483 22.072C108.699 22.7626 108.232 23.7053 108.083 24.9H116.623Z"
                fill="#101828"
              />
              <path
                d="M126.288 20.812C126.755 20.028 127.371 19.4213 128.136 18.992C128.92 18.544 129.844 18.32 130.908 18.32V21.624H130.096C128.845 21.624 127.893 21.9413 127.24 22.576C126.605 23.2106 126.288 24.312 126.288 25.88V34H123.096V18.572H126.288V20.812Z"
                fill="#101828"
              />
              <path
                d="M139.442 34.252C138.229 34.252 137.137 34.0373 136.166 33.608C135.214 33.16 134.458 32.5626 133.898 31.816C133.338 31.0506 133.04 30.2013 133.002 29.268H136.306C136.362 29.9213 136.67 30.472 137.23 30.92C137.809 31.3493 138.528 31.564 139.386 31.564C140.282 31.564 140.973 31.396 141.458 31.06C141.962 30.7053 142.214 30.2573 142.214 29.716C142.214 29.1373 141.934 28.708 141.374 28.428C140.833 28.148 139.965 27.84 138.77 27.504C137.613 27.1866 136.67 26.8786 135.942 26.58C135.214 26.2813 134.58 25.824 134.038 25.208C133.516 24.592 133.254 23.78 133.254 22.772C133.254 21.9506 133.497 21.204 133.982 20.532C134.468 19.8413 135.158 19.3 136.054 18.908C136.969 18.516 138.014 18.32 139.19 18.32C140.945 18.32 142.354 18.768 143.418 19.664C144.501 20.5413 145.08 21.7453 145.154 23.276H141.962C141.906 22.5853 141.626 22.0346 141.122 21.624C140.618 21.2133 139.937 21.008 139.078 21.008C138.238 21.008 137.594 21.1666 137.146 21.484C136.698 21.8013 136.474 22.2213 136.474 22.744C136.474 23.1546 136.624 23.5 136.922 23.78C137.221 24.06 137.585 24.284 138.014 24.452C138.444 24.6013 139.078 24.7973 139.918 25.04C141.038 25.3386 141.953 25.6466 142.662 25.964C143.39 26.2626 144.016 26.7106 144.538 27.308C145.061 27.9053 145.332 28.6986 145.35 29.688C145.35 30.5653 145.108 31.3493 144.622 32.04C144.137 32.7306 143.446 33.272 142.55 33.664C141.673 34.056 140.637 34.252 139.442 34.252Z"
                fill="#101828"
              />
            </svg>
            <svg fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect
                x="0.75"
                y="19.2"
                width="9.59998"
                height="9.59999"
                fill="#039855"
              />
              <rect
                x="29.55"
                y="28.8"
                width="9.6"
                height="9.59999"
                transform="rotate(180 29.55 28.8)"
                fill="#027A48"
              />
              <path
                d="M10.35 19.2L19.95 9.59998V19.2L10.35 28.7999V19.2Z"
                fill="#A6F4C5"
              />
              <path
                d="M19.95 28.8L10.35 38.4L10.35 28.8L19.95 19.2L19.95 28.8Z"
                fill="#6CE9A6"
              />
              <path
                d="M0.75 19.2L19.95 0V9.59999L10.35 19.2H0.75Z"
                fill="#32D583"
              />
              <path
                d="M29.5499 28.8L10.3499 48L10.3499 38.4L19.9499 28.8L29.5499 28.8Z"
                fill="#12B76A"
              />
              <path
                d="M50.458 34.28C48.946 34.28 47.4806 34.0653 46.062 33.636C44.662 33.2066 43.5513 32.6373 42.73 31.928L43.99 29.1C44.7926 29.7346 45.7726 30.2573 46.93 30.668C48.106 31.06 49.282 31.256 50.458 31.256C51.914 31.256 52.9966 31.0226 53.706 30.556C54.434 30.0893 54.798 29.4733 54.798 28.708C54.798 28.148 54.5926 27.6906 54.182 27.336C53.79 26.9626 53.286 26.6733 52.67 26.468C52.054 26.2626 51.214 26.0293 50.15 25.768C48.6566 25.4133 47.4433 25.0586 46.51 24.704C45.5953 24.3493 44.802 23.7986 44.13 23.052C43.4766 22.2866 43.15 21.26 43.15 19.972C43.15 18.8893 43.4393 17.9093 44.018 17.032C44.6153 16.136 45.502 15.4266 46.678 14.904C47.8726 14.3813 49.3286 14.12 51.046 14.12C52.2406 14.12 53.4166 14.2693 54.574 14.568C55.7313 14.8666 56.73 15.296 57.57 15.856L56.422 18.684C55.5633 18.18 54.6673 17.7973 53.734 17.536C52.8006 17.2746 51.8953 17.144 51.018 17.144C49.5806 17.144 48.5073 17.3866 47.798 17.872C47.1073 18.3573 46.762 19.0013 46.762 19.804C46.762 20.364 46.958 20.8213 47.35 21.176C47.7606 21.5306 48.274 21.8106 48.89 22.016C49.506 22.2213 50.346 22.4546 51.41 22.716C52.866 23.052 54.0606 23.4066 54.994 23.78C55.9273 24.1346 56.7206 24.6853 57.374 25.432C58.046 26.1786 58.382 27.1866 58.382 28.456C58.382 29.5386 58.0833 30.5186 57.486 31.396C56.9073 32.2733 56.0206 32.9733 54.826 33.496C53.6313 34.0186 52.1753 34.28 50.458 34.28Z"
                fill="#101828"
              />
              <path
                d="M61.6553 19.048H65.1553V34H61.6553V19.048ZM63.4193 16.584C62.7847 16.584 62.2527 16.388 61.8233 15.996C61.394 15.5853 61.1793 15.0813 61.1793 14.484C61.1793 13.8866 61.394 13.392 61.8233 13C62.2527 12.5893 62.7847 12.384 63.4193 12.384C64.054 12.384 64.586 12.58 65.0153 12.972C65.4447 13.3453 65.6593 13.8213 65.6593 14.4C65.6593 15.016 65.4447 15.5386 65.0153 15.968C64.6047 16.3786 64.0727 16.584 63.4193 16.584Z"
                fill="#101828"
              />
              <path
                d="M74.3691 34.196C73.1558 34.196 71.9704 34.0373 70.8131 33.72C69.6558 33.4026 68.7318 33.0013 68.0411 32.516L69.3851 29.856C70.0571 30.304 70.8598 30.668 71.7931 30.948C72.7451 31.2093 73.6784 31.34 74.5931 31.34C76.6838 31.34 77.7291 30.7893 77.7291 29.688C77.7291 29.1653 77.4584 28.8013 76.9171 28.596C76.3944 28.3906 75.5451 28.1946 74.3691 28.008C73.1371 27.8213 72.1291 27.6066 71.3451 27.364C70.5798 27.1213 69.9078 26.7013 69.3291 26.104C68.7691 25.488 68.4891 24.6386 68.4891 23.556C68.4891 22.1373 69.0771 21.008 70.2531 20.168C71.4478 19.3093 73.0531 18.88 75.0691 18.88C76.0958 18.88 77.1224 19.0013 78.1491 19.244C79.1758 19.468 80.0158 19.776 80.6691 20.168L79.3251 22.828C78.0558 22.0813 76.6278 21.708 75.0411 21.708C74.0144 21.708 73.2304 21.8666 72.6891 22.184C72.1664 22.4826 71.9051 22.884 71.9051 23.388C71.9051 23.948 72.1851 24.3493 72.7451 24.592C73.3238 24.816 74.2104 25.0306 75.4051 25.236C76.5998 25.4226 77.5798 25.6373 78.3451 25.88C79.1104 26.1226 79.7638 26.5333 80.3051 27.112C80.8651 27.6906 81.1451 28.512 81.1451 29.576C81.1451 30.976 80.5384 32.096 79.3251 32.936C78.1118 33.776 76.4598 34.196 74.3691 34.196Z"
                fill="#101828"
              />
              <path
                d="M97.8858 19.048L90.8858 35.204C90.2325 36.828 89.4391 37.9666 88.5058 38.62C87.5725 39.292 86.4431 39.628 85.1178 39.628C84.3711 39.628 83.6338 39.5066 82.9058 39.264C82.1778 39.0213 81.5805 38.6853 81.1138 38.256L82.5138 35.68C82.8498 35.9973 83.2418 36.2493 83.6898 36.436C84.1565 36.6226 84.6231 36.716 85.0898 36.716C85.7058 36.716 86.2098 36.5573 86.6018 36.24C87.0125 35.9226 87.3858 35.3906 87.7218 34.644L87.9738 34.056L81.4498 19.048H85.0898L89.7938 30.108L94.5258 19.048H97.8858Z"
                fill="#101828"
              />
              <path
                d="M108.361 18.88C109.817 18.88 111.115 19.1973 112.253 19.832C113.411 20.4666 114.316 21.3626 114.969 22.52C115.623 23.6773 115.949 25.012 115.949 26.524C115.949 28.036 115.623 29.38 114.969 30.556C114.316 31.7133 113.411 32.6093 112.253 33.244C111.115 33.8786 109.817 34.196 108.361 34.196C106.345 34.196 104.749 33.524 103.573 32.18V39.432H100.073V19.048H103.405V21.008C103.984 20.2986 104.693 19.7666 105.533 19.412C106.392 19.0573 107.335 18.88 108.361 18.88ZM107.969 31.2C109.257 31.2 110.312 30.7706 111.133 29.912C111.973 29.0533 112.393 27.924 112.393 26.524C112.393 25.124 111.973 23.9946 111.133 23.136C110.312 22.2773 109.257 21.848 107.969 21.848C107.129 21.848 106.373 22.044 105.701 22.436C105.029 22.8093 104.497 23.3506 104.105 24.06C103.713 24.7693 103.517 25.5906 103.517 26.524C103.517 27.4573 103.713 28.2786 104.105 28.988C104.497 29.6973 105.029 30.248 105.701 30.64C106.373 31.0133 107.129 31.2 107.969 31.2Z"
                fill="#101828"
              />
              <path
                d="M127.753 18.88C129.638 18.88 131.15 19.4306 132.289 20.532C133.427 21.6333 133.997 23.2666 133.997 25.432V34H130.497V25.88C130.497 24.5733 130.189 23.5933 129.573 22.94C128.957 22.268 128.079 21.932 126.941 21.932C125.653 21.932 124.635 22.324 123.889 23.108C123.142 23.8733 122.769 24.984 122.769 26.44V34H119.269V13.224H122.769V20.784C123.347 20.168 124.057 19.7013 124.897 19.384C125.755 19.048 126.707 18.88 127.753 18.88Z"
                fill="#101828"
              />
              <path
                d="M152.913 19.048V34H149.581V32.096C149.021 32.768 148.321 33.2906 147.481 33.664C146.641 34.0186 145.735 34.196 144.765 34.196C142.767 34.196 141.19 33.6453 140.033 32.544C138.894 31.424 138.325 29.772 138.325 27.588V19.048H141.825V27.112C141.825 28.456 142.123 29.464 142.721 30.136C143.337 30.7893 144.205 31.116 145.325 31.116C146.575 31.116 147.565 30.7333 148.293 29.968C149.039 29.184 149.413 28.064 149.413 26.608V19.048H152.913Z"
                fill="#101828"
              />
              <path
                d="M162.115 34.196C160.902 34.196 159.716 34.0373 158.559 33.72C157.402 33.4026 156.478 33.0013 155.787 32.516L157.131 29.856C157.803 30.304 158.606 30.668 159.539 30.948C160.491 31.2093 161.424 31.34 162.339 31.34C164.43 31.34 165.475 30.7893 165.475 29.688C165.475 29.1653 165.204 28.8013 164.663 28.596C164.14 28.3906 163.291 28.1946 162.115 28.008C160.883 27.8213 159.875 27.6066 159.091 27.364C158.326 27.1213 157.654 26.7013 157.075 26.104C156.515 25.488 156.235 24.6386 156.235 23.556C156.235 22.1373 156.823 21.008 157.999 20.168C159.194 19.3093 160.799 18.88 162.815 18.88C163.842 18.88 164.868 19.0013 165.895 19.244C166.922 19.468 167.762 19.776 168.415 20.168L167.071 22.828C165.802 22.0813 164.374 21.708 162.787 21.708C161.76 21.708 160.976 21.8666 160.435 22.184C159.912 22.4826 159.651 22.884 159.651 23.388C159.651 23.948 159.931 24.3493 160.491 24.592C161.07 24.816 161.956 25.0306 163.151 25.236C164.346 25.4226 165.326 25.6373 166.091 25.88C166.856 26.1226 167.51 26.5333 168.051 27.112C168.611 27.6906 168.891 28.512 168.891 29.576C168.891 30.976 168.284 32.096 167.071 32.936C165.858 33.776 164.206 34.196 162.115 34.196Z"
                fill="#101828"
              />
            </svg>
            <svg fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.2143 33.4286C24.893 33.4286 31.9285 26.393 31.9285 17.7143C31.9285 16.7307 31.8382 15.7682 31.6653 14.8347C30.7318 14.6618 29.7693 14.5714 28.7857 14.5714C20.1069 14.5714 13.0714 21.6069 13.0714 30.2857C13.0714 31.2693 13.1618 32.2318 13.3347 33.1653C14.2682 33.3382 15.2307 33.4286 16.2143 33.4286Z"
                fill="#175CD3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.3347 33.1653C6.03115 31.8127 0.499969 25.4095 0.499969 17.7143C0.499969 9.03553 7.5355 2 16.2143 2C23.9094 2 30.3127 7.53118 31.6653 14.8347C30.7318 14.6618 29.7693 14.5714 28.7857 14.5714C20.1069 14.5714 13.0714 21.607 13.0714 30.2857C13.0714 31.2693 13.1618 32.2318 13.3347 33.1653Z"
                fill="#1570EF"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.2142 33.4285C24.893 33.4285 31.9285 26.393 31.9285 17.7142C31.9285 16.7306 31.8381 15.7681 31.6652 14.8346C38.9687 16.1872 44.4999 22.5905 44.4999 30.2856C44.4999 38.9644 37.4644 45.9999 28.7856 45.9999C21.0905 45.9999 14.6872 40.4687 13.3346 33.1652C14.2681 33.3381 15.2306 33.4285 16.2142 33.4285Z"
                fill="#2E90FA"
              />
              <path
                d="M74.728 28.904C74.168 30.7146 73.188 32.068 71.788 32.964C70.388 33.8413 68.7546 34.28 66.888 34.28C65.0586 34.28 63.472 33.8973 62.128 33.132C60.8026 32.3666 59.776 31.2746 59.048 29.856C58.3386 28.4373 57.984 26.7386 57.984 24.76C57.984 22.7813 58.348 21.0826 59.076 19.664C59.804 18.2453 60.8306 17.1533 62.156 16.388C63.4813 15.6226 65.04 15.24 66.832 15.24C68.7173 15.24 70.332 15.6413 71.676 16.444C73.0386 17.228 73.972 18.4226 74.476 20.028L70.976 21.512C70.6586 20.392 70.1733 19.5986 69.52 19.132C68.8666 18.6466 68.0266 18.404 67 18.404C65.4693 18.404 64.2466 18.9546 63.332 20.056C62.436 21.1386 61.988 22.7066 61.988 24.76C61.988 26.7946 62.4173 28.3626 63.276 29.464C64.1346 30.5653 65.376 31.116 67 31.116C68.008 31.116 68.876 30.8453 69.604 30.304C70.3506 29.7627 70.8733 28.9413 71.172 27.84L74.728 28.904Z"
                fill="#101828"
              />
              <path
                d="M79.5613 17.984C77.9746 17.984 77.1813 17.3026 77.1813 15.94C77.1813 14.5586 77.9746 13.868 79.5613 13.868C81.1479 13.868 81.9413 14.5586 81.9413 15.94C81.9413 17.3026 81.1479 17.984 79.5613 17.984ZM81.4653 20V34H77.6293V20H81.4653Z"
                fill="#101828"
              />
              <path
                d="M85.5316 34V20H88.8636L89.1156 22.744C89.4703 21.792 90.0023 21.0546 90.7116 20.532C91.4396 19.9906 92.3543 19.72 93.4556 19.72C94.1089 19.72 94.6129 19.8226 94.9676 20.028L94.5196 23.248C94.3329 23.192 94.0996 23.1453 93.8196 23.108C93.5583 23.052 93.2129 23.024 92.7836 23.024C92.2049 23.024 91.6543 23.164 91.1316 23.444C90.6276 23.7053 90.2076 24.116 89.8716 24.676C89.5356 25.2173 89.3676 25.908 89.3676 26.748V34H85.5316Z"
                fill="#101828"
              />
              <path
                d="M103.427 19.72C105.293 19.72 106.74 20.1213 107.767 20.924C108.812 21.7266 109.503 22.6973 109.839 23.836L106.255 25.124C105.881 23.4253 104.957 22.576 103.483 22.576C102.419 22.576 101.588 22.9493 100.991 23.696C100.412 24.4426 100.123 25.5533 100.123 27.028C100.123 28.5213 100.421 29.632 101.019 30.36C101.635 31.0693 102.465 31.424 103.511 31.424C105.135 31.424 106.105 30.5933 106.423 28.932L109.895 30.052C109.577 31.3027 108.868 32.32 107.767 33.104C106.684 33.888 105.275 34.28 103.539 34.28C102.083 34.28 100.804 33.9907 99.7027 33.412C98.62 32.8333 97.78 32.0026 97.1827 30.92C96.5853 29.8373 96.2867 28.5306 96.2867 27C96.2867 25.4693 96.5853 24.1626 97.1827 23.08C97.7987 21.9973 98.6387 21.1666 99.7027 20.588C100.785 20.0093 102.027 19.72 103.427 19.72Z"
                fill="#101828"
              />
              <path
                d="M119.259 19.72C120.659 19.72 121.901 20.0093 122.983 20.588C124.066 21.1666 124.906 21.9973 125.503 23.08C126.119 24.1626 126.427 25.4693 126.427 27C126.427 28.5306 126.119 29.8373 125.503 30.92C124.906 32.0026 124.066 32.8333 122.983 33.412C121.901 33.9907 120.659 34.28 119.259 34.28C117.841 34.28 116.59 33.9907 115.507 33.412C114.443 32.8333 113.603 32.0026 112.987 30.92C112.39 29.8373 112.091 28.5306 112.091 27C112.091 25.4693 112.39 24.1626 112.987 23.08C113.603 21.9973 114.443 21.1666 115.507 20.588C116.59 20.0093 117.841 19.72 119.259 19.72ZM119.259 22.576C118.214 22.576 117.393 22.9493 116.795 23.696C116.217 24.424 115.927 25.5253 115.927 27C115.927 28.4746 116.217 29.5853 116.795 30.332C117.393 31.06 118.214 31.424 119.259 31.424C120.286 31.424 121.089 31.06 121.667 30.332C122.265 29.5853 122.563 28.4746 122.563 27C122.563 25.5253 122.265 24.424 121.667 23.696C121.089 22.9493 120.286 22.576 119.259 22.576Z"
                fill="#101828"
              />
              <path
                d="M136.021 19.72C137.421 19.72 138.662 20.0093 139.745 20.588C140.828 21.1666 141.668 21.9973 142.265 23.08C142.881 24.1626 143.189 25.4693 143.189 27C143.189 28.5306 142.881 29.8373 142.265 30.92C141.668 32.0026 140.828 32.8333 139.745 33.412C138.662 33.9907 137.421 34.28 136.021 34.28C134.602 34.28 133.352 33.9907 132.269 33.412C131.205 32.8333 130.365 32.0026 129.749 30.92C129.152 29.8373 128.853 28.5306 128.853 27C128.853 25.4693 129.152 24.1626 129.749 23.08C130.365 21.9973 131.205 21.1666 132.269 20.588C133.352 20.0093 134.602 19.72 136.021 19.72ZM136.021 22.576C134.976 22.576 134.154 22.9493 133.557 23.696C132.978 24.424 132.689 25.5253 132.689 27C132.689 28.4746 132.978 29.5853 133.557 30.332C134.154 31.06 134.976 31.424 136.021 31.424C137.048 31.424 137.85 31.06 138.429 30.332C139.026 29.5853 139.325 28.4746 139.325 27C139.325 25.5253 139.026 24.424 138.429 23.696C137.85 22.9493 137.048 22.576 136.021 22.576Z"
                fill="#101828"
              />
              <path
                d="M150.179 13.868V29.688C150.179 30.3413 150.291 30.7986 150.515 31.06C150.739 31.3213 151.112 31.452 151.635 31.452C151.952 31.452 152.213 31.4333 152.419 31.396C152.624 31.3587 152.885 31.284 153.203 31.172L152.867 33.692C152.549 33.8786 152.148 34.0186 151.663 34.112C151.196 34.224 150.729 34.28 150.263 34.28C148.9 34.28 147.901 33.9533 147.267 33.3C146.651 32.628 146.343 31.564 146.343 30.108V13.868H150.179Z"
                fill="#101828"
              />
              <path
                d="M161.836 34.28C159.634 34.28 157.87 33.6453 156.544 32.376C155.219 31.088 154.556 29.296 154.556 27C154.556 25.4693 154.855 24.1626 155.452 23.08C156.05 21.9973 156.88 21.1666 157.944 20.588C159.027 20.0093 160.259 19.72 161.64 19.72C163.059 19.72 164.263 20.0093 165.252 20.588C166.242 21.148 166.998 21.9226 167.52 22.912C168.043 23.8826 168.304 24.9933 168.304 26.244C168.304 26.6173 168.295 26.972 168.276 27.308C168.258 27.644 168.23 27.9426 168.192 28.204H158.308C158.458 29.2866 158.831 30.0986 159.428 30.64C160.044 31.1626 160.838 31.424 161.808 31.424C162.63 31.424 163.292 31.2653 163.796 30.948C164.3 30.6306 164.692 30.192 164.972 29.632L168.024 30.808C167.576 31.9093 166.792 32.768 165.672 33.384C164.552 33.9813 163.274 34.28 161.836 34.28ZM161.612 22.548C159.802 22.548 158.71 23.5466 158.336 25.544H164.636C164.524 24.5733 164.207 23.836 163.684 23.332C163.18 22.8093 162.49 22.548 161.612 22.548Z"
                fill="#101828"
              />
              <path
                d="M177.155 34.28C175.736 34.28 174.439 34.028 173.263 33.524C172.106 33.02 171.163 32.3106 170.435 31.396L172.647 29.156C173.095 29.828 173.692 30.3787 174.439 30.808C175.186 31.2373 176.072 31.452 177.099 31.452C177.827 31.452 178.406 31.3493 178.835 31.144C179.283 30.92 179.507 30.5746 179.507 30.108C179.507 29.8093 179.404 29.5573 179.199 29.352C178.994 29.128 178.583 28.9506 177.967 28.82L175.503 28.316C173.879 27.98 172.722 27.476 172.031 26.804C171.359 26.1133 171.023 25.2266 171.023 24.144C171.023 23.3786 171.247 22.66 171.695 21.988C172.162 21.316 172.852 20.7746 173.767 20.364C174.682 19.9346 175.82 19.72 177.183 19.72C180.02 19.72 182.055 20.588 183.287 22.324L180.991 24.564C180.58 23.9106 180.039 23.416 179.367 23.08C178.714 22.7253 178.023 22.548 177.295 22.548C175.652 22.548 174.831 23.0053 174.831 23.92C174.831 24.2186 174.962 24.48 175.223 24.704C175.484 24.9093 175.96 25.0866 176.651 25.236L179.507 25.824C180.888 26.104 181.878 26.58 182.475 27.252C183.072 27.9053 183.371 28.6986 183.371 29.632C183.371 30.976 182.83 32.0867 181.747 32.964C180.683 33.8413 179.152 34.28 177.155 34.28Z"
                fill="#101828"
              />
            </svg>
            <svg fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.25 2C10.0997 2 0.25 11.8497 0.25 24C0.25 36.1503 10.0997 46 22.25 46C33.151 46 42.2002 38.0716 43.9458 27.6667H43.7879C42.1598 33.9925 36.4174 38.6667 29.5833 38.6667C21.4832 38.6667 14.9167 32.1002 14.9167 24C14.9167 15.8998 21.4832 9.33333 29.5833 9.33333C36.4174 9.33333 42.1598 14.0075 43.7879 20.3333H43.9458C42.2002 9.92838 33.151 2 22.25 2Z"
                fill="#A4BCFD"
              />
              <path
                d="M0.25 24C0.25 11.8497 10.0997 2 22.25 2C33.151 2 42.2002 9.92838 43.9458 20.3333H29.1213C27.4931 14.0075 21.7507 9.33333 14.9167 9.33333C6.81649 9.33333 0.25 15.8998 0.25 24Z"
                fill="#3538CD"
              />
              <path
                d="M0.25 24C0.25 36.1503 10.0997 46 22.25 46C33.151 46 42.2002 38.0716 43.9458 27.6667H29.1213C27.4931 33.9925 21.7507 38.6667 14.9167 38.6667C6.81649 38.6667 0.25 32.1002 0.25 24Z"
                fill="#3538CD"
              />
              <path
                d="M75.6889 20.5071C75.0625 15.983 71.5824 13.358 67.0682 13.358C61.7486 13.358 57.7415 17.2358 57.7415 23.8182C57.7415 30.3906 61.6989 34.2784 67.0682 34.2784C71.9105 34.2784 75.1222 31.1463 75.6889 27.2585L71.9702 27.2387C71.5028 29.625 69.554 30.9673 67.1179 30.9673C63.8168 30.9673 61.4503 28.4915 61.4503 23.8182C61.4503 19.2244 63.7969 16.6691 67.1278 16.6691C69.6037 16.6691 71.5426 18.071 71.9702 20.5071H75.6889Z"
                fill="#101828"
              />
              <path
                d="M83.3029 34.3083C85.6992 34.3083 87.131 33.1847 87.7873 31.902H87.9066V34H91.3668V23.7784C91.3668 19.7415 88.0756 18.5284 85.1623 18.5284C81.9506 18.5284 79.4847 19.9602 78.6893 22.7443L82.0501 23.2216C82.408 22.1776 83.4222 21.2827 85.1822 21.2827C86.8526 21.2827 87.7674 22.1378 87.7674 23.6392V23.6989C87.7674 24.733 86.6836 24.7827 83.989 25.071C81.0259 25.3892 78.1921 26.2742 78.1921 29.7145C78.1921 32.7174 80.3895 34.3083 83.3029 34.3083ZM84.2376 31.6634C82.7361 31.6634 81.6623 30.9773 81.6623 29.6548C81.6623 28.2727 82.8654 27.696 84.4762 27.4673C85.4208 27.3381 87.31 27.0994 87.7773 26.7216V28.5213C87.7773 30.2216 86.4052 31.6634 84.2376 31.6634Z"
                fill="#101828"
              />
              <path
                d="M102.613 18.7273H99.5998V15.0682H96.0003V18.7273H93.8327V21.5114H96.0003V30.0029C95.9805 32.8764 98.0685 34.2884 100.773 34.2088C101.797 34.179 102.503 33.9801 102.891 33.8509L102.284 31.037C102.086 31.0867 101.678 31.1762 101.23 31.1762C100.326 31.1762 99.5998 30.858 99.5998 29.4063V21.5114H102.613V18.7273Z"
                fill="#101828"
              />
              <path
                d="M110.018 34.3083C112.414 34.3083 113.846 33.1847 114.502 31.902H114.621V34H118.082V23.7784C118.082 19.7415 114.79 18.5284 111.877 18.5284C108.665 18.5284 106.2 19.9602 105.404 22.7443L108.765 23.2216C109.123 22.1776 110.137 21.2827 111.897 21.2827C113.567 21.2827 114.482 22.1378 114.482 23.6392V23.6989C114.482 24.733 113.398 24.7827 110.704 25.071C107.741 25.3892 104.907 26.2742 104.907 29.7145C104.907 32.7174 107.104 34.3083 110.018 34.3083ZM110.952 31.6634C109.451 31.6634 108.377 30.9773 108.377 29.6548C108.377 28.2727 109.58 27.696 111.191 27.4673C112.136 27.3381 114.025 27.0994 114.492 26.7216V28.5213C114.492 30.2216 113.12 31.6634 110.952 31.6634Z"
                fill="#101828"
              />
              <path
                d="M125.3 13.6364H121.701V34H125.3V13.6364Z"
                fill="#101828"
              />
              <path
                d="M135.664 34.2983C140.138 34.2983 142.982 31.1463 142.982 26.4233C142.982 21.6904 140.138 18.5284 135.664 18.5284C131.189 18.5284 128.346 21.6904 128.346 26.4233C128.346 31.1463 131.189 34.2983 135.664 34.2983ZM135.684 31.4148C133.208 31.4148 131.995 29.2074 131.995 26.4134C131.995 23.6193 133.208 21.3821 135.684 21.3821C138.12 21.3821 139.333 23.6193 139.333 26.4134C139.333 29.2074 138.12 31.4148 135.684 31.4148Z"
                fill="#101828"
              />
              <path
                d="M152.679 40.0455C156.805 40.0455 159.848 38.1563 159.848 34.2486V18.7273H156.298V21.2529H156.099C155.553 20.1492 154.409 18.5284 151.714 18.5284C148.185 18.5284 145.41 21.2926 145.41 26.3139C145.41 31.2955 148.185 33.7813 151.705 33.7813C154.32 33.7813 155.543 32.3793 156.099 31.2557H156.278V34.1492C156.278 36.3963 154.787 37.321 152.739 37.321C150.571 37.321 149.616 36.2969 149.179 35.402L145.937 36.1875C146.594 38.3253 148.791 40.0455 152.679 40.0455ZM152.709 30.9574C150.332 30.9574 149.08 29.108 149.08 26.2941C149.08 23.5199 150.312 21.4816 152.709 21.4816C155.026 21.4816 156.298 23.4006 156.298 26.2941C156.298 29.2074 155.006 30.9574 152.709 30.9574Z"
                fill="#101828"
              />
            </svg>
            <svg fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22 36.4667C28.8851 36.4667 34.4667 30.8851 34.4667 24C34.4667 17.1149 28.8851 11.5333 22 11.5333C15.1148 11.5333 9.53333 17.1149 9.53333 24C9.53333 30.8851 15.1148 36.4667 22 36.4667ZM22 46C34.1503 46 44 36.1503 44 24C44 11.8497 34.1503 2 22 2C9.84973 2 0 11.8497 0 24C0 36.1503 9.84973 46 22 46Z"
                fill="#6938EF"
              />
              <path
                d="M22.2516 24.4817C24.5427 22.1906 28.2573 22.1906 30.5484 24.4817L41.9563 35.8897C44.2474 38.1807 44.2474 41.8953 41.9563 44.1864C39.6653 46.4775 35.9507 46.4775 33.6596 44.1864L22.2516 32.7784C19.9606 30.4873 19.9606 26.7727 22.2516 24.4817Z"
                fill="#F670C7"
              />
              <path
                d="M25.455 35.9817L32.7003 43.2271C36.1755 41.2889 39.0708 38.4359 41.0604 34.9938L33.8745 27.8078C32.6122 31.7472 29.444 34.8336 25.455 35.9817Z"
                fill="#6519BA"
              />
              <path
                d="M79.52 36.1C78.8853 36.884 78.1107 37.4813 77.196 37.892C76.3 38.3027 75.3107 38.508 74.228 38.508C72.772 38.508 71.456 38.1907 70.28 37.556C69.104 36.94 67.76 35.8387 66.248 34.252C64.4747 34.028 62.888 33.4587 61.488 32.544C60.1067 31.6293 59.024 30.4533 58.24 29.016C57.4747 27.56 57.092 25.9547 57.092 24.2C57.092 22.2773 57.5493 20.5507 58.464 19.02C59.3973 17.4707 60.676 16.2573 62.3 15.38C63.9427 14.5027 65.7813 14.064 67.816 14.064C69.8507 14.064 71.68 14.5027 73.304 15.38C74.928 16.2573 76.2067 17.4707 77.14 19.02C78.0733 20.5507 78.54 22.2773 78.54 24.2C78.54 26.4773 77.896 28.4747 76.608 30.192C75.3387 31.9093 73.6493 33.104 71.54 33.776C72.0067 34.2613 72.4547 34.6067 72.884 34.812C73.332 35.036 73.808 35.148 74.312 35.148C75.5253 35.148 76.5893 34.6627 77.504 33.692L79.52 36.1ZM61.684 24.2C61.684 25.4133 61.9453 26.496 62.468 27.448C63.0093 28.4 63.7467 29.1467 64.68 29.688C65.6133 30.2107 66.6587 30.472 67.816 30.472C68.9733 30.472 70.0187 30.2107 70.952 29.688C71.8853 29.1467 72.6133 28.4 73.136 27.448C73.6773 26.496 73.948 25.4133 73.948 24.2C73.948 22.9867 73.6773 21.904 73.136 20.952C72.6133 20 71.8853 19.2627 70.952 18.74C70.0187 18.1987 68.9733 17.928 67.816 17.928C66.6587 17.928 65.6133 18.1987 64.68 18.74C63.7467 19.2627 63.0093 20 62.468 20.952C61.9453 21.904 61.684 22.9867 61.684 24.2Z"
                fill="#101828"
              />
              <path
                d="M96.817 18.936V34H92.673V32.208C92.0943 32.8613 91.4037 33.3653 90.601 33.72C89.7983 34.056 88.9303 34.224 87.997 34.224C86.0183 34.224 84.4503 33.6547 83.293 32.516C82.1357 31.3773 81.557 29.688 81.557 27.448V18.936H85.925V26.804C85.925 29.2307 86.9423 30.444 88.977 30.444C90.0223 30.444 90.8623 30.108 91.497 29.436C92.1317 28.7453 92.449 27.728 92.449 26.384V18.936H96.817Z"
                fill="#101828"
              />
              <path
                d="M108.032 34.224C106.445 34.224 105.017 33.8973 103.748 33.244C102.497 32.572 101.517 31.648 100.808 30.472C100.098 29.296 99.7437 27.9613 99.7437 26.468C99.7437 24.9747 100.098 23.64 100.808 22.464C101.517 21.288 102.497 20.3733 103.748 19.72C105.017 19.048 106.445 18.712 108.032 18.712C109.618 18.712 111.037 19.048 112.288 19.72C113.538 20.3733 114.518 21.288 115.228 22.464C115.937 23.64 116.292 24.9747 116.292 26.468C116.292 27.9613 115.937 29.296 115.228 30.472C114.518 31.648 113.538 32.572 112.288 33.244C111.037 33.8973 109.618 34.224 108.032 34.224ZM108.032 30.64C109.152 30.64 110.066 30.2667 110.776 29.52C111.504 28.7547 111.868 27.7373 111.868 26.468C111.868 25.1987 111.504 24.1907 110.776 23.444C110.066 22.6787 109.152 22.296 108.032 22.296C106.912 22.296 105.988 22.6787 105.26 23.444C104.532 24.1907 104.168 25.1987 104.168 26.468C104.168 27.7373 104.532 28.7547 105.26 29.52C105.988 30.2667 106.912 30.64 108.032 30.64Z"
                fill="#101828"
              />
              <path
                d="M128.927 33.272C128.498 33.5893 127.966 33.832 127.331 34C126.715 34.1493 126.062 34.224 125.371 34.224C123.579 34.224 122.189 33.7667 121.199 32.852C120.229 31.9373 119.743 30.5933 119.743 28.82V22.632H117.419V19.272H119.743V15.604H124.111V19.272H127.863V22.632H124.111V28.764C124.111 29.3987 124.27 29.8933 124.587 30.248C124.923 30.584 125.39 30.752 125.987 30.752C126.678 30.752 127.266 30.5653 127.751 30.192L128.927 33.272Z"
                fill="#101828"
              />
              <path
                d="M131.379 18.936H135.747V34H131.379V18.936ZM133.563 16.836C132.761 16.836 132.107 16.6027 131.603 16.136C131.099 15.6693 130.847 15.0907 130.847 14.4C130.847 13.7093 131.099 13.1307 131.603 12.664C132.107 12.1973 132.761 11.964 133.563 11.964C134.366 11.964 135.019 12.188 135.523 12.636C136.027 13.084 136.279 13.644 136.279 14.316C136.279 15.044 136.027 15.6507 135.523 16.136C135.019 16.6027 134.366 16.836 133.563 16.836Z"
                fill="#101828"
              />
              <path
                d="M154.557 26.524C154.557 26.58 154.529 26.972 154.473 27.7H143.077C143.282 28.6333 143.768 29.3707 144.533 29.912C145.298 30.4533 146.25 30.724 147.389 30.724C148.173 30.724 148.864 30.612 149.461 30.388C150.077 30.1453 150.646 29.772 151.169 29.268L153.493 31.788C152.074 33.412 150.002 34.224 147.277 34.224C145.578 34.224 144.076 33.8973 142.769 33.244C141.462 32.572 140.454 31.648 139.745 30.472C139.036 29.296 138.681 27.9613 138.681 26.468C138.681 24.9933 139.026 23.668 139.717 22.492C140.426 21.2973 141.388 20.3733 142.601 19.72C143.833 19.048 145.205 18.712 146.717 18.712C148.192 18.712 149.526 19.0293 150.721 19.664C151.916 20.2987 152.849 21.2133 153.521 22.408C154.212 23.584 154.557 24.956 154.557 26.524ZM146.745 22.016C145.756 22.016 144.925 22.296 144.253 22.856C143.581 23.416 143.17 24.1813 143.021 25.152H150.441C150.292 24.2 149.881 23.444 149.209 22.884C148.537 22.3053 147.716 22.016 146.745 22.016Z"
                fill="#101828"
              />
              <path
                d="M166.621 18.712C168.488 18.712 169.991 19.272 171.129 20.392C172.287 21.512 172.865 23.1733 172.865 25.376V34H168.497V26.048C168.497 24.8533 168.236 23.9667 167.713 23.388C167.191 22.7907 166.435 22.492 165.445 22.492C164.344 22.492 163.467 22.8373 162.813 23.528C162.16 24.2 161.833 25.208 161.833 26.552V34H157.465V18.936H161.637V20.7C162.216 20.0653 162.935 19.58 163.793 19.244C164.652 18.8893 165.595 18.712 166.621 18.712Z"
                fill="#101828"
              />
              <path
                d="M186.541 33.272C186.111 33.5893 185.579 33.832 184.945 34C184.329 34.1493 183.675 34.224 182.985 34.224C181.193 34.224 179.802 33.7667 178.813 32.852C177.842 31.9373 177.357 30.5933 177.357 28.82V22.632H175.033V19.272H177.357V15.604H181.725V19.272H185.477V22.632H181.725V28.764C181.725 29.3987 181.883 29.8933 182.201 30.248C182.537 30.584 183.003 30.752 183.601 30.752C184.291 30.752 184.879 30.5653 185.365 30.192L186.541 33.272Z"
                fill="#101828"
              />
            </svg>
          </Grid>
        </Flex>
      </Flex>
    </DefaultLayout>
  );
}

export default AboutUs;
