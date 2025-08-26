// import React from 'react';
// import { blogPosts } from '../data/blogData';
// import type { BlogPost as BlogPostType } from '../data/blogData';
// import SuramericanosBanner from './SuramericanosBanner';
// import PostCard from './PostCard';

// interface BlogPostProps {
//   post: BlogPostType | null;
//   onBackClick: (post?: BlogPostType) => void;
// }

// const BlogPost: React.FC<BlogPostProps> = ({ post, onBackClick }) => {
//   if (!post) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
//         <div className="text-center max-w-md mx-auto p-8">
//           <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
//             <span className="text-5xl">📄</span>
//           </div>
//           <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Post no encontrado</h1>
//           <p className="text-gray-600 mb-8 text-lg leading-relaxed">El artículo que buscás no existe o fue removido.</p>
//           <button 
//             onClick={() => onBackClick()}
//             className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
//           >
//             ← Volver al blog
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 2);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Banner Suramericanos */}
//         <div className="mb-8">
//           <SuramericanosBanner />
//         </div>

//         {/* Breadcrumb mejorado */}
//         <nav className="mb-12">
//           <button 
//             onClick={() => onBackClick()}
//             className="group inline-flex items-center px-6 py-3 rounded-2xl text-blue-600 bg-white hover:bg-blue-50 transition-all duration-300 font-semibold shadow-md hover:shadow-lg border border-blue-100"
//           >
//             <span className="mr-3 group-hover:-translate-x-1 transition-transform duration-300">←</span>
//             Volver al blog
//           </button>
//         </nav>

//         {/* Article mejorado */}
//         <article className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden mb-16 border border-white/50">
//           {/* Hero image con overlay mejorado */}
//           <div className="relative overflow-hidden">
//             <img
//               src={post.image}
//               alt={post.title}
//               className="w-full h-96 md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            
//             {/* Tags flotantes en la imagen */}
//             <div className="absolute bottom-6 left-6 right-6">
//               <div className="flex flex-wrap gap-2">
//                 {post.tags.map(tag => (
//                   <span
//                     key={tag}
//                     className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-white/20 text-white backdrop-blur-sm border border-white/30"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
          
//           <div className="p-8 md:p-16">
//             {/* Metadata mejorada */}
//             <div className="flex items-center space-x-6 text-sm text-gray-500 mb-8">
//               <span className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
//                 <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
//                 {new Date(post.date).toLocaleDateString('es-AR', { 
//                   year: 'numeric', 
//                   month: 'long', 
//                   day: 'numeric' 
//                 })}
//               </span>
//               <span className="text-gray-300">•</span>
//               <span className="flex items-center bg-purple-50 px-4 py-2 rounded-full">
//                 <span className="mr-2">⏱️</span>
//                 {post.readTime} lectura
//               </span>
//             </div>
            
//             {/* Título mejorado */}
//             <h1 className="text-4xl md:text-6xl font-bold  mb-12 leading-tight bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent">
//               {post.title}
//             </h1>
            
//             {/* Excerpt destacado */}
//             <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12 border-l-4 border-blue-500">
//               <p className="text-xl text-gray-700 leading-relaxed font-medium italic">
//                 "{post.excerpt}"
//               </p>
//             </div>
            
//             {/* Contenido mejorado */}
//             <div 
//               className="prose prose-xl max-w-none leading-relaxed prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-8 prose-strong:text-gray-900 prose-li:text-gray-700"
//               dangerouslySetInnerHTML={{ __html: post.content }}
//             />

//             {/* Call to action */}
//             <div className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-center">
//               <h3 className="text-2xl font-bold text-white mb-4">¿Te gustó este artículo?</h3>
//               <p className="text-blue-100 mb-6 text-lg">Compartilo con tus amigos o dejanos un comentario</p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30">
//                   Compartir 📱
//                 </button>
//                 <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300">
//                   Comentar 💬
//                 </button>
//               </div>
//             </div>
//           </div>
//         </article>

//         {/* Related Posts mejorados */}
//         <section>
//           <div className="text-center mb-12">
//             <h3 className="text-4xl font-bold text-gray-900 mb-4">Te puede interesar</h3>
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {relatedPosts.map(relatedPost => (
//               <div key={relatedPost.id} className="transform hover:scale-105 transition-transform duration-300">
//                 <PostCard 
//                   post={relatedPost} 
//                   onClick={(post) => onBackClick(post)}
//                 />
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Newsletter section */}
//         <section className="mt-20">
//           <div 
//             className="rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden"
//             style={{ background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #8b5cf6 100%)' }}
//           >
//             {/* Elementos decorativos */}
//             <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
//             <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-12 translate-y-12"></div>
            
//             <div className="relative max-w-2xl mx-auto">
//               <h3 className="text-3xl font-bold mb-4">¡Seguí leyendo más contenido!</h3>
//               <p className="text-xl text-blue-100 mb-8 leading-relaxed">
//                 Suscribite a nuestro newsletter y recibí los mejores consejos financieros semanalmente.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <input
//                   type="email"
//                   placeholder="Ingresá tu email aquí"
//                   className="flex-1 px-6 py-4 rounded-2xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30 font-medium text-lg placeholder-gray-500"
//                 />
//                 <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
//                   Suscribirse ✨
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default BlogPost;

// import React from 'react';
// import { blogPosts } from '../data/blogData';
// import type { BlogPost as BlogPostType } from '../data/blogData';
// import SuramericanosBanner from './SuramericanosBanner';
// import PostCard from './PostCard';

// interface BlogPostProps {
//   post: BlogPostType | null;
//   onBackClick: (post?: BlogPostType) => void;
//   onShare: (platform: string, post?: BlogPostType) => void;
//   onComment: () => void;
// }

// const BlogPost: React.FC<BlogPostProps> = ({ post, onBackClick, onShare, onComment }) => {
//   if (!post) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
//         <div className="text-center max-w-md mx-auto p-8">
//           <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
//             <span className="text-5xl">📄</span>
//           </div>
//           <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Post no encontrado</h1>
//           <p className="text-gray-600 mb-8 text-lg leading-relaxed">El artículo que buscás no existe o fue removido.</p>
//           <button 
//             onClick={() => onBackClick()}
//             className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
//           >
//             ← Volver al blog
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 2);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Banner Suramericanos */}
//         <div className="mb-8">
//           <SuramericanosBanner />
//         </div>

//         {/* Breadcrumb mejorado */}
//         <nav className="mb-12">
//           <button 
//             onClick={() => onBackClick()}
//             className="group inline-flex items-center px-6 py-3 rounded-2xl text-blue-600 bg-white hover:bg-blue-50 transition-all duration-300 font-semibold shadow-md hover:shadow-lg border border-blue-100"
//           >
//             <span className="mr-3 group-hover:-translate-x-1 transition-transform duration-300">←</span>
//             Volver al blog
//           </button>
//         </nav>

//         {/* Article mejorado */}
//         <article className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden mb-16 border border-white/50">
//           {/* Hero image con overlay mejorado */}
//           <div className="relative overflow-hidden">
//             <img
//               src={post.image}
//               alt={post.title}
//               className="w-full h-96 md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            
//             {/* Tags flotantes en la imagen */}
//             <div className="absolute bottom-6 left-6 right-6">
//               <div className="flex flex-wrap gap-2">
//                 {post.tags.map(tag => (
//                   <span
//                     key={tag}
//                     className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-white/20 text-white backdrop-blur-sm border border-white/30"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
          
//           <div className="p-8 md:p-16">
//             {/* Metadata mejorada */}
//             <div className="flex items-center space-x-6 text-sm text-gray-500 mb-8">
//               <span className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
//                 <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
//                 {new Date(post.date).toLocaleDateString('es-AR', { 
//                   year: 'numeric', 
//                   month: 'long', 
//                   day: 'numeric' 
//                 })}
//               </span>
//               <span className="text-gray-300">•</span>
//               <span className="flex items-center bg-purple-50 px-4 py-2 rounded-full">
//                 <span className="mr-2">⏱️</span>
//                 {post.readTime} lectura
//               </span>
//             </div>
            
//             {/* Título mejorado */}
//             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-12 leading-tight bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent">
//               {post.title}
//             </h1>
            
//             {/* Excerpt destacado */}
//             <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12 border-l-4 border-blue-500">
//               <p className="text-xl text-gray-700 leading-relaxed font-medium italic">
//                 "{post.excerpt}"
//               </p>
//             </div>
            
//             {/* Contenido mejorado */}
//             <div 
//               className="prose prose-xl max-w-none leading-relaxed prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-8 prose-strong:text-gray-900 prose-li:text-gray-700"
//               dangerouslySetInnerHTML={{ __html: post.content }}
//             />

//             {/* Call to action con botones funcionales */}
//             <div className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-center">
//               <h3 className="text-2xl font-bold text-white mb-4">¿Te gustó este artículo?</h3>
//               <p className="text-blue-100 mb-6 text-lg">Compartilo con tus amigos o dejanos un comentario</p>
//               <div className="flex flex-wrap gap-4 justify-center">
//                 <button 
//                   onClick={() => onShare('whatsapp', post)}
//                   className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 flex items-center gap-2"
//                 >
//                   <span>📱</span> WhatsApp
//                 </button>
//                 <button 
//                   onClick={() => onShare('twitter', post)}
//                   className="bg-blue-400 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-500 transition-all duration-300 flex items-center gap-2"
//                 >
//                   <span>🐦</span> Twitter
//                 </button>
//                 <button 
//                   onClick={() => onShare('facebook', post)}
//                   className="bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-900 transition-all duration-300 flex items-center gap-2"
//                 >
//                   <span>📘</span> Facebook
//                 </button>
//                 <button 
//                   onClick={() => onShare('copy')}
//                   className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 flex items-center gap-2"
//                 >
//                   <span>📋</span> Copiar
//                 </button>
//                 <button 
//                   onClick={onComment}
//                   className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center gap-2"
//                 >
//                   <span>💬</span> Comentar
//                 </button>
//               </div>
//             </div>
//           </div>
//         </article>

//         {/* Related Posts mejorados */}
//         <section>
//           <div className="text-center mb-12">
//             <h3 className="text-4xl font-bold text-gray-900 mb-4">Te puede interesar</h3>
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {relatedPosts.map(relatedPost => (
//               <div key={relatedPost.id} className="transform hover:scale-105 transition-transform duration-300">
//                 <PostCard 
//                   post={relatedPost} 
//                   onClick={(post) => onBackClick(post)}
//                 />
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Newsletter section */}
//         <section className="mt-20">
//           <div 
//             className="rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden"
//             style={{ background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #8b5cf6 100%)' }}
//           >
//             {/* Elementos decorativos */}
//             <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
//             <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-12 translate-y-12"></div>
            
//             <div className="relative max-w-2xl mx-auto">
//               <h3 className="text-3xl font-bold mb-4">¡Seguí leyendo más contenido!</h3>
//               <p className="text-xl text-blue-100 mb-8 leading-relaxed">
//                 Suscribite a nuestro newsletter y recibí los mejores consejos financieros semanalmente.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <input
//                   type="email"
//                   placeholder="Ingresá tu email aquí"
//                   className="flex-1 px-6 py-4 rounded-2xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30 font-medium text-lg placeholder-gray-500"
//                 />
//                 <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
//                   Suscribirse ✨
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default BlogPost;


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

const BlogPost: React.FC<BlogPostProps> = ({ post, onBackClick, onShare, onComment }) => {
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
            <div className="mt-12 p-6 bg-blue-600 rounded-lg text-center">
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
                  Twitter
                </button>
                <button 
                  onClick={() => onShare('facebook', post)}
                  className="bg-blue-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-900 transition-colors duration-200"
                >
                  Facebook
                </button>
                <button 
                  onClick={() => onShare('copy')}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-600 transition-colors duration-200"
                >
                  Copiar
                </button>
                <button 
                  onClick={onComment}
                  className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 border border-gray-300"
                >
                  Comentar
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
          <div className="rounded-lg p-8 text-center text-white bg-blue-600">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">¡Seguí leyendo más contenido!</h3>
              <p className="text-blue-100 mb-6">
                Suscribite a nuestro newsletter y recibí los mejores consejos financieros semanalmente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Ingresá tu email aquí"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium"
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