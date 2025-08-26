import React from 'react';
import type { BlogPost } from '../data/blogData';

interface PostCardProps {
  post: BlogPost;
  isLarge?: boolean;
  onClick: (post: BlogPost) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, isLarge = false, onClick }) => {
  return (
    <article 
      onClick={() => onClick(post)}
      className={`group cursor-pointer block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1 ${isLarge ? 'md:col-span-2' : ''}`}
    >
      <div className={`${isLarge ? 'md:flex' : ''}`}>
        <div className={`${isLarge ? 'md:w-1/2' : ''} overflow-hidden relative`}>
          <img
            src={post.image}
            alt={post.title}
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
              isLarge ? 'h-72 md:h-full' : 'h-52'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className={`p-8 ${isLarge ? 'md:w-1/2 md:flex md:flex-col md:justify-center' : ''}`}>
          <div className="flex items-center space-x-3 text-sm text-gray-500 mb-4">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              {new Date(post.date).toLocaleDateString('es-AR')}
            </span>
            <span className="text-gray-300">•</span>
            <span>{post.readTime} lectura</span>
          </div>
          
          <h3 className={`font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-4 leading-tight ${
            isLarge ? 'text-2xl md:text-3xl' : 'text-xl'
          }`}>
            {post.title}
          </h3>
          
          <p className={`text-gray-600 mb-6 leading-relaxed ${isLarge ? 'text-lg' : 'text-base'}`}>
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map(tag => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 group-hover:bg-blue-100 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;