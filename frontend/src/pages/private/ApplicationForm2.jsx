import { useFormik } from "formik";
import FormTextArea from "../../components/fields/FormTextArea";
import SideBar from "../../components/sidebar/SideBar";
import { Stack, Text } from "@chakra-ui/react";
import FileUploadField from "../../components/fields/FileUploadField";
import FormSelectField from "../../components/fields/FormSelectField";
import FormTextField from "../../components/fields/FormTextField";
import CheckBoxGroupField from "../../components/fields/CheckBoxGroupField";
import GreenOutlinedButton from "../../components/buttons/GreenOutlinedButton";
import GreenButton from "../../components/buttons/GreenButton";
import { useEffect } from "react";

function ApplicationForm2({ref}) {

  const loadFromLocalStorage = (form, storageKey) => {
    const savedData = localStorage.getItem(storageKey);
    if (savedData) {
      form.setValues(JSON.parse(savedData));
    }
  };

  const saveToLocalStorage = (form, storageKey) => {
    localStorage.setItem(storageKey, JSON.stringify(form.values));
  };

  const startupSpecificData = useFormik({
    initialValues: {
      oneLineSummary: "",
      whatIsTheProblemYouAreTryingToSolve: "",
      whatIsYourInnovativeSolution: "",
      whoAreYourTargetCustomers: "",
      segmentYourCustomers: "",
      theMainValueYourSolutionBrings: "",
      yourCustomerDiscription: "",
      foundingTeamInformation: "",
      howYourSolutionIsGoingToGrow: "",
      yourNextSteps: "",
      primaryAndSecondaryRevenueStreams: "",
      pricingPlan: "",
      costComponents: "",
      businessPlanFile: "",
      technologyThatPowersYourSolution: "",
      highLevelDescriptionOfYourSoftwareHardwareArchitecture: "",
      numberOfPeopleInYourSolutionCurrentlyServing: "",
      customerAcquisitionChannels: "",
      customerAcquisitionRate: "",
      costPerAcquisition: "",
      leverageExistingCustomerSegments: "",
      currentInvestedCapital: "",
      finalBudgetOfYourProjectPrototype: "",
      investmentYourBusinessNeedsToGrow: "",
      expectedMonthlyRevenueForNext2Years: "",
      financialPlanFile: "",
      howDoYouStayInformedAboutChangesInYourTargetMarket: "",
      expectedRisks: "",
      keyChallengesYouFacedDuringYourJourney: "",
      directCompetitors: "",
      isYourStartupEstablishedLegally: "",
      howLongHasTheStartupBeenEstablishedLegally: "",
      equityHolders: "",
      stepsYouHaveTakenToUnderstandTheNeedsOfThePopulationYouWantToServe: "",
      organizationDoYouCurrentlyPartnerWith: "",
      skillsAndKnowledgeYouHaveToSucessfullyDevelopThisIdea: "",
      sdgDoesTheActivityOfYourBusinessIdeaSupport: "",
      eleaborateHowYourIdeasContributesToTheSDGsSelected: "",
      filmYourPitchVideo: "",
      stagingEnvirnoment: "",
      areYouCommittedTheJoiningTheFullProgram: "",
      haveYouParticipatedWithThisProjectInAnyCompetitionOrincubationProgramBefore:
        "",
    },
    onSubmit: (values) => {
      console.log(values);
      saveToLocalStorage(startupSpecificData, "startupSpecificData");
    },
  });

  useEffect(() => {
    loadFromLocalStorage(startupSpecificData, "startupSpecificData");
  }, []);
  const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  backToTop()
  return (
    <SideBar>
      <Stack w={"100%"} p={10} spacing={20} ref={ref}>
        <Stack w={"100%"} spacing={10} color={"brand.500"}>
          <Text color={"#4BB543"} borderBottom={"2px solid"}>
            Problem Solving
          </Text>
          <FormTextArea
            label={"Provide a one-line summary of your solution."}
            name={"oneLineSummary"}
            value={startupSpecificData.values.oneLineSummary}
            onChange={startupSpecificData.handleChange}
            error={startupSpecificData.errors.oneLineSummary}
            touched={startupSpecificData.touched.oneLineSummary}
            helperText={
              "Summarize your solution in 10-20 words. This summary will be used to describe your solution on the Solve website. Examples of one-line summaries can be found here directly under each solution name."
            }
            bg={"white"}
          />
          <FormTextArea
            label={
              "What is the problem you are trying to solve? And your customer core needs and what do people currently do instead of using your solution?"
            }
            name={"whatIsTheProblemYouAreTryingToSolve"}
            value={
              startupSpecificData.values.whatIsTheProblemYouAreTryingToSolve
            }
            onChange={startupSpecificData.handleChange}
            error={
              startupSpecificData.errors.whatIsTheProblemYouAreTryingToSolve
            }
            touched={
              startupSpecificData.touched.whatIsTheProblemYouAreTryingToSolve
            }
            helperText={
              "Describe your solution and how it works in simple terms. What is it? What does it do? What processes and technology does it use? What are the customers targeted (mention 2-3 of them)? How your project is deployed and operated in real-life environment?"
            }
            bg={"white"}
          />
          <FormTextArea
            label={
              "What is your innovative idea, solution or approach to solve the problem and how it is operated in a real-life environment?"
            }
            name={"whatIsYourInnovativeSolution"}
            value={startupSpecificData.values.whatIsYourInnovativeSolution}
            onChange={startupSpecificData.handleChange}
            error={startupSpecificData.errors.whatIsYourInnovativeSolution}
            touched={startupSpecificData.touched.whatIsYourInnovativeSolution}
            helperText={
              "Briefly introduce the issue your innovation addresses.Highlight the 'what': Clearly state your innovative idea, solution, or approach.Focus on the'how':Briefly explain how your innovation works, using simple terms and avoiding jargon."
            }
            bg={"white"}
          />
        </Stack>
        <Stack w={"100%"} spacing={10} color={"brand.500"}>
          <Text color={"#4BB543"} borderBottom={"2px solid"}>
            Market Size
          </Text>
          <FormTextArea
            label={
              "Who are your target customers and target markets, and  in what ways will the solution impact their lives?"
            }
            name={"whoAreYourTargetCustomers"}
            value={startupSpecificData.values.whoAreYourTargetCustomers}
            onChange={startupSpecificData.handleChange}
            error={startupSpecificData.errors.whoAreYourTargetCustomers}
            touched={startupSpecificData.touched.whoAreYourTargetCustomers}
            helperText={
              "Who are the specific people or groups you aim to reach with your solution? This could be based on demographics, interests, needs, or other relevant factors.And how will your solution make a difference for your target audience? Describe the positive benefits or changes it will bring to their lives, focusing on the most significant ones."
            }
            bg={"white"}
          />
          <FormTextArea
            label={
              "Can you segment your market into smaller, addressable groups? and What are the sizes and growth trends of each segment?"
            }
            name={"segmentYourCustomers"}
            value={startupSpecificData.values.segmentYourCustomers}
            onChange={startupSpecificData.handleChange}
            error={startupSpecificData.errors.segmentYourCustomers}
            touched={startupSpecificData.touched.segmentYourCustomers}
            helperText={
              "Group your overall market into smaller, reachable categories based on shared attributes.Think smaller bullseyes for your marketing darts! Next, size up each group: How many people are in each, and how fast are they growing? Big, fast-growing segments might be goldmines!"
            }
            bg={"white"}
          />
        </Stack>
        <Stack w={"100%"} spacing={10} color={"brand.500"}>
          <Text color={"#4BB543"} borderBottom={"2px solid"}>
            Unique Value Proposition (UVP)
          </Text>
          <FormTextArea
            label={
              "What is the main value that your solution adds and makes your solution innovative from current traditional solutions?"
            }
            name={"theMainValueYourSolutionBrings"}
            value={startupSpecificData.values.theMainValueYourSolutionBrings}
            onChange={startupSpecificData.handleChange}
            error={startupSpecificData.errors.theMainValueYourSolutionBrings}
            touched={startupSpecificData.touched.theMainValueYourSolutionBrings}
            helperText={
              "Explain how does your solution break away from the existing mold? What new technology, approach, or perspective does it bring to the table? How does it improve upon traditional solutions?"
            }
            bg={"white"}
          />
          <FormTextArea
            label={
              "Describe your customers’ journey/user experience while using your product/service in 5 steps."
            }
            name={"yourCustomerDiscription"}
            value={startupSpecificData.values.yourCustomerDiscription}
            onChange={startupSpecificData.handleChange}
            error={startupSpecificData.errors.yourCustomerDiscription}
            touched={startupSpecificData.touched.yourCustomerDiscription}
            helperText={
              "Describe their experience in 5 key steps, like awareness, purchase, usage, impact, and advocacy. "
            }
            bg={"white"}
          />
        </Stack>
        <Stack w={"100%"} spacing={10} color={"brand.500"}>
          <Text color={"#4BB543"} borderBottom={"2px solid"}>
            Team
          </Text>
          <FormTextArea
            label={
              "Please share more information about the experience of every founding team member Example: Name of Team member 1 - Role in the Startup - Linkedin URL - Brief about experience and qualifications - Number of years in the Field"
            }
            name={"foundingTeamInformation"}
            value={startupSpecificData.values.foundingTeamInformation}
            onChange={startupSpecificData.handleChange}
            error={startupSpecificData.errors.foundingTeamInformation}
            touched={startupSpecificData.touched.foundingTeamInformation}
            helperText={
              "Present the information for each team member in a clear and concise way. Maintain a consistent format for all team members.Tailor the details to the specific audience and their potential interest. For example, for investors, emphasize relevant financial or entrepreneurial experience. Keep it brief and relevant, avoiding overly long descriptions. Aim for 2-3 concise sentences per team member."
            }
            bg={"white"}
          />
        </Stack>
        <Stack w={"100%"} spacing={10} color={"brand.500"}>
          <Text color={"#4BB543"} borderBottom={"2px solid"}>
            Scalability
          </Text>
          <FormTextArea
            label={
              "What makes your project eligible for growth from your point of view?"
            }
            name={"howYourSolutionIsGoingToGrow"}
            value={startupSpecificData.values.howYourSolutionIsGoingToGrow}
            onChange={startupSpecificData.handleChange}
            error={startupSpecificData.errors.howYourSolutionIsGoingToGrow}
            touched={startupSpecificData.touched.howYourSolutionIsGoingToGrow}
            helperText={
              "Briefly mention 2-3 core aspects that make your project ripe for growth and explain why these strengths lead you to believe your project can grow significantly. Focus on the future potential and opportunities."
            }
            bg={"white"}
          />
          <FormTextArea
            label={
              "What are your next steps? What do you aim to achieve in a year from now? Do you have a timeline or plan for its completion?"
            }
            name={"yourNextSteps"}
            value={startupSpecificData.values.yourNextSteps}
            onChange={startupSpecificData.handleChange}
            error={startupSpecificData.errors.yourNextSteps}
            touched={startupSpecificData.touched.yourNextSteps}
            helperText={
              "Explain your short-term plan. What are the actionable steps you'll take next to move your project forward? Think concrete tasks, milestones, and deadlines."
            }
            bg={"white"}
          />
        </Stack>
        <Stack w={"100%"} spacing={10} color={"brand.500"}>
          <Text color={"#4BB543"} borderBottom={"2px solid"}>
            Business Model
          </Text>
          <FormTextArea
            label={
              "What are your primary and secondary revenue streams? (e.g., subscriptions, transactions, advertising, data monetization)"
            }
            name={"primaryAndSecondaryRevenueStreams"}
            value={startupSpecificData.values.primaryAndSecondaryRevenueStreams}
            onChange={startupSpecificData.handleChange}
            error={startupSpecificData.errors.primaryAndSecondaryRevenueStreams}
            touched={
              startupSpecificData.touched.primaryAndSecondaryRevenueStreams
            }
            helperText={
              "Descripe how you generate income. It asks for your two main sources of revenue: Primary: Your biggest income source, the engine driving your finances. Secondary: Additional income sources, supplementing your primary stream."
            }
            bg={"white"}
          />
          <FormTextArea
            label={
              "Describe your plan to price your product or service and your analysis of customer pricing sensitivity to ensure profitability. (e.g., tiered pricing, freemium model, dynamic pricing)"
            }
            name={"pricingPlan"}
            value={startupSpecificData.values.pricingPlan}
            onChange={startupSpecificData.handleChange}
            error={startupSpecificData.errors.pricingPlan}
            touched={startupSpecificData.touched.pricingPlan}
            helperText={
              "Briefly describe your chosen pricing strategy (e.g., tiered pricing with premium features).Mention your analysis of customer price sensitivity and how it informs your strategy.Show confidence in your pricing plan's ability to drive profitability."
            }
            bg={"white"}
          />
          <FormTextArea
            label={
              "What are your major cost components (e.g., personnel, marketing, technology, infrastructure) and your optimization to your cost structure to maintain profitability as you scale with/without any potential economies?"
            }
            name={"costComponents"}
            value={startupSpecificData.values.costComponents}
            onChange={startupSpecificData.handleChange}
            error={startupSpecificData.errors.costComponents}
            touched={startupSpecificData.touched.costComponents}
            helperText={
              "List your major cost components. Briefly explain your strategies for optimizing each area, either leveraging economies of scale or implementing specific cost-control measures.Show a clear understanding of how you'll maintain profitability as your business grows."
            }
            bg={"white"}
          />
          <FileUploadField
            label={"Upload your business plan"}
            name={"businessPlanFile"}
            value={startupSpecificData.values.businessPlanFile}
            onChange={startupSpecificData.setFieldValue}
            error={startupSpecificData.errors.businessPlanFile}
            touched={startupSpecificData.touched.businessPlanFile}
            helperText={
              "Keep your plan concise, well-organized, and visually appealing. Use clear and professional language, avoiding jargon or technical terms.Tailor your plan to your specific audience and their needs.Be honest and realistic about your projections and challenges.Proofread and edit your plan carefully before submitting it."
            }
            bg={"white"}
          />
        </Stack>
        <Stack w={"100%"} spacing={10} color={"brand.500"}>
          <Text color={"#4BB543"} borderBottom={"2px solid"}>
            Technology and Innovation
          </Text>
          <FormTextArea
            label={
              "Describe the core technology that powers your solution and the features, functionalities and benefits of the solution."
            }
            name={"technologyThatPowersYourSolution"}
            value={startupSpecificData.values.technologyThatPowersYourSolution}
            onChange={startupSpecificData.handleChange}
            error={startupSpecificData.errors.technologyThatPowersYourSolution}
            touched={
              startupSpecificData.touched.technologyThatPowersYourSolution
            }
            helperText={
              "Descripe the technological foundation of your solution. What makes it tick? This could be AI, machine learning, a new algorithm, or a unique hardware setup.And the features and functionalities your solution offers. What specific tasks can it do? What problems does it solve? Think tangible actions and capabilities."
            }
            bg={"white"}
          />
          <FormTextArea
            label={
              "Describe the high-Level architecture and the main software and hardware components of your system and the technology platforms that you intend to use in building your system, such as operating systems, programming languages, backend/frontend stacks, AI models, etc."
            }
            name={"highLevelDescriptionOfYourSoftwareHardwareArchitecture"}
            value={
              startupSpecificData.values
                .highLevelDescriptionOfYourSoftwareHardwareArchitecture
            }
            onChange={startupSpecificData.handleChange}
            error={
              startupSpecificData.errors
                .highLevelDescriptionOfYourSoftwareHardwareArchitecture
            }
            touched={
              startupSpecificData.touched
                .highLevelDescriptionOfYourSoftwareHardwareArchitecture
            }
            helperText={
              "Briefly describe the overall structure of your system, how its components interact, and the flow of data. Think layers, modules, and communication channels. List the main software and hardware parts making up your system. This could include servers, databases, software applications, AI models, sensors, or any specialized equipment.Outline the platforms and tools you plan to use for development and deployment. "
            }
            bg={"white"}
          />
        </Stack>
        <Stack w={"100%"} spacing={10} color={"brand.500"}>
          <Text color={"#4BB543"} borderBottom={"2px solid"}>
            Market Traction
          </Text>
          <FormTextArea
            label={
              "How many people does your solution currently serve, and how many do you plan to serve in the next year?"
            }
            name={"numberOfPeopleInYourSolutionCurrentlyServing"}
            value={
              startupSpecificData.values
                .numberOfPeopleInYourSolutionCurrentlyServing
            }
            onChange={startupSpecificData.handleChange}
            error={
              startupSpecificData.errors
                .numberOfPeopleInYourSolutionCurrentlyServing
            }
            touched={
              startupSpecificData.touched
                .numberOfPeopleInYourSolutionCurrentlyServing
            }
            helperText={
              "Descripe how many people are currently benefiting from your solution. This could be users, customers, subscribers, or any relevant metric for your offering. It focuses on your future aspirations. How many people do you aim to reach within the next year? Be specific with a number or target range."
            }
            bg={"white"}
          />
          <FormTextArea
            label={
              "What are your customer acquisition channels, and how will these scale as you grow? (e.g., organic vs. paid marketing, viral channels)"
            }
            name={"customerAcquisitionChannels"}
            value={startupSpecificData.values.customerAcquisitionChannels}
            onChange={startupSpecificData.handleChange}
            error={startupSpecificData.errors.customerAcquisitionChannels}
            touched={startupSpecificData.touched.customerAcquisitionChannels}
            helperText={
              "Descripe the strategies you use to attract new users or acquire clients. Consider options like: Organic channels: Content marketing, SEO, social media engagement, referral programs.\nPaid marketing: Online advertising, PPC campaigns, sponsored content.\nViral channels: Built-in sharing features, user-generated content, word-of-mouth.\nand what is your plan to scale your customer acquisition efforts as you expand your business."
            }
            bg={"white"}
          />

          <FormTextArea
            label={
              " How many new users/customers are acquired in a given period (e.g., month, year) (Customer acquisition rate (CAR))?"
            }
            name={"customerAcquisitionRate"}
            value={startupSpecificData.values.customerAcquisitionRate}
            onChange={startupSpecificData.handleChange}
            error={startupSpecificData.errors.customerAcquisitionRate}
            touched={startupSpecificData.touched.customerAcquisitionRate}
            helperText={
              "Simply state the number of new users/customers you acquire in your chosen timeframe. Be clear about the timeframe you're referring to (e.g., 'We acquire an average of 1,000 new users per month').Remember: Keep it concise, highlight the actual number, and clarify the timeframe for your CAR calculation."
            }
            bg={"white"}
          />
          <FormTextArea
            label={
              "Can you leverage existing customer segments or partnerships to expand into new markets without significant additional costs and how?"
            }
            name={"costPerAcquisition"}
            value={startupSpecificData.values.costPerAcquisition}
            onChange={startupSpecificData.handleChange}
            error={startupSpecificData.errors.costPerAcquisition}
            touched={startupSpecificData.touched.costPerAcquisition}
            helperText={
              "The average spend you incur to land a new user or customer. Think of it like:Price of each new recruit to your team.Cost of each new seed you plant in your garden."
            }
            bg={"white"}
          />

          <FormTextArea
            label={
              "Can you leverage existing customer segments or partnerships to expand into new markets without significant additional costs and how?"
            }
            name={"leverageExistingCustomerSegments"}
            value={startupSpecificData.values.leverageExistingCustomerSegments}
            onChange={startupSpecificData.handleChange}
            error={startupSpecificData.errors.leverageExistingCustomerSegments}
            touched={
              startupSpecificData.touched.leverageExistingCustomerSegments
            }
            helperText={
              "This question asks if you can use your current customers or partners as springboards to new markets without spending a ton on expansion. Imagine it's like planting new seeds in your garden using existing soil and tools instead of buying everything new."
            }
            bg={"white"}
          />
          <FormTextArea
            label={
              "What is your current invested capital, revenues and number of customers?"
            }
            name={"currentInvestedCapital"}
            value={startupSpecificData.values.currentInvestedCapital}
            onChange={startupSpecificData.handleChange}
            error={startupSpecificData.errors.currentInvestedCapital}
            touched={startupSpecificData.touched.currentInvestedCapital}
            helperText={
              "This question wants a snapshot of your financial and customer health:Invested Capital: Total amount of money your business has used to operate (funding, assets, etc.). Revenues: Income your business earns through sales, subscriptions, or other means. Number of Customers: Total number of individuals or businesses using your products/services."
            }
            bg={"white"}
          />
        </Stack>
        <Stack w={"100%"} spacing={10} color={"brand.500"}>
          <Text color={"#4BB543"} borderBottom={"2px solid"}>
            Financial Viability
          </Text>
          <FormTextArea
            label={"What is the final budget of your project prototype?"}
            name={"finalBudgetOfYourProjectPrototype"}
            value={startupSpecificData.values.finalBudgetOfYourProjectPrototype}
            onChange={startupSpecificData.handleChange}
            error={startupSpecificData.errors.finalBudgetOfYourProjectPrototype}
            touched={
              startupSpecificData.touched.finalBudgetOfYourProjectPrototype
            }
            helperText={
              "Mention The total amount you expect to spend on developing and building your project prototype.            "
            }
            bg={"white"}
          />
          <FormTextArea
            label={
              " How much investment does your business need to grow? and How will you allocate the investment should you receive it?"
            }
            name={"expectedMonthlyRevenueForNext2Years"}
            value={
              startupSpecificData.values.expectedMonthlyRevenueForNext2Years
            }
            onChange={startupSpecificData.handleChange}
            error={
              startupSpecificData.errors.expectedMonthlyRevenueForNext2Years
            }
            touched={
              startupSpecificData.touched.expectedMonthlyRevenueForNext2Years
            }
            helperText={
              "It asks what amount of investment you need to fuel your business's growth. Think of it as the 'growth fuel' budget.And how you plan to spend the investment if you receive it. Think of it as your 'growth roadmap'."
            }
            bg={"white"}
          />
          <FormTextArea
            label={
              "What are your expected monthly revenues for the next 2 years, and their sources?"
            }
            name={"expectedMonthlyRevenueForNext2Years"}
            value={
              startupSpecificData.values.expectedMonthlyRevenueForNext2Years
            }
            onChange={startupSpecificData.handleChange}
            error={
              startupSpecificData.errors.expectedMonthlyRevenueForNext2Years
            }
            touched={
              startupSpecificData.touched.expectedMonthlyRevenueForNext2Years
            }
            helperText={
              "Mention Your Projected Revenue: How much money do you expect to earn each month for the next two years? Be specific with monthly figures for 24 months. And Revenue Sources: Where will this money come from? Briefly mention the different streams contributing to your income (e.g., subscriptions, product sales, services)."
            }
            bg={"white"}
          />
          <FileUploadField
            label={"Upload your financial plan."}
            name={"financialPlanFile"}
            value={startupSpecificData.values.financialPlanFile}
            onChange={startupSpecificData.setFieldValue}
            error={startupSpecificData.errors.financialPlanFile}
            touched={startupSpecificData.touched.financialPlanFile}
            helperText={
              "Include: (Executive Summary, Business Description,Market Analysis, Management Team, Financial Projections, Revenue Projections, Expense Projections, Funding Requirements, Risks & Mitigation Strategies)"
            }
            bg={"white"}
          />
        </Stack>
        <Stack w={"100%"} spacing={10} color={"brand.500"}>
          <Text color={"#4BB543"} borderBottom={"2px solid"}>
            Adaptability
          </Text>
          <FormTextArea
            label={
              " How do you stay informed about changes in your target market and what tools and techniques do you use to track and analyze market trends?"
            }
            name={"howDoYouStayInformedAboutChangesInYourTargetMarket"}
            value={
              startupSpecificData.values
                .howDoYouStayInformedAboutChangesInYourTargetMarket
            }
            onChange={startupSpecificData.handleChange}
            error={
              startupSpecificData.errors
                .howDoYouStayInformedAboutChangesInYourTargetMarket
            }
            touched={
              startupSpecificData.touched
                .howDoYouStayInformedAboutChangesInYourTargetMarket
            }
            helperText={
              "How you keep your finger on the pulse: What sources and methods do you use to stay up-to-date on what's happening in your target market? Tools of the trade: What specific tools and techniques do you use to track and analyze trends that might impact your business?"
            }
            bg={"white"}
          />
          <FormTextArea
            label={
              "What are the expected risks/challenges and how are you planning to mitigate them? "
            }
            name={"expectedRisks"}
            value={startupSpecificData.values.expectedRisks}
            onChange={startupSpecificData.handleChange}
            error={startupSpecificData.errors.expectedRisks}
            touched={startupSpecificData.touched.expectedRisks}
            helperText={
              "Potential Pitfalls: What are the major risks and challenges you foresee for your project, business, or idea? This could include things like market competition, funding, technical hurdles, operational challenges, or team-related issues. And anticipation & Action: How are you planning to address and mitigate these risks? This shows your ability to anticipate problems and develop solutions proactively."
            }
            bg={"white"}
          />
          <FormTextArea
            label={
              "Identify key challenges you faced while designing and developing the solution and how you handled them."
            }
            name={"keyChallengesYouFacedDuringYourJourney"}
            value={
              startupSpecificData.values.keyChallengesYouFacedDuringYourJourney
            }
            onChange={startupSpecificData.handleChange}
            error={
              startupSpecificData.errors.keyChallengesYouFacedDuringYourJourney
            }
            touched={
              startupSpecificData.touched.keyChallengesYouFacedDuringYourJourney
            }
            helperText={
              "Briefly mention 3-4 main challenges you faced during design and development. (e.g., technical limitations, resource constraints, market uncertainties).Be specific and relevant to your solution.And for each challenge, explain how you handled it. Highlight your decision-making process, chosen solutions, and implemented actions.Showcase your resourcefulness and ability to adapt."
            }
            bg={"white"}
          />
        </Stack>
        <Stack w={"100%"} spacing={10} color={"brand.500"}>
          <Text color={"#4BB543"} borderBottom={"2px solid"}>
            Competition
          </Text>
          <FormTextArea
            label={"Mention your project/startup direct competitors."}
            name={"directCompetitors"}
            value={startupSpecificData.values.directCompetitors}
            onChange={startupSpecificData.handleChange}
            error={startupSpecificData.errors.directCompetitors}
            touched={startupSpecificData.touched.directCompetitors}
            helperText={
              "Name 2-3 key competitors directly addressing the same target market and offering similar solutions.Be specific: Briefly mention their names, products/services, and unique selling propositions.Highlight your key differentiators: Briefly explain what sets your project/startup apart from these competitors. This shows your value proposition and competitive edge."
            }
            bg={"white"}
          />
        </Stack>
        <Stack w={"100%"} spacing={10} color={"brand.500"}>
          <Text color={"#4BB543"} borderBottom={"2px solid"}>
            Regulatory and Legal Consideration
          </Text>
          <FormSelectField
            label={"Is your startup established legally?"}
            name={"isYourStartupEstablishedLegally"}
            allOptions={[
              { code: "yes", name: "Yes" },
              { code: "no", name: "No" },
            ]}
            placeholder={"Select an option"}
            value={startupSpecificData.values.isYourStartupEstablishedLegally}
            onChange={startupSpecificData.handleChange}
            helperText={"Select an option"}
            error={startupSpecificData.errors.isYourStartupEstablishedLegally}
            touched={
              startupSpecificData.touched.isYourStartupEstablishedLegally
            }
            bg={"white"}
          />
          <FormTextField
            name={"howLongHasTheStartupBeenEstablishedLegally"}
            type={"number"}
            label={"How long has the startup been established legally?"}
            placeholder={"Enter number of years"}
            value={
              startupSpecificData.values
                .howLongHasTheStartupBeenEstablishedLegally
            }
            onChange={startupSpecificData.handleChange}
            error={
              startupSpecificData.errors
                .howLongHasTheStartupBeenEstablishedLegally
            }
            touched={
              startupSpecificData.touched
                .howLongHasTheStartupBeenEstablishedLegally
            }
            helperText={"Enter number of years"}
            bg={"white"}
          />
          <FormTextArea
            label={"Please list all equity holders and thier precentages."}
            name={"equityHolders"}
            value={startupSpecificData.values.equityHolders}
            onChange={startupSpecificData.handleChange}
            error={startupSpecificData.errors.equityHolders}
            touched={startupSpecificData.touched.equityHolders}
            helperText={
              "Mention the names of the equity holders and the percentage of shares they hold."
            }
            bg={"white"}
          />
        </Stack>
        <Stack w={"100%"} spacing={10} color={"brand.500"}>
          <Text color={"#4BB543"} borderBottom={"2px solid"}>
            Customer FeedBack
          </Text>
          <FormTextArea
            label={
              "What steps have you taken to understand the needs of the population you want to serve?"
            }
            name={
              "stepsYouHaveTakenToUnderstandTheNeedsOfThePopulationYouWantToServe"
            }
            value={
              startupSpecificData.values
                .stepsYouHaveTakenToUnderstandTheNeedsOfThePopulationYouWantToServe
            }
            onChange={startupSpecificData.handleChange}
            error={
              startupSpecificData.errors
                .stepsYouHaveTakenToUnderstandTheNeedsOfThePopulationYouWantToServe
            }
            touched={
              startupSpecificData.touched
                .stepsYouHaveTakenToUnderstandTheNeedsOfThePopulationYouWantToServe
            }
            helperText={
              "Highlight different methods: Briefly mention 2-3 key ways you researched and understood your target population's needs. This could include:(Customer surveys or interviews, Focus groups or user testing, Market research reports or data analysis, Direct observation or immersion in their community.)"
            }
            bg={"white"}
          />
        </Stack>
        <Stack w={"100%"} spacing={10} color={"brand.500"}>
          <Text color={"#4BB543"} borderBottom={"2px solid"}>
            Network and Partnerships
          </Text>
          <FormTextArea
            label={
              "What organizations do you currently partner with, if any and how are you working with them?"
            }
            name={"organizationDoYouCurrentlyPartnerWith"}
            value={
              startupSpecificData.values.organizationDoYouCurrentlyPartnerWith
            }
            onChange={startupSpecificData.handleChange}
            error={
              startupSpecificData.errors.organizationDoYouCurrentlyPartnerWith
            }
            touched={
              startupSpecificData.touched.organizationDoYouCurrentlyPartnerWith
            }
            helperText={
              "Partnerships: Do you have existing partnerships with other organizations? And collaboration details: If so, how do these partnerships work?"
            }
            bg={"white"}
          />
        </Stack>
        <Stack w={"100%"} spacing={10} color={"brand.500"}>
          <Text color={"#4BB543"} borderBottom={"2px solid"}>
            Execution Capability
          </Text>
          <FormTextArea
            label={
              "Which skills and knowledge do you have to successfully develop this idea into a product/MVP and how are you and your team well-positioned to deliver this solution?"
            }
            name={"skillsAndKnowledgeYouHaveToSucessfullyDevelopThisIdea"}
            value={
              startupSpecificData.values
                .skillsAndKnowledgeYouHaveToSucessfullyDevelopThisIdea
            }
            onChange={startupSpecificData.handleChange}
            error={
              startupSpecificData.errors
                .skillsAndKnowledgeYouHaveToSucessfullyDevelopThisIdea
            }
            touched={
              startupSpecificData.touched
                .skillsAndKnowledgeYouHaveToSucessfullyDevelopThisIdea
            }
            helperText={
              "Briefly mention 2-3 key skills essential for building your product/MVP (e.g., programming, design, marketing, industry knowledge).And showcase how your skills specifically equip you to tackle this project. Briefly mention relevant experience or achievements. Describe 1-2 key strengths your team brings to the table (e.g., diverse skillsets, complementary experiences, proven track record)."
            }
            bg={"white"}
          />
        </Stack>
        <Stack w={"100%"} spacing={10} color={"brand.500"}>
          <Text color={"#4BB543"} borderBottom={"2px solid"}>
            Societal or Sustainability Benefit of the Solution
          </Text>
          <CheckBoxGroupField
            label={
              "Which of the SDGs does the activity of your business idea support?"
            }
            name={"sdgDoesTheActivityOfYourBusinessIdeaSupport"}
            values={
              startupSpecificData.values
                .sdgDoesTheActivityOfYourBusinessIdeaSupport
            }
            setFieldValues={(arr) => {
              startupSpecificData.handleChange({
                target: {
                  name: "sdgDoesTheActivityOfYourBusinessIdeaSupport",
                  value: arr,
                },
              });
              console.log(arr);
            }}
            error={
              startupSpecificData.errors
                .sdgDoesTheActivityOfYourBusinessIdeaSupport
            }
            touched={
              startupSpecificData.touched
                .sdgDoesTheActivityOfYourBusinessIdeaSupport
            }
            helperText={"Select all that apply"}
            options={[
              { value: "1", label: "No Poverty" },
              { value: "2", label: "Zero Hunger" },
              { value: "3", label: "Good Health and Well-being" },
              { value: "4", label: "Quality Education" },
            ]}
          />
          <FormTextArea
            label={
              "Please elaborate how your idea contributes to the SDGs selected in the question above."
            }
            name={"eleaborateHowYourIdeasContributesToTheSDGsSelected"}
            value={
              startupSpecificData.values
                .eleaborateHowYourIdeasContributesToTheSDGsSelected
            }
            onChange={startupSpecificData.handleChange}
            error={
              startupSpecificData.errors
                .eleaborateHowYourIdeasContributesToTheSDGsSelected
            }
            touched={
              startupSpecificData.touched
                .eleaborateHowYourIdeasContributesToTheSDGsSelected
            }
            helperText={
              "Briefly review the core goals and targets of each relevant SDG. For each SDG, explain how your idea directly or indirectly addresses its goals. Be specific and provide concrete examples."
            }
            bg={"white"}
          />
        </Stack>
        <Stack w={"100%"} spacing={10} color={"brand.500"}>
          <Text color={"#4BB543"} borderBottom={"2px solid"}>
            Further needed data
          </Text>
          <FormTextArea
            label={"Film your elevator pitch."}
            name={"filmYourPitchVideo"}
            value={startupSpecificData.values.filmYourPitchVideo}
            onChange={startupSpecificData.handleChange}
            error={startupSpecificData.errors.filmYourPitchVideo}
            touched={startupSpecificData.touched.filmYourPitchVideo}
            helperText={
              "Provide an uploaded or YouTube video link pitching your solution (maximum 2-minute video). Your video doesn’t need to be fancy—you can simply record yourself speaking into the camera of a smartphone. Though it’s not required, a video will help our reviewers understand your solution, and we highly recommend you create one. Note: please ensure the video privacy settings are set to public."
            }
            bg={"white"}
          />
          <FormTextArea
            label={
              "Please provide URL for staging environment or Link to download the published application, needed credentials (Username & Password) and/or Customer number etc.. (should testing the application requires logging in)."
            }
            name={"stagingEnvirnoment"}
            value={startupSpecificData.values.stagingEnvirnoment}
            onChange={startupSpecificData.handleChange}
            error={startupSpecificData.errors.stagingEnvirnoment}
            touched={startupSpecificData.touched.stagingEnvirnoment}
            helperText={
              "Share the appropriate link based on the application's availability (staging environment or download).If applicable, provide the required login details. If testing doesn't involve logging in, clarify that no credentials are needed."
            }
            bg={"white"}
          />
        </Stack>
        <Stack w={"100%"} spacing={10} color={"brand.500"}>
          <Text color={"#4BB543"} borderBottom={"2px solid"}>
            About the Program
          </Text>
          <FormTextArea
            label={
              "Are you committed the joining the full program and please explain why you are interested in this program?"
            }
            name={"areYouCommittedTheJoiningTheFullProgram"}
            value={
              startupSpecificData.values.areYouCommittedTheJoiningTheFullProgram
            }
            onChange={startupSpecificData.handleChange}
            error={
              startupSpecificData.errors.areYouCommittedTheJoiningTheFullProgram
            }
            touched={
              startupSpecificData.touched
                .areYouCommittedTheJoiningTheFullProgram
            }
            helperText={
              "State your firm commitment to joining the full program.Highlight your enthusiasm: Express genuine interest and excitement about the program's opportunities.Tailor your reasons: Explain why this particular program aligns with your goals and aspirations.Show authenticity: Be honest and specific about what motivates you."
            }
            bg={"white"}
          />
          <FormTextArea
            label={
              "Have you participated with this project in any competition or incubation program before? if yes, (mention the competitions)."
            }
            name={"participatedInAnyCompetitionOrIncubationProgram"}
            value={
              startupSpecificData.values
                .participatedInAnyCompetitionOrIncubationProgram
            }
            onChange={startupSpecificData.handleChange}
            error={
              startupSpecificData.errors
                .participatedInAnyCompetitionOrIncubationProgram
            }
            touched={
              startupSpecificData.touched
                .participatedInAnyCompetitionOrIncubationProgram
            }
            helperText={
              "Simply say 'Yes' or 'No' if your project has or hasn't participated in similar programs.If yes, be concise: Briefly mention the competition or program names (1-2 maximum).Optional: If relevant, highlight any achievements or learnings from those experiences."
            }
            bg={"white"}
          />
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={4}
          w={"100%"}
          justifyContent={"space-between"}
        >
          <GreenOutlinedButton
            label={"Save Draft"}
            w={{
              base: "100%",
              md: "20%",
            }}
            onClick={() => {
              startupSpecificData.handleSubmit();
              saveToLocalStorage(startupSpecificData, "startupSpecificData");
            }}
          />
          <GreenButton
            w={{
              base: "100%",
              md: "20%",
            }}
            label={"Submit"}
            onClick={() => {
              startupSpecificData.handleSubmit();
              saveToLocalStorage(startupSpecificData, "startupSpecificData");
            }}
          />
        </Stack>
      </Stack>
    </SideBar>
  );
}

export default ApplicationForm2;
