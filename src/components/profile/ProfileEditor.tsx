import React, { useState, useEffect } from 'react';
import { Save, X, AlertCircle } from 'lucide-react';
import type { GolferProfile } from '../../types';
import { AvatarUpload } from './AvatarUpload';

interface ProfileEditorProps {
  profile: GolferProfile;
  onSave: (updatedProfile: Partial<GolferProfile>) => void;
  onCancel: () => void;
}

interface FormErrors {
  name?: string;
  handicap?: string;
  homeClub?: string;
}

export function ProfileEditor({ profile, onSave, onCancel }: ProfileEditorProps) {
  const [formData, setFormData] = useState({
    name: profile.name,
    handicap: profile.handicap,
    homeClub: profile.homeClub,
    bio: profile.bio,
    status: profile.status,
    musicUrl: profile.musicUrl || '',
    avatarUrl: profile.avatarUrl
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    setFormData({
      name: profile.name,
      handicap: profile.handicap,
      homeClub: profile.homeClub,
      bio: profile.bio,
      status: profile.status,
      musicUrl: profile.musicUrl || '',
      avatarUrl: profile.avatarUrl
    });
    setErrors({});
    setIsDirty(false);
  }, [profile]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (formData.handicap < -10 || formData.handicap > 54) {
      newErrors.handicap = 'Handicap must be between -10 and 54';
    }

    if (!formData.homeClub.trim()) {
      newErrors.homeClub = 'Home club is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof typeof formData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setIsDirty(true);
    
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSave(formData);
    }
  };

  const handleCancel = () => {
    if (!isDirty || window.confirm('Are you sure you want to discard your changes?')) {
      onCancel();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Edit Profile</h2>
        <button
          onClick={handleCancel}
          className="text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <AvatarUpload
          currentAvatar={formData.avatarUrl}
          onAvatarChange={(url) => handleChange('avatarUrl', url)}
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Handicap *
          </label>
          <input
            type="number"
            value={formData.handicap}
            onChange={(e) => handleChange('handicap', Number(e.target.value))}
            className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
              errors.handicap ? 'border-red-500' : 'border-gray-300'
            }`}
            step="0.1"
            min="-10"
            max="54"
          />
          {errors.handicap && (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.handicap}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Home Club *
          </label>
          <input
            type="text"
            value={formData.homeClub}
            onChange={(e) => handleChange('homeClub', e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
              errors.homeClub ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.homeClub && (
            <p className="mt-1 text-sm text-red-500 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.homeClub}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bio
          </label>
          <textarea
            value={formData.bio}
            onChange={(e) => handleChange('bio', e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
            maxLength={500}
          />
          <p className="mt-1 text-sm text-gray-500">
            {formData.bio.length}/500 characters
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <input
            type="text"
            value={formData.status}
            onChange={(e) => handleChange('status', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
            maxLength={100}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Music URL (Optional)
          </label>
          <input
            type="url"
            value={formData.musicUrl}
            onChange={(e) => handleChange('musicUrl', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="https://..."
          />
        </div>

        <div className="flex justify-end space-x-4 pt-4 border-t">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!isDirty}
          >
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}