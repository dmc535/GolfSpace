import React, { useState } from 'react';
import { ChatList } from './ChatList';
import { ChatWindow } from './ChatWindow';
import { useChats } from '../../hooks/useChats';
import type { Chat } from '../../types';

export function MessengerPage() {
  const { chats, loading } = useChats();
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-12 h-[calc(100vh-12rem)]">
          {/* Chat List */}
          <div className="col-span-4 border-r border-gray-200">
            <ChatList
              chats={chats}
              loading={loading}
              selectedChatId={selectedChat?.id}
              onChatSelect={setSelectedChat}
            />
          </div>

          {/* Chat Window */}
          <div className="col-span-8">
            {selectedChat ? (
              <ChatWindow chat={selectedChat} />
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500">
                Select a chat to start messaging
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}