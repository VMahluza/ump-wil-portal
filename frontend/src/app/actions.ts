'use server';
import api from '@/lib/services/api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/lib/services/constants';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export async function SignInUser(prevState: any, formData: FormData) {
    const username = formData.get('username');
    const password = formData.get('password');
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
            path: '/',        // Available site-wide
            httpOnly: true,   // Prevents access from JavaScript
            secure: process.env.NODE_ENV === 'production', // Only over HTTPS in production
            sameSite: 'lax',  // CSRF protection
        });

        // Set refresh token cookie
        cookieStore.set({
            name: REFRESH_TOKEN,
            value: res.data.refresh,
            maxAge: 60 * 60 * 24 * 30, // 30 days
            path: '/',
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
        });

        // Redirect to the home page after successful sign-in
        redirect('/');
    } else {
        console.error('Unexpected response status:', res.status);
        return { message: 'Unexpected error. Please try again.' };
    }
}


export async function AddJobPost(prevState:any, formData:FormData){

    const name = formData.get('name');
    const descripton = formData.get('descripton');
    const closing_date = formData.get('closing_date');

    console.log("FormData on Actions:");
    console.log(name, descripton, closing_date)
    const cookieStore = cookies();  
    const accessToken = cookieStore.get(ACCESS_TOKEN)?.value;

    const res = await api.post(
        "/api/app/jobposts/", 
        { 
            name, 
            descripton, 
            closing_date 
        }, 
        {
            headers: {
                'Authorization': `Bearer ${accessToken}`,  // Add access token to headers
                'Content-Type': 'application/json',  // Ensure JSON content type
            },
        });

    if(res.status !== 201) {
        return { message: 'Unexpected error. Please try again.' };
    }

}

export async function GetJobPosts(){
    const cookieStore = cookies();  
    const accessToken = cookieStore.get(ACCESS_TOKEN)?.value;
    try{
        // Send a GET request to fetch all job posts
        const res = await api.get('/api/app/jobposts/', {
            headers: {
                Authorization: `Bearer ${accessToken}`, // Attach token to the request
            },
        });
        if(res.status === 200) {
            return res.data; // Return the fetched job posts
        }
    } catch(err) {
        console.error('Error fetching job posts:', err);
        return { error: 'Failed to fetch job posts. Please try again.' };
    }
}
export async function GetJobPost(jobPostId: number){
    const cookieStore = cookies();  
    const accessToken = cookieStore.get(ACCESS_TOKEN)?.value;
    try{
        // Send a GET request to fetch all job posts
        const res = await api.get(`/api/app/jobposts/${jobPostId}/`, {
            headers: {
                Authorization: `Bearer ${accessToken}`, // Attach token to the request
            },
        });
        if(res.status === 200) {
            return res.data; // Return the fetched job posts
        }
    } catch(err) {
        console.error('Error fetching job posts:', err);
        return { error: 'Failed to fetch job posts. Please try again.' };
    }
}
export async function UpdateJobPost(prevState:any, formData:FormData){
    
    const cookieStore = cookies();  
    const accessToken = cookieStore.get(ACCESS_TOKEN)?.value;
    const id = formData.get('id');
    const name = formData.get('name');
    const descripton = formData.get('descripton');
    const closing_date = formData.get('closing_date');

    console.log("FormData on Actions In ID:" ,id );
    try{
        const res = await api.put(
            `/api/app/jobposts/${id}/`, 
            {
                name,
                descripton,
                closing_date
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`, // Attach token to the request
                },
            });
        if(res.status === 200) {
            return res.data; // Return the fetched job posts
        }
    } catch(err) {
        console.error('Error fetching job posts:', err);
        return { message: 'Failed to fetch job posts. Please try again.' };
    }
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
        const res = await api.get('/api/user/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`, // Attach token to the request
            },
        });

        if (res.status === 200) {

            console.log(res.data)
            return res.data; // The logged-in user's data

        } else {
            return { error: 'Failed to fetch user data' };
        }
    } catch (error) {
        console.error('Error fetching logged-in user:', error);
        return { error: 'Error fetching user data. Please try again.' };
    }
}

export async function signOutUser() {
    const cookieStore = cookies();  
    // Get the access token from cookies
    const accessToken = cookieStore.get(ACCESS_TOKEN)?.value;
    console.log(accessToken);
    if (!accessToken) {
        console.log("User has already been signed out")
        return
    }
    // api-auth/ logout/
    const res = await api.get("/api/user/logout", {headers:{
        Authorization: `Bearer ${accessToken}`, // Attach token to the request
    }});
    if (res.status === 205) {
        // Remove access token cookie
        cookieStore.delete(ACCESS_TOKEN)
        cookieStore.delete(REFRESH_TOKEN);
        redirect('/auth/signin');
    }
}
