"use client";

import { getEnvVariables } from "./env";

interface UploadResponse {
  url: string;
  status: number;
}

interface ErrorResponse {
  message: string;
  status: number;
}

type CloudinaryAsset = {
  url: string;
};

export async function uploadImage(
  image: File | Blob
): Promise<UploadResponse | ErrorResponse> {
  try {
    const { CLOUDINARY_NAME, CLOUDINARY_PRESET_NAME, CLOUDINARY_KEY } =
      await getEnvVariables(
        "CLOUDINARY_NAME",
        "CLOUDINARY_PRESET_NAME",
        "CLOUDINARY_KEY"
      );
    if (!CLOUDINARY_NAME || !CLOUDINARY_PRESET_NAME || !CLOUDINARY_KEY) {
      return {
        message: "Cloudinary environment variables are not set",
        status: 500,
      };
    }
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", CLOUDINARY_PRESET_NAME);
    formData.append("api_key", CLOUDINARY_KEY);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      const errorData = (await response.json()) as { message: string };
      throw new Error(errorData.message || "Failed to upload image");
    }
    const data: CloudinaryAsset = await response.json();
    return { url: data.url, status: 200 };
  } catch (error) {
    const err = error as Error;
    return {
      message: err.message || "An unknown error occurred",
      status: 500,
    };
  }
}
