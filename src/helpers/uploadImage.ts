import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
  });

export default async function uploadToCloudinary(image: any, imageName: string) {
    try {
        const result = await cloudinary.uploader.upload(image, {public_id: imageName});
        return result.url;
    } catch (err: any) {
        throw new Error(`Error uploading to Cloudinary: ${err.message}`);
    }
}