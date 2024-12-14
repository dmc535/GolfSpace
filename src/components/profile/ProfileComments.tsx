import React from 'react';
import { MessageCircle } from 'lucide-react';

const MOCK_COMMENTS = [
  {
    id: '1',
    authorId: '2',
    authorName: 'Sarah Smith',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=50&h=50',
    content: 'Great round yesterday! That approach shot on 18 was amazing! 🏌️‍♂️',
    timestamp: '2 hours ago'
  },
  {
    id: '2',
    authorId: '3',
    authorName: 'Mike Johnson',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=50&h=50',
    content: 'Thanks for the golf tips! My swing is improving. See you at the club this weekend!',
    timestamp: '1 day ago'
  }
];

export function ProfileComments() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <MessageCircle className="w-5 h-5 mr-2" />
        Comments
      </h3>

      <div className="space-y-4 mb-4">
        {MOCK_COMMENTS.map((comment) => (
          <div key={comment.id} className="flex space-x-3 p-3 bg-gray-50 rounded-lg">
            <img
              src={comment.authorAvatar}
              alt={comment.authorName}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="flex items-baseline space-x-2">
                <h4 className="font-medium">{comment.authorName}</h4>
                <span className="text-xs text-gray-500">{comment.timestamp}</span>
              </div>
              <p className="text-gray-700 mt-1">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pt-4">
        <textarea
          placeholder="Leave a comment..."
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          rows={3}
        />
        <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
          Post Comment
        </button>
      </div>
    </div>
  );
}