import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

type ProfileProps = {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Priscila Souza</Text>
          <Text color="gray.300" fontSize="small">
            priscila_soares.souza@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Priscila Souza"
        src="https://avatars.githubusercontent.com/u/65875697?v=4"
      />
    </Flex>
  );
}
