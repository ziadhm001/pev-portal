import { Flex, Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import trend from "../../assets/images/trend.svg";
import check from "../../assets/images/check.svg";

function Direction() {
  return (
    <Flex
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      marginTop={"50px"}
    >
      <Text fontSize="5xl" fontWeight={"600"}>
        Direction from Idea to Exit
      </Text>
      <Text>
        Structured programs designed to provide targeted support across your
        startup journey.
      </Text>

      <Flex justifyContent={"space-around"} margin={"50px"} w={"90%"}>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          w={"30%"}
          margin={"30px"}
        >
          <Image src={trend} marginBottom={"20px"} />
          <Text fontSize={"24px"} color={"#4BB543"} as="b">
            PEV Accelera Program
          </Text>
          <Text fontStyle={"italic"} as="b">
            It all starts with our renowned Founder Institute 'Core Program',
            which combines aggressive growth sprints and constant feedback to
            help idea and pre-seed founders reach the milestones needed for
            investment and sustained growth.
          </Text>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              Make years of progress in just a few months through our proven,
              business-building Growth Sprints. No theoretical 'homework' here.
            </Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              Get the push and accountability you need through weekly ratings,
              360 degree reviews, and aggressive milestones.
            </Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              Receive constant feedback and advice from experts through our live
              Weekly Feedback Sessions, Office Hours, and Working Groups.
            </Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              Expand your network and connect with entrepreneurs, advisors, and
              investors - both locally, and globally.
            </Text>
          </Flex>
        </Flex>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          w={"30%"}
          margin={"30px"}
        >
          <Image src={trend} marginBottom={"20px"} />
          <Text fontSize={"24px"} color={"#4BB543"} as="b">
            PEV Founder Lab
          </Text>
          <Text fontStyle={"italic"} as="b">
            After completing FI Core, Alumni get FREE access to our additional
            'Founder Lab' virtual advisory programs run by our Silicon Valley
            Headquarters team. The goal of these programs is to continue to
            providing direction and feedback long after the Core Program ends.
          </Text>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              'Product/ Market Fit Lab' (re-launching in 2023) helps pre-product
              and early-product startups optimize their offering and finalize a
              sustainable engine for growth.
            </Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              Access private networking events, and get feedback from the
              world's largest network of mentors and investors (35,000+)
            </Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              'Funding Lab' (Live) helps startups ready to raise funding build
              an investor pipeline, manage their fundraising progress, negotiate
              terms, and secure a lead investor.
            </Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              Take advantage of over $2M in partner discounts, from services
              like Dell, AWS, Google, Stripe, and more.
            </Text>
          </Flex>
        </Flex>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          w={"30%"}
          margin={"30px"}
        >
          <Image src={trend} marginBottom={"20px"} />
          <Text fontSize={"24px"} color={"#4BB543"} as="b">
            PEV Venture network
          </Text>
          <Text fontStyle={"italic"} as="b">
            When ready, Alumni can get featured on events and have their deals
            syndicated to a diverse pool of investors in the FI Venture Network
            - an exclusive network of investors actively funding pre-seed and
            seed-stage startups before anyone else.
          </Text>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              Get access to angels, accelerators, micro-funds, and syndicates
              that actually invest in startups at the earliest stages.
            </Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              Pitch on FI Demo Days and the Founder Showcase, as well as partner
              pitch competitions and conferences.
            </Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              Pitch on FI Demo Days and the Founder Showcase, as well as partner
              pitch competitions and conferences.
            </Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              Share advice and see private ratings and reviews of investors
              across the globe (coming in 2024).
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Direction;
