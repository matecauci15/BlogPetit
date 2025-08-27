
// import React, { useState } from 'react';
// import { blogPosts } from '../data/blogData';
// import type { BlogPost } from '../data/blogData';
// import SuramericanosBanner from './SuramericanosBanner';
// import PostCard from './PostCard';

// interface BlogHomeProps {
//   onPostClick: (post: BlogPost) => void;
//   onNewsletterSubscribe: (email: string) => void;
//   isSubscribed: boolean;
// }

// const BlogHome: React.FC<BlogHomeProps> = ({ onPostClick, onNewsletterSubscribe, isSubscribed }) => {
//   const [email, setEmail] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const featuredPost = blogPosts[0];
//   const otherPosts = blogPosts.slice(1);

//   const handleNewsletterSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email || !email.includes('@')) {
//       alert('Por favor ingresa un email válido');
//       return;
//     }

//     setIsLoading(true);
    
//     // Simular delay de envío
//     setTimeout(() => {
//       onNewsletterSubscribe(email);
//       setEmail('');
//       setIsLoading(false);
//     }, 1000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-white/90 to-blue-50/50 backdrop-blur-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Hero Section mejorado */}
//         <section className="text-center mb-20">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="max-w-4xl">
//               <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-6">
//                 <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
//                 Blog actualizado semanalmente
//               </div>
              
//               <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
//                 Blog de{' '}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 animate-gradient-x">
//                   Petit Financieros
//                 </span>
//               </h1>
              
//               <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
//                 Descubrí consejos prácticos, estrategias efectivas y las últimas novedades para 
//                 <span className="font-semibold text-blue-600"> optimizar tus finanzas personales </span>
//                 e invertir con confianza.
//               </p>

//               {/* CTA buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
//                 <button 
//                   onClick={() => document.getElementById('featured-post')?.scrollIntoView({ behavior: 'smooth' })}
//                   className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 transform"
//                 >
//                   Ver artículos destacados 📚
//                 </button>
//                 <button 
//                   onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
//                   className="bg-white/80 backdrop-blur-sm text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-200"
//                 >
//                   Suscribirse al newsletter ✉️
//                 </button>
//               </div>

//               {/* Stats */}
//               <div className="flex justify-center space-x-8 text-sm text-gray-600">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-blue-600">{blogPosts.length}+</div>
//                   <div>Artículos</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-purple-600">10K+</div>
//                   <div>Lectores</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-green-600">95%</div>
//                   <div>Satisfacción</div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="relative">
//               <SuramericanosBanner />
//               {/* Elementos decorativos */}
//               <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-bounce"></div>
//               <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>
//             </div>
//           </div>
//         </section>

//         {/* Featured Post mejorado */}
//         <section id="featured-post" className="mb-20">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Artículo destacado</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
//             <p className="text-gray-600 mt-4 text-lg">Lo más leído de la semana</p>
//           </div>
          
//           <div className="relative group">
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 transform scale-105"></div>
//             <PostCard post={featuredPost} isLarge={true} onClick={onPostClick} />
//           </div>
//         </section>

//         {/* Latest Posts mejorados */}
//         <section className="mb-20">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Últimos artículos</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mx-auto"></div>
//             <p className="text-gray-600 mt-4 text-lg">Contenido fresco para tus finanzas</p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {otherPosts.map((post, index) => (
//               <div 
//                 key={post.id} 
//                 className="transform hover:scale-105 transition-all duration-300"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <PostCard post={post} onClick={onPostClick} />
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Newsletter mejorado */}
//         <section 
//           id="newsletter"
//           className="rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden"
//           style={{ background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 30%, #8b5cf6 70%, #ec4899 100%)' }}
//         >
//           {/* Elementos decorativos animados */}
//           <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-32 -translate-y-32 animate-pulse"></div>
//           <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-24 translate-y-24 animate-pulse" style={{ animationDelay: '1s' }}></div>
//           <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

//           <div className="relative max-w-3xl mx-auto">
//             {isSubscribed ? (
//               <div className="animate-bounce">
//                 <div className="text-6xl mb-4">🎉</div>
//                 <h3 className="text-4xl font-bold mb-4">¡Genial! Ya estás suscripto</h3>
//                 <p className="text-xl text-blue-100 leading-relaxed">
//                   Revisá tu email para confirmar la suscripción. ¡Pronto recibirás contenido exclusivo!
//                 </p>
//               </div>
//             ) : (
//               <>
//                 <div className="text-5xl mb-6">📈💰✨</div>
//                 <h3 className="text-4xl md:text-5xl font-bold mb-6">¡No te pierdas nada!</h3>
//                 <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
//                   Únete a más de <span className="font-bold text-white">10,000 lectores</span> que reciben 
//                   consejos financieros exclusivos cada semana
//                 </p>
                
//                 <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 mb-8">
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Ingresá tu mejor email aquí..."
//                     className="flex-1 px-6 py-4 rounded-2xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30 font-medium text-lg placeholder-gray-500 shadow-lg"
//                     required
//                   />
//                   <button 
//                     type="submit"
//                     disabled={isLoading}
//                     className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 text-lg disabled:opacity-50 disabled:cursor-not-allowed min-w-[160px]"
//                   >
//                     {isLoading ? (
//                       <div className="flex items-center justify-center">
//                         <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-2"></div>
//                         Enviando...
//                       </div>
//                     ) : (
//                       'Suscribirse ✨'
//                     )}
//                   </button>
//                 </form>
                
//                 <div className="flex items-center justify-center text-blue-100 text-sm">
//                   <span className="mr-2">🔒</span>
//                   <span>Sin spam. Cancelá cuando quieras. 100% gratis.</span>
//                 </div>

//                 {/* Beneficios */}
//                 <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
//                   <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
//                     <div className="text-3xl mb-3">📊</div>
//                     <h4 className="font-bold text-lg mb-2">Análisis exclusivos</h4>
//                     <p className="text-blue-100 text-sm">Reportes del mercado argentino que no encontrás en otros lados</p>
//                   </div>
//                   <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
//                     <div className="text-3xl mb-3">💡</div>
//                     <h4 className="font-bold text-lg mb-2">Tips semanales</h4>
//                     <p className="text-blue-100 text-sm">Estrategias prácticas para aplicar inmediatamente</p>
//                   </div>
//                   <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
//                     <div className="text-3xl mb-3">🎯</div>
//                     <h4 className="font-bold text-lg mb-2">Contenido curado</h4>
//                     <p className="text-blue-100 text-sm">Solo lo mejor, sin ruido ni información irrelevante</p>
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         </section>
//       </div>

//       {/* Custom CSS for gradient animation */}
//       <style jsx>{`
//         @keyframes gradient-x {
//           0%, 100% {
//             background-size: 200% 200%;
//             background-position: left center;
//           }
//           50% {
//             background-size: 200% 200%;
//             background-position: right center;
//           }
//         }
//         .animate-gradient-x {
//           animation: gradient-x 3s ease infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default BlogHome;

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