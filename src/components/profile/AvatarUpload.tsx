import React, { useState } from 'react';
import { Upload, Loader } from 'lucide-react';
import { uploadImage } from '../../services/imageUpload';

interface AvatarUploadProps {
  currentAvatar: string;
  onAvatarChange: (url: string) => void;
}

export function AvatarUpload({ currentAvatar, onAvatarChange }: AvatarUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return;
    }

    try {
      setIsUploading(true);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);

      // Upload image
      const uploadedUrl = await uploadImage(file);
      onAvatarChange(uploadedUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <img
          src={previewUrl || currentAvatar}
          alt="Profile Avatar"
          className="w-24 h-24 rounded-full object-cover ring-2 ring-gray-200"
        />
        <label
          htmlFor="avatar-upload"
          className={`absolute bottom-0 right-0 p-2 rounded-full cursor-pointer
            ${isUploading 
              ? 'bg-gray-400' 
              : 'bg-green-600 hover:bg-green-700'} 
            text-white transition-colors`}
        >
          {isUploading ? (
            <Loader className="w-4 h-4 animate-spin" />
          ) : (
            <Upload className="w-4 h-4" />
          )}
        </label>
        <input
          id="avatar-upload"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          disabled={isUploading}
          className="hidden"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">Profile Photo</h3>
        <p className="text-sm text-gray-500">
          {isUploading 
            ? 'Uploading...' 
            : 'Upload a new profile photo (max 5MB)'}
        </p>
      </div>
    </div>
  );
}