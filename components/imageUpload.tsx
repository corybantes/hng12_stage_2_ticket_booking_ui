import React from "react";
import Image from "next/image";

const ImageUpload = ({
  profile,

  handleFileChange,
}: {
  profile: string | null;
  handleFileChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div>
      <div className="bg-image-upload border border-image-upload_bd p-6 text-base text-white rounded-3xl">
        <div className="text-base mb-8">Upload Profile Photo</div>
        <div className="relative flex">
          <div className="w-full bg-image-bg flex justify-center h-[200px] absolute top-5 z-0" />
          <div className="relative z-10 w-[240px] h-[240px] bg-image-empty rounded-[32px] p-6 flex flex-col justify-center mx-auto border-4 border-image-empty_bd/50">
            <label htmlFor="file-upload">
              {profile ? (
                <Image
                  src={profile}
                  fill
                  alt="Profile Picture"
                  className="object-cover"
                />
              ) : (
                <>
                  <Image
                    src="/images/cloud_download.svg"
                    width={32}
                    height={32}
                    alt="cloud-download"
                    className="mx-auto mb-4"
                  />
                  <p className="text-center">Drag & drop or click to upload</p>
                </>
              )}
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        </div>
      </div>
      <div className="hidden bg-image-upload border border-image-upload_bd p-6 text-base text-white">
        <div className="text-base mb-8">Upload Profile Photo</div>
        <div className="relative flex">
          <div className="w-full bg-image-bg flex justify-center h-[200px] absolute top-5 z-0" />
          <div className="relative z-10 w-[240px] h-[240px] bg-image-empty rounded-[32px] p-6 flex flex-col justify-center mx-auto border-4 border-image-empty_bd/50">
            <Image
              src={"/images/profile.svg"}
              alt="profile picture"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="hidden bg-image-upload border border-image-upload_bd p-6 text-base text-white">
        <div className="text-base mb-8">Upload Profile Photo</div>
        <div className="relative flex">
          <div className="w-full bg-image-bg flex justify-center h-[200px] absolute top-5 z-0" />
          <div className="relative z-10 w-[240px] h-[240px] bg-image-empty rounded-[32px] p-6 flex flex-col justify-center mx-auto border-4 border-image-empty_bd/50">
            <Image
              src={"/images/profile.svg"}
              alt="profile picture"
              fill
              className="object-cover"
            />
            <div className="bg-transparent absolute">
              <Image
                src={"/images/cloud_download.svg"}
                width={32}
                height={32}
                alt="cloud-download"
                className="mx-auto mb-4"
              />
              <p className="text-center">Drag & drop or click to upload</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
