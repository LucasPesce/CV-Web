import{j as e,i as r,k as o,l,b as n,n as s}from"./index-DHZywboQ.js";const c=()=>{const{header:a}=r,t=new Date().getFullYear();return e.jsxs("footer",{className:"w-full bg-primary px-8 md:px-20 lg:px-32 pb-8 pt-12",children:[e.jsx("style",{children:`
                    @keyframes latidoColor {
                        0%, 100% { 
                            transform: scale(1); 
                            /* Al no definir color acá, el navegador usa text-textDim automáticamente */
                        }
                        15% { 
                            transform: scale(1.2); 
                            color: var(--accent); 
                        }
                        25% { 
                            transform: scale(1); 
                            color: var(--accent); 
                        }
                        35% { 
                            transform: scale(1.2); 
                            color: var(--accent); 
                        }
                        50% { 
                            transform: scale(1); 
                            /* Vuelve a la normalidad heredando el color base */
                        }
                    }
                    .animate-latido {
                        animation: latidoColor 2s infinite ease-in-out;
                    }
                `}),e.jsxs("div",{className:"border-t border-black/10 dark:border-white/5 pt-8 flex flex-col items-center justify-center gap-6",children:[e.jsxs("div",{className:"text-textDim text-sm font-medium text-center",children:["© ",t," Luc Pesce. Todos los derechos reservados."]}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx("a",{href:`mailto:${a.email}`,className:"text-textDim hover:text-accent transition-colors duration-300 text-xl hover:-translate-y-1 transform inline-block","aria-label":"Enviar correo electrónico",children:e.jsx(o,{})}),e.jsx("a",{href:a.whatsapp,target:"_blank",rel:"noopener noreferrer",className:"text-textDim text-xl animate-latido hover:-translate-y-1 transform inline-block","aria-label":"Contactar por WhatsApp",children:e.jsx(l,{})}),e.jsx("a",{href:`https://${a.github}`,target:"_blank",rel:"noopener noreferrer",className:"text-textDim hover:text-accent transition-colors duration-300 text-xl hover:-translate-y-1 transform inline-block","aria-label":"Perfil de GitHub",children:e.jsx(n,{})}),e.jsx("a",{href:"https://www.linkedin.com/in/lucaspesce/",target:"_blank",rel:"noopener noreferrer",className:"text-textDim hover:text-accent transition-colors duration-300 text-xl hover:-translate-y-1 transform inline-block","aria-label":"Perfil de LinkedIn",children:e.jsx(s,{})})]})]})]})};export{c as default};
