import { Flex, Stack, Button, Text, Container } from "@chakra-ui/react";
import "@fontsource/open-sans/700.css";
import GradientLine from "../gradient/GradientLine";
function CallToAction() {
  return (
    <>
      <GradientLine />
      <Flex justify={"center"} transform={"translateY(-20px)"} align={"center"}>
        <svg
          width="104"
          height="247"
          viewBox="0 0 104 247"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_111_3027)">
            <path
              d="M40.401 192.323L60.4143 208.852C70.2383 216.055 67.3755 229.975 56.3943 225.103L32.5262 209.296L6.1781 150.243L34.7363 160.212L40.401 192.323Z"
              fill="#E8A27C"
            />
            <path
              d="M55.063 175.863L72.7356 186.494C80.5669 192.262 77.4518 204.502 69.1419 201.379L43.9076 189.278L11.0857 146.102L41.245 148.433L55.063 175.863Z"
              fill="#E8A27C"
            />
            <path
              d="M74.3194 166.415C80.8629 171.461 76.0596 181.466 69.8902 178.873L20.8488 144.945L52.6874 135.906L61.2845 156.237L74.3194 166.415Z"
              fill="#E8A27C"
            />
            <path
              d="M102.608 153.262C107.829 162.309 97.178 171.879 89.8253 165.989L71.9437 147.633L55.6285 142.735L26.9136 176.994L31.1948 215.064L45.4391 228.722C55.2369 237.996 49.1894 251.263 40.4793 245.66L17.7597 225.242L0 163.11L18.9866 113.435V102.517H68.5154V112.617V116.097L88.0241 131.025L102.608 153.262Z"
              fill="#FBBD96"
            />
            <path
              d="M73.1968 90.1108H13.1132V102.517H73.1968V90.1108Z"
              fill="#4BB543"
              fillOpacity="0.5"
            />
            <path
              d="M73.2055 90.1108H43.1245V102.517H73.2055V90.1108Z"
              fill="#4BB543"
            />
            <path d="M78.4438 0H5.69946V90.1108H78.4438V0Z" fill="#017783" />
            <path d="M78.4438 0H42.9766V90.1108H78.4438V0Z" fill="#39807F" />
            <path
              d="M30.9707 73.5787C32.4603 69.5805 30.426 65.132 26.427 63.6427C22.428 62.1534 17.9785 64.1873 16.4889 68.1855C14.9993 72.1836 17.0336 76.6321 21.0326 78.1214C25.0317 79.6107 29.4811 77.5768 30.9707 73.5787Z"
              fill="#E4F0DC"
            />
          </g>
          <defs>
            <clipPath id="clip0_111_3027">
              <rect width="104" height="247" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Flex>
      <Flex
        height={"auto"}
        alignItems={"center"}
        justify={"center"}
        align={"center"}
      >
        <Container maxW={"container.lg"} p={"10px"}>
          <Stack spacing={6} align={"center"}>
            <Text>START HERE. GET RAISED</Text>
            <Text
              fontSize={{
                base: "32px",
                md: "48px",
                lg: "64px",
              }}
              textAlign={"center"}
              fontWeight={"700"}
            >
              Turn your IDEAS into Profitable Business
            </Text>
            <Stack direction={"row"} spacing={6} p={8} alignItems={"center"}>
              <Button
                bg={"#4BB543"}
                color={"white"}
                boxShadow={" 0px 4px 4px rgba(0, 0, 0, 0.25)"}
                size={"lg"}
                height={"56px"}
                w={"200px"}
              >
                Get Started
              </Button>
              <Button
                variant={"outline"}
                color={"#4BB543"}
                boxShadow={" 0px 4px 4px rgba(0, 0, 0, 0.25)"}
                size={"lg"}
                height={"56px"}
                w={"200px"}
              >
                Learn More
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Flex>
      <Flex
        justify={"center"}
        align={"center"}
        height={"100%"}
        transform={"translateY(20px)"}
      >
        <svg
          width="172"
          height="353"
          viewBox="0 0 172 353"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_111_2990)">
            <path
              d="M59.3344 154.175L138.893 179.027V262.741H90.6347V240.504L59.3344 221.978V154.175Z"
              fill="#E8A27C"
            />
            <path
              d="M136.052 87.2175C136.07 79.4193 134.33 71.7178 130.962 64.6895C127.593 57.6612 122.684 51.4879 116.601 46.6315C110.518 41.7752 103.419 38.3616 95.8351 36.6461C88.2511 34.9306 80.3785 34.9576 72.8064 36.7251C65.2343 38.4927 58.1587 41.955 52.109 46.853C46.0594 51.751 41.1924 57.9579 37.8721 65.0092C34.5519 72.0605 32.8643 79.7737 32.9358 87.5716C33.0072 95.3695 34.8359 103.05 38.2849 110.039H38.2241L38.5976 110.701C39.2752 112.026 40.0136 113.316 40.7955 114.57C51.5764 128.783 59.7339 141.749 62.0099 151.944H109.477C111.032 140.285 119.311 125.803 130.77 110.039H130.709C134.222 102.948 136.051 95.1364 136.052 87.2175Z"
              fill="#FFA52E"
            />
            <path
              d="M109.477 151.944C111.033 140.285 119.312 125.803 130.77 110.039H130.709C134.598 102.162 136.417 93.4185 135.994 84.6384C135.571 75.8583 132.92 67.3319 128.292 59.8671C123.665 52.4022 117.214 46.2461 109.55 41.9819C101.887 37.7178 93.265 35.4869 84.5015 35.5006V151.944H109.477Z"
              fill="#FF8431"
            />
            <path
              d="M124.724 83.5577C124.183 83.5558 123.658 83.3706 123.236 83.032C122.813 82.6935 122.517 82.2215 122.395 81.6929C116.314 55.22 97.9581 51.0287 97.2023 50.8544C96.5813 50.725 96.037 50.3534 95.6892 49.8215C95.3414 49.2896 95.2185 48.6409 95.3475 48.018C95.4765 47.3952 95.8469 46.8493 96.3772 46.5004C96.9075 46.1515 97.5543 46.0282 98.1752 46.1576C99.044 46.3406 120.232 51.0112 127.087 80.6124C127.157 80.919 127.167 81.2367 127.116 81.5472C127.064 81.8578 126.952 82.155 126.786 82.4221C126.62 82.6891 126.402 82.9207 126.147 83.1036C125.892 83.2865 125.603 83.4171 125.297 83.488C125.109 83.5346 124.917 83.558 124.724 83.5577Z"
              fill="#FF5F2E"
            />
            <path
              d="M77.2997 154.724C76.9196 154.722 76.5493 154.603 76.2386 154.383C75.928 154.164 75.6919 153.854 75.5623 153.495L62.4705 106.536C62.3895 106.307 62.3542 106.065 62.3667 105.822C62.3792 105.58 62.4392 105.342 62.5433 105.123C62.6473 104.903 62.7934 104.707 62.9732 104.544C63.153 104.381 63.363 104.256 63.5911 104.175C63.8193 104.093 64.0612 104.058 64.303 104.071C64.5448 104.083 64.7818 104.143 65.0004 104.248C65.219 104.352 65.415 104.499 65.5772 104.679C65.7393 104.859 65.8645 105.07 65.9455 105.299L79.0372 152.258C79.1989 152.72 79.1718 153.228 78.9619 153.67C78.752 154.113 78.3762 154.454 77.9165 154.619C77.7178 154.687 77.5096 154.723 77.2997 154.724Z"
              fill="#335572"
            />
            <path
              d="M91.6858 154.724C91.4881 154.721 91.292 154.689 91.1038 154.628C90.6409 154.473 90.2582 154.14 90.04 153.702C89.8217 153.264 89.7857 152.757 89.9398 152.293L101.946 105.334C102.002 105.082 102.111 104.844 102.265 104.637C102.419 104.43 102.614 104.258 102.839 104.131C103.063 104.005 103.312 103.926 103.568 103.902C103.824 103.878 104.083 103.907 104.327 103.989C104.571 104.072 104.795 104.204 104.985 104.378C105.175 104.553 105.327 104.765 105.43 105.002C105.533 105.238 105.585 105.494 105.584 105.752C105.582 106.011 105.526 106.266 105.42 106.501L93.4581 153.452C93.3361 153.825 93.0984 154.15 92.7797 154.379C92.461 154.608 92.0777 154.729 91.6858 154.724Z"
              fill="#335572"
            />
            <path
              d="M107.271 120.234C106.906 120.236 106.548 120.126 106.246 119.921L96.7332 113.533L92.546 116.374C92.2729 116.558 91.9563 116.665 91.6284 116.687C91.3004 116.708 90.9727 116.642 90.6782 116.496L84.5971 113.403L79.237 116.453C78.9638 116.607 78.6556 116.688 78.3421 116.688C78.0287 116.688 77.7206 116.607 77.4474 116.453L72.0179 113.464L62.7311 119.903C62.532 120.041 62.3078 120.138 62.0713 120.189C61.8347 120.24 61.5906 120.244 61.3526 120.2C61.1146 120.157 60.8875 120.066 60.6843 119.935C60.4811 119.803 60.3058 119.632 60.1684 119.433C60.0309 119.233 59.9339 119.008 59.8831 118.771C59.8323 118.534 59.8286 118.289 59.8722 118.05C59.9157 117.811 60.0057 117.583 60.137 117.38C60.2683 117.176 60.4383 117 60.6374 116.862L70.8624 109.778C71.1441 109.582 71.4749 109.469 71.8173 109.452C72.1598 109.435 72.5001 109.515 72.7996 109.682L78.3162 112.723L83.6328 109.691C83.8974 109.543 84.1936 109.462 84.4961 109.455C84.7987 109.447 85.0986 109.513 85.3703 109.647L91.3731 112.697L95.7168 109.769C96.0205 109.562 96.3792 109.452 96.7463 109.452C97.1133 109.452 97.4719 109.562 97.7757 109.769L108.287 116.845C108.616 117.066 108.864 117.387 108.996 117.761C109.128 118.134 109.137 118.541 109.021 118.92C108.906 119.299 108.671 119.631 108.353 119.866C108.034 120.101 107.649 120.227 107.254 120.226L107.271 120.234Z"
              fill="#335572"
            />
            <path
              d="M109.773 153.487H59.2301V180.099H109.773V153.487Z"
              fill="#335572"
            />
            <path
              d="M110.815 151.936H58.1876C57.4775 151.936 56.9019 152.513 56.9019 153.225V153.748C56.9019 154.46 57.4775 155.038 58.1876 155.038H110.815C111.525 155.038 112.101 154.46 112.101 153.748V153.225C112.101 152.513 111.525 151.936 110.815 151.936Z"
              fill="#152E42"
            />
            <path
              d="M110.815 158.567H58.1876C57.4775 158.567 56.9019 159.144 56.9019 159.857V160.379C56.9019 161.092 57.4775 161.669 58.1876 161.669H110.815C111.525 161.669 112.101 161.092 112.101 160.379V159.857C112.101 159.144 111.525 158.567 110.815 158.567Z"
              fill="#152E42"
            />
            <path
              d="M110.815 165.198H58.1876C57.4775 165.198 56.9019 165.775 56.9019 166.488V167.01C56.9019 167.723 57.4775 168.3 58.1876 168.3H110.815C111.525 168.3 112.101 167.723 112.101 167.01V166.488C112.101 165.775 111.525 165.198 110.815 165.198Z"
              fill="#152E42"
            />
            <path
              d="M110.815 171.821H58.1876C57.4775 171.821 56.9019 172.398 56.9019 173.11V173.633C56.9019 174.345 57.4775 174.923 58.1876 174.923H110.815C111.525 174.923 112.101 174.345 112.101 173.633V173.11C112.101 172.398 111.525 171.821 110.815 171.821Z"
              fill="#152E42"
            />
            <path
              d="M110.815 178.452H58.1876C57.4775 178.452 56.9019 179.029 56.9019 179.742V180.264C56.9019 180.977 57.4775 181.554 58.1876 181.554H110.815C111.525 181.554 112.101 180.977 112.101 180.264V179.742C112.101 179.029 111.525 178.452 110.815 178.452Z"
              fill="#152E42"
            />
            <path
              d="M85.1703 23.9981C84.6404 23.9981 84.1322 23.7869 83.7575 23.4111C83.3828 23.0352 83.1723 22.5254 83.1723 21.9939V2.00419C83.1543 1.73047 83.1925 1.45593 83.2845 1.19761C83.3765 0.939288 83.5204 0.702686 83.7073 0.502422C83.8942 0.302158 84.1202 0.142522 84.3711 0.0333797C84.622 -0.0757625 84.8926 -0.13208 85.1661 -0.13208C85.4396 -0.13208 85.7101 -0.0757625 85.961 0.0333797C86.2119 0.142522 86.4379 0.302158 86.6248 0.502422C86.8117 0.702686 86.9555 0.939288 87.0476 1.19761C87.1396 1.45593 87.1778 1.73047 87.1598 2.00419V21.9939C87.1598 22.5239 86.9505 23.0324 86.5777 23.408C86.2048 23.7836 85.6987 23.9958 85.1703 23.9981Z"
              fill="#FF862C"
            />
            <path
              d="M108.8 28.2157C108.555 28.1253 108.329 27.9874 108.137 27.8097C107.945 27.6321 107.79 27.4182 107.68 27.1803C107.57 26.9424 107.508 26.6851 107.498 26.4232C107.487 26.1613 107.528 25.8998 107.618 25.6538L114.499 6.88408C114.7 6.41187 115.075 6.03537 115.546 5.83234C116.016 5.62931 116.546 5.61526 117.027 5.79306C117.507 5.97087 117.901 6.32696 118.128 6.78782C118.354 7.24868 118.395 7.77912 118.243 8.26959L111.354 27.0306C111.265 27.2774 111.128 27.504 110.951 27.6974C110.774 27.8907 110.561 28.047 110.323 28.1572C110.086 28.2674 109.829 28.3293 109.567 28.3393C109.306 28.3494 109.045 28.3073 108.8 28.2157Z"
              fill="#FF862C"
            />
            <path
              d="M128.442 41.6961C128.042 41.3518 127.793 40.8627 127.751 40.3355C127.709 39.8082 127.876 39.2856 128.216 38.8815L141.134 23.6757C141.305 23.4755 141.514 23.311 141.748 23.1917C141.983 23.0723 142.239 23.0005 142.501 22.9803C142.763 22.9601 143.026 22.9918 143.276 23.0738C143.526 23.1557 143.758 23.2862 143.957 23.4579C144.157 23.6295 144.321 23.839 144.44 24.0742C144.559 24.3094 144.631 24.5658 144.651 24.8288C144.671 25.0917 144.639 25.3561 144.557 25.6068C144.476 25.8575 144.346 26.0896 144.175 26.2899L131.257 41.5131C130.906 41.9089 130.413 42.15 129.887 42.1843C129.36 42.2185 128.841 42.0431 128.442 41.6961Z"
              fill="#FF862C"
            />
            <path
              d="M141.994 59.9689C141.865 59.7409 141.781 59.4895 141.749 59.229C141.717 58.9686 141.737 58.7043 141.807 58.4516C141.877 58.1988 141.997 57.9625 142.159 57.7563C142.321 57.5501 142.521 57.3781 142.75 57.2502L160.124 47.4297C160.585 47.1697 161.13 47.1039 161.639 47.2469C161.891 47.3177 162.127 47.4376 162.333 47.5998C162.539 47.762 162.711 47.9633 162.839 48.1921C162.968 48.421 163.05 48.6729 163.081 48.9337C163.112 49.1944 163.092 49.4587 163.021 49.7116C162.951 49.9644 162.831 50.2009 162.67 50.4074C162.508 50.6139 162.307 50.7865 162.079 50.9152L144.705 60.7358C144.476 60.8642 144.225 60.9462 143.966 60.9772C143.706 61.0082 143.443 60.9874 143.191 60.9162C142.939 60.845 142.704 60.7247 142.498 60.5621C142.293 60.3996 142.122 60.198 141.994 59.9689Z"
              fill="#FF862C"
            />
            <path
              d="M148.362 81.6667C148.279 81.1425 148.406 80.6066 148.715 80.1757C149.024 79.7449 149.49 79.454 150.012 79.3663L169.689 76.1683C169.947 76.1265 170.212 76.1362 170.466 76.1968C170.721 76.2574 170.961 76.3677 171.173 76.5215C171.385 76.6752 171.565 76.8694 171.703 77.0928C171.84 77.3163 171.932 77.5648 171.974 77.8239C172.015 78.0831 172.006 78.348 171.945 78.6035C171.885 78.8589 171.775 79.0999 171.622 79.3127C171.469 79.5255 171.275 79.706 171.052 79.8437C170.829 79.9815 170.582 80.0739 170.323 80.1157L150.647 83.3137C150.389 83.3572 150.125 83.3491 149.87 83.2897C149.615 83.2304 149.374 83.121 149.162 82.9678C148.95 82.8147 148.769 82.6209 148.632 82.3976C148.495 82.1743 148.403 81.9259 148.362 81.6667Z"
              fill="#FF862C"
            />
            <path
              d="M147.12 103.634C147.17 103.377 147.27 103.131 147.414 102.913C147.559 102.694 147.745 102.506 147.962 102.359C148.179 102.213 148.423 102.111 148.679 102.059C148.936 102.007 149.2 102.006 149.456 102.057L169.029 105.865C169.528 105.987 169.961 106.297 170.239 106.732C170.516 107.166 170.615 107.69 170.517 108.196C170.418 108.702 170.13 109.15 169.71 109.448C169.291 109.746 168.773 109.87 168.264 109.795L148.701 105.978C148.181 105.877 147.724 105.573 147.427 105.134C147.131 104.695 147.02 104.155 147.12 103.634Z"
              fill="#FF862C"
            />
            <path
              d="M138.102 124.347C138.378 123.896 138.819 123.571 139.331 123.444C139.844 123.317 140.385 123.397 140.839 123.668L157.892 134.028C158.115 134.165 158.31 134.344 158.465 134.555C158.619 134.767 158.731 135.007 158.793 135.262C158.855 135.517 158.867 135.781 158.827 136.041C158.787 136.3 158.697 136.549 158.561 136.773C158.425 136.998 158.247 137.193 158.036 137.348C157.825 137.503 157.585 137.615 157.331 137.677C157.077 137.74 156.813 137.751 156.555 137.711C156.296 137.671 156.048 137.58 155.824 137.444L138.78 127.092C138.328 126.817 138.003 126.374 137.876 125.86C137.749 125.346 137.83 124.802 138.102 124.347Z"
              fill="#FF862C"
            />
            <path
              d="M63.2002 28.2157C63.4455 28.1253 63.6706 27.9874 63.8628 27.8097C64.0549 27.6321 64.2103 27.4182 64.32 27.1803C64.4297 26.9424 64.4917 26.6851 64.5022 26.4232C64.5128 26.1613 64.4718 25.8998 64.3816 25.6538L57.5013 6.88408C57.2996 6.41187 56.9248 6.03537 56.4544 5.83234C55.9839 5.62931 55.4536 5.61526 54.9731 5.79306C54.4926 5.97087 54.0986 6.32696 53.8723 6.78782C53.6459 7.24868 53.6047 7.77912 53.7571 8.26959L60.6374 27.0306C60.8211 27.5282 61.1941 27.9324 61.6745 28.1545C62.1549 28.3767 62.7036 28.3987 63.2002 28.2157Z"
              fill="#FF862C"
            />
            <path
              d="M43.5581 41.6961C43.9584 41.3518 44.2068 40.8627 44.2491 40.3355C44.2914 39.8082 44.1243 39.2856 43.784 38.8815L30.866 23.6757C30.5204 23.2713 30.0288 23.0211 29.4993 22.9803C28.9698 22.9394 28.4458 23.1112 28.0426 23.4579C27.6394 23.8046 27.39 24.2977 27.3493 24.8288C27.3086 25.3599 27.4798 25.8855 27.8254 26.2899L40.7435 41.5131C41.0943 41.9089 41.5864 42.15 42.1133 42.1843C42.6401 42.2185 43.1593 42.0431 43.5581 41.6961Z"
              fill="#FF862C"
            />
            <path
              d="M30.0058 59.9689C30.1342 59.7407 30.2165 59.4892 30.248 59.2291C30.2795 58.9689 30.2597 58.705 30.1895 58.4525C30.1193 58.2001 30.0002 57.9639 29.839 57.7577C29.6778 57.5514 29.4776 57.3789 29.25 57.2502L11.8754 47.4297C11.4146 47.1697 10.8697 47.1039 10.3606 47.2469C9.8515 47.3899 9.41981 47.7299 9.16061 48.1921C8.9014 48.6543 8.83597 49.2009 8.97853 49.7116C9.12108 50.2223 9.45994 50.6552 9.92075 50.9152L27.2954 60.7358C27.5235 60.8642 27.7746 60.9462 28.0344 60.9772C28.2941 61.0082 28.5574 60.9874 28.8092 60.9162C29.0609 60.845 29.2962 60.7247 29.5015 60.5621C29.7069 60.3996 29.8782 60.198 30.0058 59.9689Z"
              fill="#FF862C"
            />
            <path
              d="M23.6382 81.6665C23.721 81.1422 23.5941 80.6063 23.2849 80.1755C22.9758 79.7446 22.5095 79.4537 21.9876 79.3661L2.3109 76.168C1.78904 76.0837 1.25504 76.2107 0.826566 76.5212C0.39809 76.8317 0.110226 77.3003 0.0261293 77.8237C-0.0579673 78.3472 0.0686575 78.8827 0.378203 79.3125C0.687748 79.7423 1.15477 80.0311 1.67663 80.1154L21.3534 83.3135C21.6114 83.357 21.8754 83.3489 22.1302 83.2895C22.385 83.2301 22.6255 83.1207 22.8379 82.9676C23.0504 82.8145 23.2305 82.6207 23.3679 82.3974C23.5052 82.1741 23.597 81.9256 23.6382 81.6665Z"
              fill="#FF862C"
            />
            <path
              d="M24.8804 103.634C24.8316 103.376 24.7322 103.13 24.588 102.911C24.4437 102.692 24.2575 102.503 24.0401 102.356C23.8228 102.21 23.5787 102.108 23.3218 102.056C23.0649 102.005 22.8003 102.005 22.5435 102.057L2.97965 105.865C2.48039 105.987 2.04729 106.298 1.7702 106.732C1.4931 107.166 1.39341 107.69 1.49182 108.196C1.59024 108.702 1.87916 109.15 2.29862 109.448C2.71809 109.746 3.23575 109.87 3.74414 109.795L23.308 105.978C23.5648 105.928 23.8093 105.828 24.0274 105.683C24.2455 105.538 24.4329 105.351 24.5789 105.134C24.725 104.916 24.8268 104.671 24.8785 104.414C24.9302 104.157 24.9309 103.892 24.8804 103.634Z"
              fill="#FF862C"
            />
            <path
              d="M33.8893 124.347C33.6154 123.894 33.1737 123.568 32.6608 123.441C32.148 123.313 31.6058 123.395 31.1527 123.668L14.1083 134.028C13.8846 134.164 13.6898 134.343 13.535 134.554C13.3801 134.765 13.2683 135.004 13.2058 135.259C13.1433 135.513 13.1313 135.778 13.1706 136.037C13.2099 136.296 13.2998 136.545 13.435 136.769C13.5702 136.993 13.748 137.189 13.9585 137.344C14.169 137.499 14.4079 137.612 14.6616 137.674C14.9153 137.737 15.1788 137.749 15.4371 137.709C15.6954 137.67 15.9435 137.58 16.1671 137.444L33.2203 127.092C33.4442 126.956 33.6391 126.777 33.7939 126.566C33.9488 126.354 34.0604 126.114 34.1226 125.859C34.1847 125.604 34.1961 125.339 34.1561 125.08C34.116 124.82 34.0254 124.572 33.8893 124.347Z"
              fill="#FF862C"
            />
            <path
              d="M77.1607 162.026H51.9675C43.7146 162.026 44.1489 146.341 51.9675 146.341H77.1607C85.9783 146.341 87.0121 162.026 77.1607 162.026Z"
              fill="#FBBD96"
            />
            <path
              d="M77.1606 182.948H51.9675C44.4616 183.175 43.8014 167.446 51.9675 167.263H77.1606C86.9947 167.254 87.1163 182.948 77.1606 182.948Z"
              fill="#FBBD96"
            />
            <path
              d="M77.1606 203.226H51.9674C43.7144 203.226 44.7309 187.541 51.9674 187.541H77.1606C86.3083 187.732 87.8633 203.226 77.1606 203.226Z"
              fill="#FBBD96"
            />
            <path
              d="M77.1606 221.978H51.9674C44.0272 221.107 44.8525 206.903 51.9674 206.293H77.1606C88.6365 205.744 87.1162 221.978 77.1606 221.978Z"
              fill="#FBBD96"
            />
            <path
              d="M138.884 262.75V179.027L131.065 156.789H94.6655C83.2243 156.789 89.9831 172.335 99.1134 174.086L114.751 176.413L121.926 192.098L103.683 209.761V262.741L138.884 262.75Z"
              fill="#FBBD96"
            />
            <path
              d="M145.408 250.315H85.4222V262.741H145.408V250.315Z"
              fill="#152E42"
            />
            <path
              d="M145.417 250.315H115.385V262.741H145.417V250.315Z"
              fill="#335572"
            />
            <path
              d="M150.647 262.741H78.0208V353H150.647V262.741Z"
              fill="#4BB543"
              fillOpacity="0.5"
            />
            <path
              d="M150.638 262.741H115.228V353H150.638V262.741Z"
              fill="#4BB543"
            />
            <path
              d="M103.516 283.236C104.2 279.018 101.346 275.042 97.1406 274.356C92.9353 273.67 88.9718 276.533 88.2876 280.751C87.6035 284.969 90.458 288.945 94.6632 289.631C98.8684 290.317 102.832 287.454 103.516 283.236Z"
              fill="#E4F0DC"
            />
          </g>
          <defs>
            <clipPath id="clip0_111_2990">
              <rect width="172" height="353" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Flex>
      <GradientLine />
    </>
  );
}

export default CallToAction;
