import { useEffect, useState } from "react";
import { getUsername, isProfilePage } from "../utils/github";
import { observeUrlChanges } from "../content/observer";

interface GithubProfileState {
  username: string | null;
  isProfile: boolean;
}

function getProfileState(): GithubProfileState {
  return {
    username: getUsername(),
    isProfile: isProfilePage(),
  };
}

export function useGithubProfile() {
  const [profile, setProfile] = useState<GithubProfileState>(
    getProfileState()
  );

  useEffect(() => {
    const observer = observeUrlChanges(() => {
      setProfile(getProfileState());
    });

    return () => observer.disconnect();
  }, []);

  return profile;
}