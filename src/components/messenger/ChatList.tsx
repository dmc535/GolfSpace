import React from 'react';
import { Search, MessageSquare } from 'lucide-react';
import type { Chat } from '../../types';

interface ChatListProps {
  chats: Chat[];
  loading: boolean;
  selectedChatId?: string;
  onChatSelect: (chat: Chat) => void;
}

export function ChatList({ chats, loading, selectedChatId, onChatSelect }: ChatListProps) {
  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>
      </div>

      {loading ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600" />
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto">
          {chats.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500">
              <MessageSquare className="w-12 h-12 mb-2" />
              <p>No messages yet</p>
            </div>
          ) : (
            <div className="divide-y">
              {chats.map((chat) => (
                <button
                  key={chat.id}
                  onClick={() => onChatSelect(chat)}
                  className={`w-full p-4 hover:bg-gray-50 transition ${
                    chat.id === selectedChatId ? 'bg-green-50' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={chat.participants[0].avatarUrl}
                        alt={chat.participants[0].name}
                        className="w-12 h-12 rounded-full"
                      />
                      {chat.participants[0].online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline">
                        <p className="font-medium truncate">
                          {chat.participants[0].name}
                        </p>
                        {chat.lastMessage && (
                          <span className="text-xs text-gray-500">
                            {chat.lastMessage.timestamp}
                          </span>
                        )}
                      </div>
                      {chat.lastMessage && (
                        <p className="text-sm text-gray-500 truncate">
                          {chat.lastMessage.content}
                        </p>
                      )}
                    </div>
                    {chat.unreadCount > 0 && (
                      <div className="ml-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {chat.unreadCount}
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}