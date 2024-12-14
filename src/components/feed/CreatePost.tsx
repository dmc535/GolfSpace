import React, { useState } from 'react';
import { Image, MapPin, Camera, Send } from 'lucide-react';

interface CreatePostProps {
  onPostCreate: (content: string, imageUrl?: string, location?: string) => Promise<boolean>;
}

export function CreatePost({ onPostCreate }: CreatePostProps) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || loading) return;

    setLoading(true);
    try {
      const success = await onPostCreate(content);
      if (success) {
        setContent('');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share your golf experience..."
          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          rows={3}
        />
        <div className="mt-3 flex items-center justify-between">
          <div className="flex space-x-2">
            <button type="button" className="p-2 text-gray-500 hover:text-green-600 rounded-full hover:bg-green-50">
              <Image className="w-5 h-5" />
            </button>
            <button type="button" className="p-2 text-gray-500 hover:text-green-600 rounded-full hover:bg-green-50">
              <MapPin className="w-5 h-5" />
            </button>
            <button type="button" className="p-2 text-gray-500 hover:text-green-600 rounded-full hover:bg-green-50">
              <Camera className="w-5 h-5" />
            </button>
          </div>
          <button
            type="submit"
            disabled={!content.trim() || loading}
            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
            ) : (
              <Send className="w-4 h-4 mr-2" />
            )}
            Post
          </button>
        </div>
      </form>
    </div>
  );
}