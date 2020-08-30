import TeslaLogo from "../img/tesla.jpg";
import UberLogo from "../img/uber.jpg";
import FiixLogo from "../img/fiix.jpg";

const jobs = [
  {
    company_name: "Tesla",
    title: "Software Engineer",
    team: "Core Automation Services",
    description:
      "Currently developing multiple mission-critical software projects running directly on Tesla's latest manufacturing lines",
    image: TeslaLogo,
    current: true,
    time: "June, 2020 - Present",
  },
  {
    company_name: "Uber",
    title: "Software Engineer",
    team: "Uber Money",
    description:
      "Built out large-scale complex services surrounding financial partnerships and financial product onboarding",
    image: UberLogo,
    time: "September 2019 - December 2019",
  },
  {
    company_name: "Fiix (Y-Combinator Graduate Winter 2017)",
    title: "Software Engineer",
    description:
      "One of the company's first engineers, helped build out its software platform",
    image: FiixLogo,
    time: "January 2020 - December 2020",
  },
];

export default jobs;
