import { Stack } from 'expo-router';

const ArtistsScreenLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: 'Artists' }} />
    </Stack>
  );
};

export default ArtistsScreenLayout;
