import React, { useState, useRef, useEffect } from 'react';
import { Send, Image, Paperclip, MoreVertical } from 'lucide-react';
import type { Chat, Message } from '../../types';
import { MessageBubble } from './MessageBubble';
import { useMessages } from '../../hooks/useMessages';

interface ChatWindowProps {
  chat: Chat;
}

export function ChatWindow({ chat }: ChatWindowProps) {
  const { messages, loading, sendMessage } = useMessages(chat.id);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      sendMessage({
        content: newMessage,
        type: 'text'
      });
      setNewMessage('');
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Chat Header */}
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={chat.participants[0].avatarUrl}
            alt={chat.participants[0].name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-medium">{chat.participants[0].name}</h3>
            <p className="text-sm text-gray-500">
              {chat.participants[0].online ? 'Online' : 'Offline'}
            </p>
          </div>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <MoreVertical className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600" />
          </div>
        ) : (
          messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message}
              isOwn={message.senderId === 'currentUser'}
            />
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="p-4 border-t">
        <form onSubmit={handleSend} className="flex items-center space-x-2">
          <button
            type="button"
            className="p-2 text-gray-500 hover:text-green-600 rounded-full hover:bg-green-50"
          >
            <Image className="w-5 h-5" />
          </button>
          <button
            type="button"
            className="p-2 text-gray-500 hover:text-green-600 rounded-full hover:bg-green-50"
          >
            <Paperclip className="w-5 h-5" />
          </button>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
          <button
            type="submit"
            disabled={!newMessage.trim()}
            className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}