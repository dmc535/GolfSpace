import React from 'react';
import type { Message } from '../../types';

interface MessageBubbleProps {
  message: Message;
  isOwn: boolean;
}

export function MessageBubble({ message, isOwn }: MessageBubbleProps) {
  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[70%] rounded-lg p-3 ${
          isOwn
            ? 'bg-green-600 text-white rounded-br-none'
            : 'bg-gray-100 text-gray-900 rounded-bl-none'
        }`}
      >
        {message.type === 'text' ? (
          <p>{message.content}</p>
        ) : (
          <img
            src={message.imageUrl}
            alt="Message attachment"
            className="rounded-lg max-w-full"
          />
        )}
        <div
          className={`text-xs mt-1 ${
            isOwn ? 'text-green-100' : 'text-gray-500'
          }`}
        >
          {message.timestamp}
        </div>
      </div>
    </div>
  );
}