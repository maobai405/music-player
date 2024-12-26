import { Stack } from 'expo-router';

const PlaylistsScreenLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: 'playlists' }} />
    </Stack>
  );
};

export default PlaylistsScreenLayout;
