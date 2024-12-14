import React, { useState } from 'react';
import { X, Link, Share2, MessageCircle, Mail } from 'lucide-react';

interface ShareModalProps {
  postId: string;
  onClose: () => void;
}

export function ShareModal({ postId, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = `https://golfspace.com/posts/${postId}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };

  const shareButtons = [
    {
      name: 'Share',
      icon: Share2,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`,
      color: 'bg-sky-500',
    },
    {
      name: 'Message',
      icon: MessageCircle,
      url: `sms:?body=${encodeURIComponent(shareUrl)}`,
      color: 'bg-green-500',
    },
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:?body=${encodeURIComponent(shareUrl)}`,
      color: 'bg-blue-600',
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Share Post</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4 justify-center">
            {shareButtons.map((button) => (
              <a
                key={button.name}
                href={button.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${button.color} text-white p-3 rounded-full hover:opacity-90 transition flex items-center space-x-2`}
              >
                <button.icon className="w-5 h-5" />
                <span className="text-sm">{button.name}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={shareUrl}
              readOnly
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
            />
            <button
              onClick={handleCopyLink}
              className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
            >
              <Link className="w-4 h-4 mr-2" />
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}