export interface Project {
  id: string;
  title: string;
  year: string;
  domains: string[];
  summary: string;
  verifiedTags: string[];
}

export const projectsData: Project[] = [
  {
    id: "secure-voting-blockchain-visual-cryptography",
    title: "Secure Online Voting Using Blockchain and Visual Cryptography",
    year: "2021",
    domains: ["Blockchain", "Visual Cryptography"],
    summary: "Research project investigating secure electronic voting mechanisms through the integration of blockchain distributed ledger technology and visual cryptography secret sharing.",
    verifiedTags: ["Blockchain", "Visual Cryptography"]
  },
  {
    id: "secure-online-voting-visual-cryptography",
    title: "Secure Online Voting Using Visual Cryptography",
    year: "2020",
    domains: ["Visual Cryptography", "Web Designing"],
    summary: "System design exploring visual cryptography techniques applied to secure online ballot verification and web-based interface design.",
    verifiedTags: ["Visual Cryptography", "Web Designing"]
  },
  {
    id: "identity-access-control-iot-cloud",
    title: "Identity-Based Access Control Framework for Distributed Cloud Services in IoT",
    year: "2018",
    domains: ["Cloud Computing", "IoT"],
    summary: "Framework for identity-based access control and security mechanisms connecting distributed cloud services with Internet of Things (IoT) environments.",
    verifiedTags: ["Cloud Computing", "IoT"]
  },
  {
    id: "malicious-pdf-detection",
    title: "Malicious PDF File Detection",
    year: "2019",
    domains: ["RSA", "String Detection"],
    summary: "Security methodology applying RSA cryptographic principles and string detection techniques for identifying malicious portable document format (PDF) files.",
    verifiedTags: ["RSA", "String Detection"]
  },
  {
    id: "traffic-density-detection-mobile-alert",
    title: "Traffic Density Detection Using Mobile Alert System",
    year: "2018",
    domains: ["Python", "Image Processing"],
    summary: "Automated traffic monitoring prototype applying Python and image processing algorithms coupled with a mobile alert notification mechanism.",
    verifiedTags: ["Python", "Image Processing"]
  }
];
