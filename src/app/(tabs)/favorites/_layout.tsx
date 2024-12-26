import { Stack } from 'expo-router';

const FavoritesScreenLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: 'favorites' }} />
    </Stack>
  );
};

export default FavoritesScreenLayout;
