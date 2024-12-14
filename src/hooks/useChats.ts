import { useState, useEffect } from 'react';
import type { Chat } from '../types';

const MOCK_CHATS: Chat[] = [
  {
    id: '1',
    participants: [
      {
        id: '2',
        name: 'Sarah Johnson',
        avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100',
        online: true
      }
    ],
    lastMessage: {
      id: '123',
      senderId: '2',
      receiverId: '1',
      content: 'Great round yesterday! 🏌️‍♂️',
      timestamp: '2 min ago',
      read: false,
      type: 'text'
    },
    unreadCount: 2
  },
  {
    id: '2',
    participants: [
      {
        id: '3',
        name: 'Mike Wilson',
        avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=100&h=100',
        online: false,
        lastSeen: '1 hour ago'
      }
    ],
    lastMessage: {
      id: '456',
      senderId: '1',
      receiverId: '3',
      content: 'See you at the club tomorrow!',
      timestamp: '1 hour ago',
      read: true,
      type: 'text'
    },
    unreadCount: 0
  }
];

export function useChats() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChats = async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setChats(MOCK_CHATS);
      setLoading(false);
    };

    fetchChats();
  }, []);

  return { chats, loading };
}