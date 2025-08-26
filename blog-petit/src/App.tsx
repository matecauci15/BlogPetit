// import { useState } from 'react';
// import type { BlogPost } from './data/blogData';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import BlogHome from './components/BlogHome';
// import BlogPostComponent from './components/BlogPost';

// // Componente principal de la App
// const App = () => {
//   const [currentView, setCurrentView] = useState<'home' | 'post'>('home');
//   const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
//   const [activeSection, setActiveSection] = useState<string>('Blog');
//   const [, setEmail] = useState<string>('');
//   const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
//   const [showNotification, setShowNotification] = useState<boolean>(false);

//   const handlePostClick = (post: BlogPost) => {
//     setSelectedPost(post);
//     setCurrentView('post');
//     // Smooth scroll to top
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handleBackClick = (post?: BlogPost) => {
//     if (post) {
//       setSelectedPost(post);
//       setCurrentView('post');
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     } else {
//       setCurrentView('home');
//       setSelectedPost(null);
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   };

//   const handleNewsletterSubscribe = (emailValue: string) => {
//     if (emailValue && emailValue.includes('@')) {
//       setEmail(emailValue);
//       setIsSubscribed(true);
//       setShowNotification(true);
      
//       // Simular envío a backend
//       console.log('Suscribiendo email:', emailValue);
      
//       // Ocultar notificación después de 3 segundos
//       setTimeout(() => {
//         setShowNotification(false);
//       }, 3000);
//     } else {
//       alert('Por favor ingresa un email válido');
//     }
//   };

//   const handleShare = (platform: string, post?: BlogPost) => {
//     const title = post ? post.title : 'Blog de Petit Financieros';
//     const url = window.location.href;
    
//     switch (platform) {
//       case 'twitter':
//         window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
//         break;
//       case 'facebook':
//         window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
//         break;
//       case 'linkedin':
//         window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
//         break;
//       case 'whatsapp':
//         window.open(`https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`, '_blank');
//         break;
//       default:
//         // Copiar al portapapeles
//         navigator.clipboard.writeText(url).then(() => {
//           alert('¡Link copiado al portapapeles!');
//         });
//     }
//   };

//   const handleComment = () => {
//     // Simular funcionalidad de comentarios
//     const comment = prompt('¿Qué te pareció este artículo?');
//     if (comment) {
//       alert('¡Gracias por tu comentario! Lo revisaremos pronto.');
//       console.log('Comentario enviado:', comment);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col relative" style={{ 
//       fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
//     }}>
//       {/* Elementos decorativos de fondo */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
//         <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
//       </div>

//       {/* Notificación de suscripción */}
//       {showNotification && (
//         <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-2xl shadow-lg transform transition-all duration-500 animate-bounce">
//           <div className="flex items-center space-x-2">
//             <span className="text-2xl">✅</span>
//             <span className="font-semibold">¡Suscripción exitosa!</span>
//           </div>
//         </div>
//       )}

//       <div className="relative z-10 flex flex-col min-h-screen bg-white/5 backdrop-blur-sm">
//         <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        
//         <main className="flex-grow">
//           {currentView === 'home' ? (
//             <BlogHome 
//               onPostClick={handlePostClick} 
//               onNewsletterSubscribe={handleNewsletterSubscribe}
//               isSubscribed={isSubscribed}
//             />
//           ) : (
//             <BlogPostComponent 
//               post={selectedPost} 
//               onBackClick={handleBackClick}
//               onShare={handleShare}
//               onComment={handleComment}
//             />
//           )}
//         </main>
        
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default App;



import { useState } from 'react';
import type { BlogPost } from './data/blogData';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogHome from './components/BlogHome';
import BlogPostComponent from './components/BlogPost';
import { useNavigate } from 'react-router-dom';

// Componente principal de la App
const App = () => {
  const [currentView, setCurrentView] = useState<'home' | 'post'>('home');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeSection, setActiveSection] = useState<string>('Blog');
  const [, setEmail] = useState<string>('');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const navigate = useNavigate();

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    setCurrentView('post');
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackClick = (post?: BlogPost) => {
    if (post) {
      setSelectedPost(post);
      setCurrentView('post');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentView('home');
      setSelectedPost(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNewsletterSubscribe = (emailValue: string) => {
    if (emailValue && emailValue.includes('@')) {
      setEmail(emailValue);
      setIsSubscribed(true);
      setShowNotification(true);
      
      // Simular envío a backend
      console.log('Suscribiendo email:', emailValue);
      
      // Ocultar notificación después de 3 segundos
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    } else {
      alert('Por favor ingresa un email válido');
    }
  };

  const handleShare = (platform: string, post?: BlogPost) => {
    const title = post ? post.title : 'Blog de Petit Financieros';
    const url = window.location.href;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`, '_blank');
        break;
      default:
        // Copiar al portapapeles
        navigator.clipboard.writeText(url).then(() => {
          alert('¡Link copiado al portapapeles!');
        });
    }
  };
    const handleSectionChange = (newSection: string) => {
    
    if (newSection === 'Rosario') {
      navigate('/');
    } else {
      navigate(`/${newSection.toLowerCase()}`);
    }
  };

  const handleComment = () => {
    // Simular funcionalidad de comentarios
    const comment = prompt('¿Qué te pareció este artículo?');
    if (comment) {
      alert('¡Gracias por tu comentario! Lo revisaremos pronto.');
      console.log('Comentario enviado:', comment);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50" style={{ 
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>

      {/* Notificación de suscripción */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2">
            <span>✅</span>
            <span className="font-medium">¡Suscripción exitosa!</span>
          </div>
        </div>
      )}

      <div className="flex flex-col min-h-screen">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <main className="flex-grow">
          {currentView === 'home' ? (
            <BlogHome 
              onPostClick={handlePostClick} 
              onNewsletterSubscribe={handleNewsletterSubscribe}
              isSubscribed={isSubscribed}
            />
          ) : (
            <BlogPostComponent 
              post={selectedPost} 
              onBackClick={handleBackClick}
              onShare={handleShare}
              onComment={handleComment}
            />
          )}
        </main>
        
        <Footer setActiveSection={handleSectionChange}/>
      </div>
    </div>
  );
};

export default App;