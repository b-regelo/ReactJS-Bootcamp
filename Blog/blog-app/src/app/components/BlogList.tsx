
import { Blog } from './Blog';

interface Props {
  blogs: Blog[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function BlogList({ blogs, onEdit, onDelete }: Props) {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div key={blog.id} className="blog-item">
          <h2 className="blog-title">{blog.title}</h2>
          <p className="blog-content">{blog.content}</p>
          <div className="actions">
            <button className="edit-button" onClick={() => onEdit(blog.id)}>
              Edit
            </button>
            <button className="delete-button" onClick={() => onDelete(blog.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}