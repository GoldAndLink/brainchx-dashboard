import { generateUploadButton, generateUploadDropzone, generateUploader } from "@uploadthing/react";
import { generateReactHelpers } from "@uploadthing/react";
// import type { OurFileRouter } from "../../../../apps/dashboard/src/app/api/uploadthing/core";
import type { OurFileRouter } from "../../../../apps/isomorphic-intl/src/app/api/uploadthing/core";

export const Uploader = generateUploader<OurFileRouter>();
export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();
