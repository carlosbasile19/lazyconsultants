import { BookA, LucideIcon, Mail, MessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeIcon } from "lucide-react";


import user1 from "./public/profile-pictures/user1.jpg";
import user2 from "./public/profile-pictures/user2.jpg";
import user3 from "./public/profile-pictures/user3.jpg";
import user4 from "./public/profile-pictures/user4.jpg";
import user5 from "./public/profile-pictures/user5.jpg";
import user6 from "./public/profile-pictures/user6.jpg";

interface features {
  icon: LucideIcon;
  text: string;
  description: string;
}


export const MAX_FREE_COUNTS = 100;

export const PROMPT_INSTRUCTIONS_MAIL = `

Input: An email draft authored by a consultant or a simple phrase in a language that might not be english. The draft of the email or the phrase may contain spelling and grammatical inaccuracies.

Task: The AI is required to:

DO NOT TRANSLATE THE INPUT

Correct spelling and grammatical errors without translating to other language nor altering the original intent or adding new content.

Maintain the original messages content, ensuring no new phrases or text are introduced.

Output the revised email or phrase, which should be error-free and retain the original message s integrity.

Output: A corrected email or phrase that is coherent, professionally polished, and true to the consultant s initial draft or simple phrase.

You must answer only in markdown code snippets.

You must not suggest new phrases such the subject of the email.

`;

export const PROMPT_INSTRUCTIONS_MAIL_TRANSLATION = `

You are an email translator.

Your job is to revolutionize the way consultants operate in a multi-lingual and technical environment. You use a sophisticated system that recognizes and preserves technical terminology while translating the rest of the text to the target language which is [NAME_LANGUAGE].

Your capabilities include:

Advanced Language Recognition: You can automatically detect the language of emails and translate them to [NAME_LANGUAGE].

Automatic Glossary: You have the ability to preserve technical terms in the original language while translating the rest of the text. These terms are typically capitalized, such as “Worker”, "Workers", “Supervisory Organization”, and “Location”. 

PLEASE NOTE THAT Words with CAPITAL LETTERS MUST NOT BE TRANSLATED!

Quality and Accuracy: You prioritize high-quality translations that maintain the nuance and intent of the original message. Translate too the sense of the phrase and do not translate literally since this might lead to errors.

I mark that you must not translate the words with capital letters.

As an AI, you will receive an email or a phrase as input to translate. If there is a word that you do not understand and are unsure whether to translate it or not, you will ask the consultant for clarification. Your final output will be the completely translated message or email.

You must answer ONLY in markdown code snippets.

`;

export const tools = [
    {
      label: "Conversation",
      icon : MessageSquare,
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
      href: "/conversation",
    },
    {
      label: "Smart Translation",
      icon : BookA,
      color: "text-pink-700",
      bgColor: "bg-pink-700/10",
      href: "/smart-translation",
    },
    {
      label: "Email Auto-Correction",
      icon: Mail,
      color: "text-orange-500",
      bgColor: "bg-violet-500/10",
      href: "/email-correction",

    },
  ]

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "Lazy Consultant has been a game-changer for our email management. The team's responsiveness, professionalism, and ability to deliver exceptional results have exceeded my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "Lazy Consultant's innovative approach and problem-solving skills have made our email projects a success. I couldn't be happier with the outcome.",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with Lazy Consultant has been a pleasure. Their attention to detail and commitment to excellence are truly commendable. I highly recommend them to anyone in need of top-notch email management.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Lazy Consultant's attention to detail and innovative solutions have accelerated our email projects. Their expertise and professionalism have been instrumental in achieving our goals.",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am impressed by Lazy Consultant's professionalism and dedication. They have consistently delivered outstanding results, exceeding our expectations.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "Lazy Consultant's expertise and dedication have ensured the success of our email projects. They have gone above and beyond, and I look forward to working with them again in the future.",
  },
];


export const features = [
  {
    icon: MessageSquare,
    text: "Email Correction",
    description:
      "Automatically correct emails with advanced algorithms, saving time and ensuring professionalism in your communication.",
  },
  {
    icon: Fingerprint,
    text: "Context-Preserving Translation",
    description:
      "Translate emails seamlessly without altering the context, ensuring clear communication across languages.",
  },
  {
    icon: ShieldHalf,
    text: "Intuitive Interface",
    description:
      "Effortlessly manage your tasks with a user-friendly drag-and-drop interface designed for consultants.",
  },
  {
    icon: BatteryCharging,
    text: "Flexible Compatibility",
    description:
      "Access Lazy Consultant across various platforms, including web, mobile, and desktop, ensuring productivity on the go.",
  },
  {
    icon: PlugZap,
    text: "Customizable Templates",
    description:
      "Utilize customizable templates tailored to different consulting scenarios, streamlining your workflow.",
  },
  {
    icon: GlobeIcon,
    text: "Instant Preview",
    description:
      "Preview email corrections and translations in real-time, allowing for immediate feedback and adjustments.",
  },
 
];



export const checklistItems = [
  {
    title: "Effortless Email Management",
    description:
      "Automatically correct and translate emails with Lazy Consultant, saving time and ensuring professionalism in your communication.",
  },
  {
    title: "Worry-Free Communication",
    description:
      "Communicate confidently across languages with Lazy Consultant's context-preserving translation feature, ensuring clarity and accuracy in your correspondence.",
  },
  {
    title: "Time-Saving AI Assistance",
    description:
      "Utilize Lazy Consultant's AI algorithms to streamline email tasks, reducing time spent on manual corrections and translations.",
  },
  {
    title: "Quick Collaboration",
    description:
      "Share email drafts and collaborate with your team seamlessly using Lazy Consultant's intuitive platform, minimizing turnaround time for projects.",
  },
];


export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "10 Free Generations",
      "Limited Features",
      "Basic Support",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Unlimited Generations",
      "Early Access to New Features",
      "24/7 Support",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
