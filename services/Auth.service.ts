"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import Endpoints from "./Endpoints";
import createHttp from "@/utils/Http";

export const Login = async (prevState: any, formData: FormData) => {
  const username = formData.get("Username");
  const password = formData.get("Password");
  try {
    const Http = await createHttp();
    const response = await Http.post(Endpoints.login, {
      username,
      password,
    });
    cookies().set("jwt", response.data.jwt);
  } catch (error) {
    return {
      error: "Something went wrong.",
    };
  }
  redirect("/");
};

export async function Logout() {
  try {
    cookies().delete("jwt");
  } catch (error) {
    return {
      error: "Something went wrong.",
    };
  }
  redirect("/login");
}
