"use client";
import { useState, useEffect } from 'react';
import { Blog } from './components/Blog';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import './styles.css';

export default function BlogApp() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [nextId, setNextId] = useState<number>(1);

  useEffect(() => {
    const stored = localStorage.getItem('blogs');
    if (stored) {
      const parsed = JSON.parse(stored);
      setBlogs(parsed);
      const maxId = parsed.reduce((max: number, blog: Blog) => Math.max(max, blog.id), 0);
      setNextId(maxId + 1);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  const handleCreateOrUpdate = (blog: Omit<Blog, 'id'>, id?: number) => {
    if (id !== undefined) {
      setBlogs(blogs.map(b => b.id === id ? { ...b, ...blog } : b));
    } else {
      const newBlog: Blog = { id: nextId, ...blog };
      setBlogs([newBlog, ...blogs]);
      setNextId(nextId + 1);
    }
    setEditingBlog(null);
  };

  const handleEdit = (id: number) => {
    const blog = blogs.find(b => b.id === id);
    if (blog) setEditingBlog(blog);
  };

  const handleDelete = (id: number) => {
    setBlogs(blogs.filter(b => b.id !== id));
  };

  return (
    <main className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Blog App</h1>
      <BlogForm onSubmit={handleCreateOrUpdate} editingBlog={editingBlog} />
      <BlogList blogs={blogs} onEdit={handleEdit} onDelete={handleDelete} />
    </main>
  );
}
