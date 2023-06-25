import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import React from "react";
import logo from "@/public/logo.svg";

interface EmailProps {
  fullName?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export default function WaitListTemplate({
  fullName = "John Doe",
}: EmailProps) {
  return (
    <Html>
      <Head />
      <Preview>YAY! You&apos;re on the waitlist</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea]  rounded-lg pl-[20px] my-[40px] mx-auto w-[600px]">
            <Section className="mt-[32px] p-[25px]">
              <Img
                src={`${baseUrl}/public/logo.svg`}
                width="40"
                height="37"
                alt="CMFest"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center  my-[30px] mx-0">
              Congratulations on Joining the #CMFest23 Waitlist
            </Heading>
            <Text className="text-black text-[14px] leading-[24px] px-[20px]">
              Hello {fullName},
            </Text>
            <Text className="text-[#181b36] text-[14px] leading-[24px] px-[20px]">
              Thank you for joining the waitlist for the Community Managers
              Festival for this year, we are super excited to host you at
              #CMFest23
            </Text>
            <Text className="text-[#181b36] text-[14px] leading-[24px] px-[20px] py-[10px]">
              This year‘s festival is filled with amazing topics and sessions
              about the past, present and future of community management and how
              we can evolve it a step further.
            </Text>
            <Text className="text-[#181b36] text-[14px] leading-[24px] px-[20px] py-[10px]">
              You can also follow us on social media below, to stay up to date
              with the latest information about the festival.
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px] p-[20px] text-center">
              copyright @ CMFest 2023 {"  "}
              <strong>
                <Link href="https://twitter.com/cmfestafrica"> Twitter</Link> |
              </strong>
              <strong>
                <Link href="https://www.linkedin.com/company/cmfestafrica/">
                  {" "}
                  LinkedIn
                </Link>{" "}
                |
              </strong>
              <strong>
                <Link href="https://www.instagram.com/cmfestafrica/">
                  {" "}
                  Instagram
                </Link>
              </strong>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
