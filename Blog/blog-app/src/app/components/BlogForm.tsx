
"use client";
import { useEffect, useState } from 'react';
import { Blog } from './Blog';

interface Props {
  onSubmit: (blog: Omit<Blog, 'id'>, id?: number) => void;
  editingBlog: Blog | null;
}

export default function BlogForm({ onSubmit, editingBlog }: Props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editingBlog) {
      setTitle(editingBlog.title);
      setContent(editingBlog.content);
    }
  }, [editingBlog]);

  const handleSubmit = () => {
    onSubmit({ title, content }, editingBlog?.id);
    setTitle('');
    setContent('');
  };

  return (
    <div className="blog-form">
      <input
        type="text"
        placeholder="Title"
        className="input-field"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        className="textarea-field"
        rows={6}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="submit-button" onClick={handleSubmit}>
        {editingBlog ? 'Update Blog' : 'Create Blog'}
      </button>
    </div>
  );
}