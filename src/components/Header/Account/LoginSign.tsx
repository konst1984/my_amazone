import React from "react";
import Button, { ButtonTheme } from "@/components/Buttons/Button";
import { useAppDispatch, useAppSelector } from "@/app/redux/hook";
import { signIn, signOut } from "next-auth/react";
import { removeUser } from "@/app/redux/features/appSlice";

const LoginSign = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.app.userInfo);

  const handleSignOut = () => {
    signOut();
    dispatch(removeUser());
  };

  return (
    <div className="flex justify-center py-4 border-b border-gray-300">
      {userInfo ? (
        <Button
          theme={ButtonTheme.YELLOW}
          classname="text-xs normal-case min-w-[150px]"
          onClick={handleSignOut}
        >
          Sign out
        </Button>
      ) : (
        <Button
          theme={ButtonTheme.YELLOW}
          classname="text-xs normal-case min-w-[150px]"
          onClick={() => signIn()}
        >
          Sign in
        </Button>
      )}
    </div>
  );
};

export default LoginSign;
