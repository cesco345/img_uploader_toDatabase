import * as SecureStore from "expo-secure-store";
import "react-native-url-polyfill/auto";

import { createClient } from "@supabase/supabase-js";

// Use a custom secure storage solution for the Supabase client to store the JWT
const ExpoSecureStoreAdapter = {
  getItem: (key: string) => {
    return SecureStore.getItemAsync(key);
  },
  setItem: (key: string, value: string) => {
    SecureStore.setItemAsync(key, value);
  },
  removeItem: (key: string) => {
    SecureStore.deleteItemAsync(key);
  },
};

const url = "https://yzbypryhaaoaavddvewp.supabase.co";
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6YnlwcnloYWFvYWF2ZGR2ZXdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1MjEyNzEsImV4cCI6MjAzMzA5NzI3MX0.hZMFJwOFr62SsizjWXSBH2GTfYhXWQCNcwdg2jxp2_w";

// Initialize the Supabase client
export const supabase = createClient(url!, key!, {
  auth: {
    storage: ExpoSecureStoreAdapter as any,
    detectSessionInUrl: false,
  },
});
