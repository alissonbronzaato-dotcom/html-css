# 🎯 Exercício 002: Layout Flexbox & CSS Grid

## 📋 Objetivo
Completar um exercício sobre **layouts modernos** usando **Flexbox** e **CSS Grid**, criando uma página de portfólio responsiva com diferentes seções organizadas.

## 🎨 O que você irá praticar:
- ✅ Layout com CSS Grid para estrutura principal
- ✅ Flexbox para organização interna dos elementos
- ✅ Sistema de cards responsivos
- ✅ Navegação horizontal
- ✅ Gallery de projetos com Grid
- ✅ Design responsivo avançado
- ✅ Transições e efeitos visuais

## 📝 Instruções Passo a Passo:

### 1. **Configurar Grid Principal**
No `.main-layout`, configure um grid com:
```css
display: grid;
grid-template-columns: 1fr;
grid-template-areas: 
    "hero"
    "about"
    "projects"
    "contact";
gap: 2rem;
```

### 2. **Estilizar Navigation com Flexbox**
Na `.navigation`, use:
```css
display: flex;
justify-content: center;
align-items: center;
gap: 2rem;
padding: 1rem 0;
```

### 3. **Criar Hero Section**
No `.hero`, configure:
```css
grid-area: hero;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 60vh;
text-align: center;
```

### 4. **Grid de Projetos**
No `.projects-grid`, configure:
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 2rem;
padding: 2rem 0;
```

### 5. **Cards Flexbox**
Nos `.project-card`, use:
```css
display: flex;
flex-direction: column;
border-radius: 12px;
overflow: hidden;
transition: transform 0.3s ease;
```

### 6. **Media Queries Responsivas**
Para desktop (min-width: 768px):
```css
.main-layout {
    grid-template-columns: 1fr 2fr;
    grid-template-areas: 
        "hero hero"
        "about projects"
        "contact contact";
}
```

### 7. **Variáveis CSS para Cores**
```css
:root {
    --primary: #6366f1;
    --secondary: #ec4899;
    --accent: #10b981;
    --dark: #1f2937;
    --light: #f8fafc;
    --border: #e5e7eb;
}
```

## 🎨 Paleta de Cores Sugerida:
- **Primária**: `#6366f1` (Índigo)
- **Secundária**: `#ec4899` (Rosa)
- **Accent**: `#10b981` (Verde)
- **Texto**: `#1f2937` (Cinza escuro)
- **Background**: `#f8fafc` (Cinza claro)

## 📱 Breakpoints Responsivos:
- **Mobile**: até 767px
- **Tablet**: 768px até 1023px  
- **Desktop**: 1024px+

## ✨ Efeitos Extras:
- Hover nos cards com `transform: translateY(-8px)`
- Transições suaves com `transition: all 0.3s ease`
- Bordas arredondadas `border-radius: 12px`
- Sombras sutis `box-shadow: 0 4px 12px rgba(0,0,0,0.1)`

## 🏆 Desafio Bonus:
Depois de completar o básico, tente:
- Adicionar animações de entrada nos cards
- Criar um menu hamburger para mobile
- Implementar um filtro nos projetos
- Adicionar modo escuro/claro

---

**Dica**: Use o DevTools do navegador (F12) para testar a responsividade em diferentes tamanhos de tela!

**Tempo estimado**: 45-60 minutos