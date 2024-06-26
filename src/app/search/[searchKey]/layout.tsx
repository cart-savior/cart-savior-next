import { Suspense } from "react";
import { Container } from "@chakra-ui/react";
import Page from "@/app/search/[searchKey]/page";
import Loading from "@/app/search/[searchKey]/loading";

export default function Layout({ params }: { params: { searchKey: string } }) {
  return (
    <Suspense fallback={<Loading />}>
      <Container maxW="container.lg" px={2}>
        <Page params={params} />
      </Container>
    </Suspense>
  )
}
