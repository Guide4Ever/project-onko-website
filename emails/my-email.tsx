import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";
import { CSSProperties } from "react";  // Import CSSProperties to type styles

interface EmailProps {
  logoUrl: string;
  imageUrl: string;
  firstName: string;
  lastName: string;
  age: number;
  content: string;
}

export const StoryEmail = ({
  logoUrl,
  imageUrl,
  firstName,
  lastName,
  age,
  content,
}: EmailProps) => {

  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={logoUrl}
                width="auto"
                height="100"
                alt="Onko logotip"
                className="my-0 mx-auto rounded-full"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 mx-0">
              Prišla je <strong>nova zgodba</strong>!
            </Heading>
            <Section>
              <Img
                src={imageUrl}
                width="150"
                height="150"
                alt="Slika osebe"
                className="my-0 mx-auto rounded-full"
              />
            </Section>
            <Section className="text-center mt-[0px] mb-[0px]">
              <Heading className="text-black text-[24px] font-normal text-center p-0 mx-0">
                {firstName} {lastName}, {age}
              </Heading>
            </Section>
            <Text className="text-gray-500 text-center text-[14px] leading-[24px] flex-grow">
              <strong>Zgodba</strong>
            </Text>
            <Container className="border border-solid border-[#eaeaea] bg-gray-100 p-[20px]">
              <Text className="text-gray-500 text-justify text-[14px] leading-[24px] flex-grow">
                {content}
              </Text>
            </Container>
            <Text className="text-gray-500 text-center text-[14px] leading-[24px] flex-grow">
              <strong>URL slike</strong>
            </Text>
            <code style={code as CSSProperties}>{imageUrl}</code>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-center text-[#666666] text-[12px] leading-[24px]">
              Oseba <strong>{firstName} {lastName}</strong> se je strinjala s pogoji uporabe njenih podatkov.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

StoryEmail.PreviewProps = {
  logoUrl: "https://ik.imagekit.io/via4rkmu1/ONKO%20Logotip%20copy.svg?updatedAt=1730563122171",
  imageUrl: "https://ik.imagekit.io/via4rkmu1/female_portrait_postcrest.webp?updatedAt=1730759482152",
  firstName: "Ana",
  lastName: "Hribljan",
  age: 25,
  content: "Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum.",
} as EmailProps;

export default StoryEmail;

const code: CSSProperties = {
  display: "inline-block",
  textAlign: 'justify',
  padding: "16px 4.5%",
  width: "90.5%",
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  border: "1px solid #eee",
  color: "#333",
  wordWrap: "break-word",  // Correctly typed
  wordBreak: "break-all",  // Correctly typed
  whiteSpace: "pre-wrap",  // Correctly typed
  overflowWrap: "break-word",  // Correctly typed
  maxWidth: "100%",  // Correctly typed
};