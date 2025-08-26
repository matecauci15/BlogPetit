export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

// Datos simulados de los posts del blog basados en los posts de Cocos
export const blogPosts: BlogPost[] = [
  {
    id: 'ahorrar-en-argentina-estrategias-2025',
    title: 'Cómo ahorrar en Argentina: estrategias para 2025',
    excerpt: 'Descubrí las mejores estrategias para cuidar y hacer crecer tus ahorros en el contexto económico argentino actual.',
    content: `
      <p style="color: #374151; line-height: 1.75; margin-bottom: 1.5rem;">En el contexto económico argentino actual, ahorrar requiere estrategia y conocimiento. La inflación y la volatilidad del peso argentino hacen que sea fundamental diversificar y pensar en instrumentos que protejan el valor de tu dinero.</p>
      
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #111827; margin-top: 2rem; margin-bottom: 1rem;">Estrategias principales para 2025</h3>
      <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
        <li style="color: #374151; line-height: 1.75; margin-bottom: 0.5rem;"><strong style="font-weight: 600; color: #111827;">Diversificación de monedas:</strong> No pongas todos los huevos en la misma canasta. Combiná pesos, dólares y otros activos.</li>
        <li style="color: #374151; line-height: 1.75; margin-bottom: 0.5rem;"><strong style="font-weight: 600; color: #111827;">Instrumentos de ahorro en pesos:</strong> Fondos comunes de inversión, plazo fijos UVA, y bonos ajustados por inflación.</li>
        <li style="color: #374151; line-height: 1.75; margin-bottom: 0.5rem;"><strong style="font-weight: 600; color: #111827;">Dolarización parcial:</strong> Mantené una parte de tus ahorros en dólares, pero siempre dentro del marco legal.</li>
        <li style="color: #374151; line-height: 1.75; margin-bottom: 0.5rem;"><strong style="font-weight: 600; color: #111827;">Educación financiera:</strong> Mantenete informado sobre las opciones disponibles y sus riesgos.</li>
      </ul>
      
      <p style="color: #374151; line-height: 1.75; margin-bottom: 1.5rem;">Recordá que cada situación es única. Lo importante es empezar de a poco y ser constante con tus hábitos de ahorro.</p>
    `,
    date: '2025-01-15',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop',
    tags: ['Ahorro', 'Argentina', 'Estrategias', 'Finanzas']
  },
  {
    id: 'como-pagar-en-brasil',
    title: 'Cómo pagar en Brasil: guía completa para argentinos',
    excerpt: 'Todo lo que necesitás saber sobre medios de pago, cambio de moneda y consejos para viajar a Brasil.',
    content: `
      <p style="color: #374151; line-height: 1.75; margin-bottom: 1.5rem;">Viajar a Brasil siendo argentino implica planificar bien el tema de los pagos. Con las regulaciones cambiarias y las diferentes opciones disponibles, es importante conocer todas las alternativas.</p>
      
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #111827; margin-top: 2rem; margin-bottom: 1rem;">Medios de pago recomendados</h3>
      <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
        <li style="color: #374151; line-height: 1.75; margin-bottom: 0.5rem;"><strong style="font-weight: 600; color: #111827;">Tarjetas de débito/crédito:</strong> Utilizá tarjetas que tengan buenos tipos de cambio y bajas comisiones.</li>
        <li style="color: #374151; line-height: 1.75; margin-bottom: 0.5rem;"><strong style="font-weight: 600; color: #111827;">Efectivo en reales:</strong> Cambiá dinero en casas de cambio oficiales o bancos.</li>
        <li style="color: #374151; line-height: 1.75; margin-bottom: 0.5rem;"><strong style="font-weight: 600; color: #111827;">PIX:</strong> El sistema de pagos instantáneos brasileño, muy popular y conveniente.</li>
        <li style="color: #374151; line-height: 1.75; margin-bottom: 0.5rem;"><strong style="font-weight: 600; color: #111827;">Apps de pago:</strong> Aplicaciones como Mercado Pago Brasil pueden ser útiles.</li>
      </ul>
      
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #111827; margin-top: 2rem; margin-bottom: 1rem;">Consejos importantes</h3>
      <p style="color: #374151; line-height: 1.75; margin-bottom: 1.5rem;">Siempre declará correctamente tus gastos en el exterior y mantenete dentro de los límites permitidos por la AFIP. Consultá con tu banco sobre las comisiones internacionales antes de viajar.</p>
    `,
    date: '2025-01-10',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=400&fit=crop',
    tags: ['Brasil', 'Pagos', 'Viajes', 'Turismo']
  },
  {
    id: 'dolar-compra-como-proteger-ahorros',
    title: 'Dólar y compra: cómo proteger tus ahorros',
    excerpt: 'Estrategias legales y efectivas para proteger el valor de tus ahorros mediante la dolarización parcial.',
    content: `
      <p style="color: #374151; line-height: 1.75; margin-bottom: 1.5rem;">La protección de ahorros mediante dólares es una estrategia común entre los argentinos. Sin embargo, es importante hacerlo de manera legal y consciente de los riesgos y beneficios.</p>
      
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #111827; margin-top: 2rem; margin-bottom: 1rem;">Formas legales de acceder a dólares</h3>
      <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
        <li style="color: #374151; line-height: 1.75; margin-bottom: 0.5rem;"><strong style="font-weight: 600; color: #111827;">Dólar ahorro:</strong> Compra mensual de hasta USD 200 (sujeto a restricciones).</li>
        <li style="color: #374151; line-height: 1.75; margin-bottom: 0.5rem;"><strong style="font-weight: 600; color: #111827;">MEP (Mercado Electrónico de Pagos):</strong> Compra de bonos en pesos y venta en dólares.</li>
        <li style="color: #374151; line-height: 1.75; margin-bottom: 0.5rem;"><strong style="font-weight: 600; color: #111827;">Blue con declaración:</strong> Compra en el mercado informal pero declarando el origen de los fondos.</li>
        <li style="color: #374151; line-height: 1.75; margin-bottom: 0.5rem;"><strong style="font-weight: 600; color: #111827;">CCL (Contado con Liquidación):</strong> Para montos mayores, a través del mercado de capitales.</li>
      </ul>
      
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #111827; margin-top: 2rem; margin-bottom: 1rem;">Consideraciones importantes</h3>
      <p style="color: #374151; line-height: 1.75; margin-bottom: 1.5rem;">Recordá que el dólar no genera intereses y puede tener volatilidad. Una buena estrategia incluye diversificación entre pesos, dólares y otros activos como fondos de inversión.</p>
      
      <p style="color: #374151; line-height: 1.75; margin-bottom: 1.5rem;">Siempre consultá con un contador o asesor financiero para asegurar que estés cumpliendo con todas las regulaciones vigentes.</p>
    `,
    date: '2025-01-05',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop',
    tags: ['Dólar', 'Ahorro', 'Inversiones', 'Protección']
  }
];