import { Container, SkeletonText } from "@chakra-ui/react";

type Props = {}

const RecipeModalSkeleton = ({}: Props) => {
  return (
    <Container>
      <SkeletonText mt="4" mb="5" noOfLines={1} skeletonHeight={8} />
      <SkeletonText spacing="4" noOfLines={1} skeletonHeight={200} borderRadius={200} />
      <SkeletonText  mt="4" spacing={2} noOfLines={5} />
    </Container>
  )
}

export default RecipeModalSkeleton;