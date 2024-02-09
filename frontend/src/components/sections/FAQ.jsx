import { Flex, Text, Stack, Box, Container } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import StillHavQuestions from "./StillHavQuestions";

function FAQ() {
  const questions = [
    {
      question: "What is a good question?",
      answer: "A good question is a question that is good.",
    },
    {
      question: "What is a bad question?",
      answer: "A bad question is a question that is bad.",
    },
    {
      question: "What is a question?",
      answer: "A question is a question.",
    },
    {
      question: "What is the meaning of life?",
      answer: "The meaning of life is 42.",
    },
  ];
  return (
    <Flex
      bg="white "
      justifyContent="center"
      alignItems="center"
      pt={8}
      pb={8}
      boxShadow={"0px 2px 20px 1px #00000045"}
    >
      <Container maxW={"container.lg"}>
        <Stack
          spacing={4}
          align={"center"}
          p={8}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <Text fontSize="48px" fontWeight="700" color="black">
            {" "}
            Frequently asked questions
          </Text>
          <Text>
            {" "}
            Everything you need to know about the product and billing.
          </Text>

          <Accordion allowMultiple w={"100%"}>
            {questions.map((q, i) => (
              <AccordionItem key={i}>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" py={3}>
                        {q.question}
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>

                    <AccordionPanel pb={4}>
                      <Text>{q.answer}</Text>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Stack>
        <StillHavQuestions />
      </Container>
    </Flex>
  );
}

export default FAQ;
