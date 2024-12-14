import { useState, useEffect } from 'react';
import type { Message } from '../types';

const MOCK_MESSAGES: Record<string, Message[]> = {
  '1': [
    {
      id: '1',
      senderId: '2',
      receiverId: '1',
      content: 'Hey! How was your round today?',
      timestamp: '2:30 PM',
      read: true,
      type: 'text'
    },
    {
      id: '2',
      senderId: '1',
      receiverId: '2',
      content: 'It was great! Shot my personal best.',
      timestamp: '2:32 PM',
      read: true,
      type: 'text'
    },
    {
      id: '3',
      senderId: '2',
      receiverId: '1',
      content: 'That\'s awesome! What was your score?',
      timestamp: '2:33 PM',
      read: true,
      type: 'text'
    }
  ]
};

interface SendMessageParams {
  content: string;
  type: 'text' | 'image';
  imageUrl?: string;
}

export function useMessages(chatId: string) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessages(MOCK_MESSAGES[chatId] || []);
      setLoading(false);
    };

    fetchMessages();
  }, [chatId]);

  const sendMessage = ({ content, type, imageUrl }: SendMessageParams) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: 'currentUser',
      receiverId: 'otherUser',
      content,
      timestamp: new Date().toLocaleTimeString(),
      read: false,
      type,
      imageUrl
    };

    setMessages(prev => [...prev, newMessage]);
  };

  return { messages, loading, sendMessage };
}