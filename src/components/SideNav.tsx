import { Heading, Link, SkeletonText, VStack } from "@chakra-ui/react";
import { Category } from "../type";

type Props = {
  categories: Category[];
  loading: boolean;
  selectedCategory: Category;
  // recieve parameter (type category)
  setSelectedCategory: (category: Category) => void;
};

const selectedProps = {
  bgColor: "blue.600",
  color: "white",
  fontWeight: "bold",
};

const SideNav = ({
  loading,
  categories,
  selectedCategory,
  setSelectedCategory,
}: Props) => {
  return loading ? (
    <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
  ) : (
    <>
      <Heading color="blue.700" fontSize={12} fontWeight="bold" mb={4}>
        CATEGORIES
      </Heading>
      <VStack align="stretch">
        {categories.map((c) => (
          <Link
            onClick={() => setSelectedCategory(c)}
            key={c.strCategory}
            px={2}
            py={1}
            borderRadius={5}
            {...(selectedCategory.strCategory == c.strCategory &&
              selectedProps)}
          >
            {c.strCategory}
          </Link>
        ))}
      </VStack>
    </>
  );
};

export default SideNav;
