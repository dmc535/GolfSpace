import { useState, useEffect, useCallback } from 'react';
import { getPosts, createPost, likePost, addComment } from '../services/feedService';
import type { Post } from '../types';

export function useFeed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('latest');
  const [submitting, setSubmitting] = useState(false);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getPosts(filter);
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  }, [filter]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const addPost = async (content: string, imageUrl?: string, location?: string) => {
    if (submitting) return false;
    
    setSubmitting(true);
    try {
      const newPost = await createPost(content, imageUrl, location);
      setPosts(prev => [newPost, ...prev]);
      return true;
    } catch (error) {
      console.error('Error creating post:', error);
      return false;
    } finally {
      setSubmitting(false);
    }
  };

  const handleLike = async (postId: string) => {
    try {
      await likePost(postId);
      setPosts(prev => prev.map(post =>
        post.id === postId
          ? { ...post, likes: post.likes + 1 }
          : post
      ));
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleAddComment = async (postId: string, content: string) => {
    if (submitting) return;
    
    setSubmitting(true);
    try {
      const newComment = await addComment(postId, content);
      setPosts(prev => prev.map(post =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments + 1,
              commentList: [...post.commentList, newComment]
            }
          : post
      ));
    } catch (error) {
      console.error('Error adding comment:', error);
      throw error;
    } finally {
      setSubmitting(false);
    }
  };

  return {
    posts,
    loading,
    filter,
    setFilter,
    addPost,
    handleLike,
    handleAddComment,
    submitting
  };
}