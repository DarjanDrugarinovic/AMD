import styled from "styled-components";
import Header from "./Header";
import type { FC, PropsWithChildren } from "react";
import Footer from "./Footer";

type Direction = "vertical" | "horizontal";

type SectionLayoutProps = {
  direction?: Direction;
  className?: string;
};

export const SectionLayout: FC<PropsWithChildren<SectionLayoutProps>> = ({
  children,
  direction = "vertical",
  className,
}) => {
  return (
    <SectionLayoutDiv>
      <Header />
      <ContentDiv $direction={direction} className={className}>
        {children}
      </ContentDiv>
      <Footer />
    </SectionLayoutDiv>
  );
};

const ContentDiv = styled.div<{ $direction: Direction }>`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: ${({ $direction }) =>
    $direction === "vertical" ? "column" : "row"};
  background-color: #fff;
`;

const SectionLayoutDiv = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
