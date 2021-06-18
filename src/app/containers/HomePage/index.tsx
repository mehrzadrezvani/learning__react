import react from "react";
import styled from "styled-components";
import tw from "twin.macro";

const PageContainer = styled.div`
	${tw`
    flex
    flex-col
    w-full
    h-full
    intem-center
    overflow-x-hidden
`}
`;

export function HomePage() {
	return <PageContainer>hello World</PageContainer>;
}
