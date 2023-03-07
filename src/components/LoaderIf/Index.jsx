import { Center, Spinner } from "@chakra-ui/react";

export const LoaderIf = ({ condition, children }) => {
  return (
    <>
      {condition ? (
        <Center>
          <Spinner size="md" />
        </Center>
      ) : (
        children
      )}
    </>
  );
};
