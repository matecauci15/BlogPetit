import React from 'react';
import { blogPosts } from '../data/blogData';
import type { BlogPost as BlogPostType } from '../data/blogData';
import SuramericanosBanner from './SuramericanosBanner';
import PostCard from './PostCard';

interface BlogPostProps {
  post: BlogPostType | null;
  onBackClick: (post?: BlogPostType) => void;
  onShare: (platform: string, post?: BlogPostType) => void;
  onComment: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, onBackClick, onShare }) => {
  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
            <span className="text-5xl">📄</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Post no encontrado</h1>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">El artículo que buscás no existe o fue removido.</p>
          <button 
            onClick={() => onBackClick()}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
          >
            ← Volver al blog
          </button>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Banner Suramericanos */}
        <div className="mb-8">
          <SuramericanosBanner />
        </div>

        {/* Breadcrumb mejorado */}
        <nav className="mb-12">
          <button 
            onClick={() => onBackClick()}
            className="group inline-flex items-center px-6 py-3 rounded-2xl text-blue-600 bg-white hover:bg-blue-50 transition-all duration-300 font-semibold shadow-md hover:shadow-lg border border-blue-100"
          >
            <span className="mr-3 group-hover:-translate-x-1 transition-transform duration-300">←</span>
            Volver al blog
          </button>
        </nav>

        {/* Article simplificado */}
        <article className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
          {/* Hero image con overlay mejorado */}
          <div className="relative overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-80 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            
            {/* Tags en la imagen */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-gray-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="p-8 md:p-12">
            {/* Metadata */}
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                {new Date(post.date).toLocaleDateString('es-AR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="text-gray-300">•</span>
              <span>{post.readTime} lectura</span>
            </div>
            
            {/* Título */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              {post.title}
            </h1>
            
            {/* Excerpt destacado */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8 border-l-4 border-blue-500">
              <p className="text-lg text-gray-700 leading-relaxed font-medium italic">
                "{post.excerpt}"
              </p>
            </div>
            
            {/* Contenido */}
            <div 
              className="prose prose-lg max-w-none leading-relaxed prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-li:text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Call to action simplificado */}
            <div className="mt-12 p-6 bg-gray-800 rounded-lg text-center">
              <h3 className="text-xl font-bold text-white mb-4">¿Te gustó este artículo?</h3>
              <p className="text-blue-100 mb-6">Compartilo con tus amigos o dejanos un comentario</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <button 
                  onClick={() => onShare('whatsapp', post)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors duration-200"
                >
                  WhatsApp
                </button>
                <button 
                  onClick={() => onShare('twitter', post)}
                  className="bg-blue-400 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-500 transition-colors duration-200"
                >
                  X
                </button>
                <button 
                  onClick={() => onShare('facebook', post)}
                  className="bg-blue-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-900 transition-colors duration-200"
                >
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Te puede interesar</h3>
            <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map(relatedPost => (
              <PostCard 
                key={relatedPost.id} 
                post={relatedPost} 
                onClick={(post) => onBackClick(post)}
              />
            ))}
          </div>
        </section>

        {/* Newsletter section simplificado */}
        <section className="mt-16">
          <div className="rounded-lg p-8 text-center text-white bg-gray-800">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">¡Seguí leyendo más contenido!</h3>
              <p className="text-gray-100 mb-6">
                Suscribite a nuestro newsletter y recibí los mejores consejos financieros semanalmente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Ingresá tu email aquí"
                  className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 border-1 border-white focus:ring-blue-300 font-medium"
                />
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors duration-200">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPost;