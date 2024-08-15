import { BillingPreferenceType, UserLoginDetails } from "../lib/types/authAPI";
import { UserCredential } from "firebase/auth";
import { produce } from "immer";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface FunctionProps {
  resetStore: () => void;
  updateUser: (d: UserCredential | null) => void;
  updateLoginDetail: (d: UserLoginDetails) => void;
  updateBillingPreference: (d: BillingPreferenceType | null) => void;
}
interface StateProps {
  userDetails: UserCredential | null;
  userLoginDetails: UserLoginDetails | null;
  billingPreference: BillingPreferenceType | null;
}
const initialState: StateProps = {
  userDetails: null,
  userLoginDetails: null,
  billingPreference: null,
};

type CheckInFormStore = FunctionProps & StateProps;

export const useUserStore = create(
  persist<CheckInFormStore>(
    (set, get) => ({
      ...initialState,
      resetStore: () => set(initialState),
      updateUser: (data) => {
        console.log("USER", data);
        set(
          produce((state) => {
            state.userDetails = data;
          })
        );
      },
      updateLoginDetail: (data) => {
        console.log("USER LOGIN", data);
        set(
          produce((state) => {
            state.userLoginDetails = data;
          })
        );
      },
      updateBillingPreference: (data) => {
        set(
          produce((state) => {
            state.billingPreference = data;
          })
        );
      },
    }),
    {
      name: "user-store",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: (state) => {
        console.log("hydration starts", state);
        return (state, error) => {
          console.log("hydration Options", state);
          if (error) {
            console.log("an error happened during hydration", error);
          } else {
            console.log("hydration finished");
          }
        };
      },
    }
  )
);
