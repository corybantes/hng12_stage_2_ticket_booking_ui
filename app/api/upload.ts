// import { v2 as cloudinary } from "cloudinary";
// import { IncomingForm } from "formidable";

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   const form = new IncomingForm();

//   form.parse(req, async (err, fields, files) => {
//     if (err) {
//       return res.status(500).json({ error: "Error parsing form data" });
//     }

//     const file = files.file[0];
//     if (!file) {
//       return res.status(400).json({ error: "No file provided" });
//     }

//     try {
//       const result = await cloudinary.uploader.upload(file.filepath, {
//         resource_type: "image",
//       });
//       res.status(200).json({ url: result.secure_url });
//     } catch (error) {
//       res
//         .status(500)
//         .json({ error: "Image upload failed", details: error.message });
//     }
//   });
// }
