
import React, { useState } from 'react';
import { blogPosts } from '../data/blogData';
import type { BlogPost } from '../data/blogData';
import SuramericanosBanner from './SuramericanosBanner';
import PostCard from './PostCard';

interface BlogHomeProps {
  onPostClick: (post: BlogPost) => void;
  onNewsletterSubscribe: (email: string) => void;
  isSubscribed: boolean;
}

const BlogHome: React.FC<BlogHomeProps> = ({ onPostClick, onNewsletterSubscribe, isSubscribed }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      alert('Por favor ingresa un email válido');
      return;
    }

    setIsLoading(true);
    
    // Simular delay de envío
    setTimeout(() => {
      onNewsletterSubscribe(email);
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="pt-16 pb-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 border border-blue-200 mb-8">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium">Actualizado semanalmente</span>
              </div>
              
              {/* Title */}
              <h1 className="text-5xl lg:text-6xl font-semibold text-[#74a4ab] upp leading-tight mb-6">
                Blog de Petit Financieros
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
                Consejos prácticos y estrategias comprobadas para mejorar tus finanzas personales 
                e invertir con confianza.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={() => document.getElementById('featured-post')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Ver artículos
                </button>
                <button 
                  onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-gray-600 px-8 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                >
                  Suscribirse
                </button>
              </div>
            </div>
            
            {/* Banner */}
            <div className="relative">
              <SuramericanosBanner />
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section id="featured-post" className="py-16">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-blue-600 rounded-full"></div>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Destacado</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Artículo más leído
            </h2>
            <p className="text-gray-600 text-lg">
              El contenido que más está ayudando a nuestros lectores
            </p>
          </div>
          
          <PostCard post={featuredPost} isLarge={true} onClick={onPostClick} />
        </section>

        {/* Latest Posts */}
        <section id='latest-posts' className="py-16">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-green-500 rounded-full"></div>
              <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">Reciente</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Últimos artículos
            </h2>
            <p className="text-gray-600 text-lg">
              Mantente al día con nuevo contenido financiero
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {otherPosts.map((post) => (
              <PostCard key={post.id} post={post} onClick={onPostClick} />
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section id="newsletter" className="py-16">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="px-8 py-12 text-center">
              {isSubscribed ? (
                <div className="max-w-md mx-auto">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    ¡Ya estás suscripto!
                  </h3>
                  <p className="text-gray-600">
                    Revisá tu email para confirmar la suscripción. 
                    Pronto recibirás contenido exclusivo.
                  </p>
                </div>
              ) : (
                <div className="max-w-2xl mx-auto space-y-6">
                  {/* Header */}
                  <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4">
                      📧 Newsletter gratuito
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      No te pierdas ningún consejo
                    </h3>
                    
                    <p className="text-lg text-gray-600 mb-8">
                      Únete a <strong className="text-gray-900">más de 10,000 lectores</strong> que 
                      reciben tips exclusivos y análisis cada semana.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-3 mb-6">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@email.com"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                      <button 
                        type="submit"
                        disabled={isLoading}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? 'Enviando...' : 'Suscribirme'}
                      </button>
                    </div>
                  </form> 
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogHome;