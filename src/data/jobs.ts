import TeslaLogo from "../img/tesla.jpg";
import UberLogo from "../img/uber.jpg";
import FiixLogo from "../img/fiix.jpg";

interface Job {
  company_name: string;
  title: string;
  team?: string;
  description: string;
  image: string;
  time: string;
  tech: string[];
  current?: boolean;
  href?: string;
}

const jobs: Job[] = [
  {
    company_name: "Tesla",
    title: "Software Engineer",
    team: "Core Automation Services",
    description:
      "Currently developing multiple mission-critical software projects running directly on Tesla's latest manufacturing lines",
    image: TeslaLogo,
    current: true,
    time: "June, 2020 - Present",
    tech: ["Golang", "ReactJS", "Kubernetes", "CockroachDB", "gRPC"],
  },
  {
    company_name: "Uber",
    title: "Software Engineering Intern",
    team: "Uber Money",
    description:
      "Built out large-scale complex services surrounding financial partnerships and financial product onboarding",
    image: UberLogo,
    time: "September 2019 - December 2019",
    tech: ["Golang", "RPC", "Kubernetes"],
  },
  {
    company_name: "Tesla",
    title: "Software Engineering Intern",
    team: "Design Technology",
    description:
      "Reverse-engineered proprietary CAD rendering logic into a universal lightweight Javascript " +
      "WebGL renderer of all Tesla vehicle CAD components",
    image: TeslaLogo,
    time: "September 2019 - December 2019",
    tech: ["ReactJS", "GraphQL", "gRPC"],
  },
  {
    company_name: "Fiix (YC 2017)",
    title: "Software Engineer",
    description:
      "One of the company's first engineers, helped build out its full-stack software platform to service all employees and customers",
    image: FiixLogo,
    time: "January 2020 - December 2020",
    href: "https://fiix.io",
    tech: ["NodeJS", "ReactJS", "AWS", "MongoDB"],
  },
];

export default jobs;
