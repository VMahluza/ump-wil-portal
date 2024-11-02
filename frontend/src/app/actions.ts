"use server";
import api from "@/lib/services/api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/lib/services/constants";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

// AUTHENTICATION
export async function SignUpUser(prevState: any, formData: FormData) {
  const secreteKey = formData.get("secreteKey");
  const username = formData.get("username");
  const password = formData.get("password");

  // Send the request to the API
  const accessTokenRes = await api.post("/api-auth/token/", {
    username,
    password: secreteKey,
  });

  if (accessTokenRes.status === 200) {
    const accessToken = accessTokenRes.data.access;
    const newIntenRes = await api.post(
      "/api/app/new/intern",
      {
        secreteKey,
        password,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Add access token to headers
          "Content-Type": "application/json", // Ensure JSON content type
        },
      },
    );

    if (newIntenRes.status === 200) {
      redirect("/auth/signin");
    } else {
      console.error("Unexpected response status:", newIntenRes.status);
      return { message: "Unexpected error. Please try again." };
    }
  } else {
    console.error("Unexpected response status:", accessTokenRes.status);
    return { message: "Unexpected error. Please try again." };
  }
}

export async function SignInUser(prevState: any, formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");
  // Send the request to the API
  const res = await api.post("/api-auth/token/", { username, password });
  if (res.status === 200) {
    // Get cookies instance
    const cookieStore = cookies();
    // Set access token cookie
    cookieStore.set({
      name: ACCESS_TOKEN,
      value: res.data.access,
      maxAge: 60 * 15, // 15 minutes
      path: "/", // Available site-wide
      httpOnly: true, // Prevents access from JavaScript
      secure: process.env.NODE_ENV === "production", // Only over HTTPS in production
      sameSite: "lax", // CSRF protection
    });

    // Set refresh token cookie
    cookieStore.set({
      name: REFRESH_TOKEN,
      value: res.data.refresh,
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    // Redirect to the home page after successful sign-in
    redirect("/");
  } else {
    console.error("Unexpected response status:", res.status);
    return { message: "Unexpected error. Please try again." };
  }
}

export async function isAuthenticated() {
  const cookieStore = cookies();
  // Get the access token from cookies
  const accessToken = cookieStore.get(ACCESS_TOKEN)?.value;
  return !!accessToken; // Returns true if access token exists, false otherwise
}

export async function getLoggedInUser() {
  const cookieStore = cookies();
  // Get the access token from cookies
  const accessToken = cookieStore.get(ACCESS_TOKEN)?.value;
  if (!accessToken) {
    // redirect('/auth/signin');
  }
  try {
    // Send a GET request to fetch the current user
    const res = await api.get("/api/user/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`, // Attach token to the request
      },
    });

    if (res.status === 200) {
      console.log(res.data);
      return res.data; // The logged-in user's data
    } else {
      return { error: "Failed to fetch user data" };
    }
  } catch (error) {
    console.error("Error fetching logged-in user:", error);
    return { error: "Error fetching user data. Please try again." };
  }
}

export async function signOutUser() {
  const cookieStore = cookies();
  // Get the access token from cookies
  const accessToken = cookieStore.get(ACCESS_TOKEN)?.value;
  console.log(accessToken);
  if (!accessToken) {
    console.log("User has already been signed out");
    return;
  }
  // api-auth/ logout/
  const res = await api.get("/api/user/logout", {
    headers: {
      Authorization: `Bearer ${accessToken}`, // Attach token to the request
    },
  });
  if (res.status === 205) {
    // Remove access token cookie
    cookieStore.delete(ACCESS_TOKEN);
    cookieStore.delete(REFRESH_TOKEN);
    redirect("/auth/signin");
  }
}
// ./AUTHENTICATION

// JOB POSTS
export async function AddJobPost(prevState: any, formData: FormData) {
  const name = formData.get("name");
  const descripton = formData.get("descripton");
  const closing_date = formData.get("closing_date");

  console.log("FormData on Actions:");
  console.log(name, descripton, closing_date);
  const cookieStore = cookies();
  const accessToken = cookieStore.get(ACCESS_TOKEN)?.value;

  const res = await api.post(
    "/api/app/jobposts/",
    {
      name,
      descripton,
      closing_date,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`, // Add access token to headers
        "Content-Type": "application/json", // Ensure JSON content type
      },
    },
  );

  if (res.status !== 201) {
    return { message: "Unexpected error. Please try again." };
  }
}

export async function GetJobPosts() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get(ACCESS_TOKEN)?.value;
  try {
    // Send a GET request to fetch all job posts
    const res = await api.get("/api/app/jobposts/", {
      headers: {
        Authorization: `Bearer ${accessToken}`, // Attach token to the request
      },
    });
    if (res.status === 200) {
      return res.data; // Return the fetched job posts
    }
  } catch (err) {
    console.error("Error fetching job posts:", err);
    return { error: "Failed to fetch job posts. Please try again." };
  }
}
export async function GetJobPost(jobPostId: number) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get(ACCESS_TOKEN)?.value;
  try {
    // Send a GET request to fetch all job posts
    const res = await api.get(`/api/app/jobposts/${jobPostId}/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`, // Attach token to the request
      },
    });
    if (res.status === 200) {
      return res.data; // Return the fetched job posts
    }
  } catch (err) {
    console.error("Error fetching job posts:", err);
    return { error: "Failed to fetch job posts. Please try again." };
  }
}

export async function UpdateJobPost(prevState: any, formData: FormData) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get(ACCESS_TOKEN)?.value;
  const id = formData.get("id");
  const name = formData.get("name");
  const descripton = formData.get("descripton");
  const closing_date = formData.get("closing_date");

  console.log("FormData on Actions In ID:", descripton);
  try {
    const res = await api.put(
      `/api/app/jobposts/${id}/`,
      {
        name: name,
        descripton: descripton,
        closing_date: closing_date,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Attach token to the request
          "Content-Type": "application/json", // Ensure JSON content type
        },
      },
    );

    if (res.status === 400) {
    }
  } catch (err) {
    console.error("Error fetching job posts:", err);
    return { message: "Failed to fetch job posts. Please try again." };
  }
}
// ./JOB POSTS

// APPLICATIONS
export async function GetApplications() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get(ACCESS_TOKEN)?.value;
  try {
    // Send a GET request to fetch all job posts
    const res = await api.get("/api/app/applications/", {
      headers: {
        Authorization: `Bearer ${accessToken}`, // Attach token to the request
      },
    });
    if (res.status === 200) {
      return res.data; // Return the fetched job posts
    }
  } catch (err) {
    console.error("Error fetching job posts:", err);
    return { error: "Failed to fetch job posts. Please try again." };
  }
}

export async function GetApplication(applicationId: number) {
  setTimeout(() => {
    console.log("Loading..."), 5000;
  });
  const cookieStore = cookies();
  const accessToken = cookieStore.get(ACCESS_TOKEN)?.value;
  try {
    // Send a GET request to fetch all job posts

    // /api/app/applications/1/
    const res = await api.get(`/api/app/applications/${applicationId}/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`, // Attach token to the request
      },
    });
    if (res.status === 200) {
      return res.data; // Return the fetched job posts
    }
  } catch (err) {
    console.error("Error fetching job posts:", err);
    return { error: "Failed to fetch job posts. Please try again." };
  }
}
export async function UpdateApplicationStatus(
  applicationId: any,
  status: string,
) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get(ACCESS_TOKEN)?.value;

  if (!accessToken) {
    return { error: "Access token not found. Please log in again." };
  }

  try {
    // Send PATCH request to update the application status
    const res = await api.patch(
      `/api/app/applications/${applicationId}/status/`,
      { status }, // Pass the status in the request body
      {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Attach token to the request
          "Content-Type": "application/json",
        },
      },
    );

    if (res.status === 200) {
      return res.data; // Return the updated application data
    }
  } catch (err) {
    console.error("Error updating application status:", err);
    return { error: "Failed to update application status. Please try again." };
  }
}

// ./APPLICATIONS
