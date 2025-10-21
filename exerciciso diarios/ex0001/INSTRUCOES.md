
# 🎯 Exercício: Typography & Design Responsivo

## 📋 Objetivo
Completar um exercício sobre **hierarquia tipográfica** e **design responsivo**, aplicando conceitos de fontes, cores e variáveis CSS.

## 🎨 O que você irá praticar:
- ✅ Importação de fontes do Google Fonts
- ✅ Uso de variáveis CSS (custom properties)
- ✅ Hierarquia tipográfica
- ✅ Design responsivo com media queries
- ✅ Efeitos de hover e transições
- ✅ Sistema de cores consistente

## 📝 Instruções Passo a Passo:

### 1. **Importar Fonte Google Fonts**
```css
/* Adicione no topo do CSS, antes de qualquer outro estilo */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
```

### 2. **Configurar Variáveis CSS**
No seletor `:root`, defina:
```css
--primary-color: #2563eb;      /* Azul */
--secondary-color: #f59e0b;    /* Laranja */
--text-dark: #1f2937;          /* Cinza escuro */
--text-light: #f9fafb;         /* Branco */
--bg-light: #ffffff;           /* Branco */
--bg-dark: #111827;            /* Cinza muito escuro */
```

### 3. **Configurar Body**
```css
font-family: 'Poppins', Arial, sans-serif;
font-size: 16px;
line-height: 1.6;
color: var(--text-dark);
background-color: var(--bg-light);
```

### 4. **Estilizar Header**
```css
padding: 3rem 0;
text-align: center;
background-color: var(--bg-dark);
color: var(--text-light);
```

### 5. **Configurar Títulos**
- **main-title**: `font-size: clamp(2rem, 5vw, 3.5rem)`, `font-weight: 700`
- **subtitle**: `font-size: 1.2rem`, `font-weight: 300`, `opacity: 0.9`
- **section-title**: `font-size: 2.5rem`, `font-weight: 600`, `color: var(--primary-color)`

### 6. **Estilizar Cards**
```css
background: var(--bg-light);
border-radius: 12px;
padding: 2rem;
margin-bottom: 2rem;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
transition: transform 0.3s ease, box-shadow 0.3s ease;
```

### 7. **Efeito Hover nos Cards**
```css
transform: scale(1.02);
box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
```

### 8. **Configurar Highlight**
```css
color: var(--secondary-color);
font-weight: 600;
background-color: rgba(245, 158, 11, 0.1);
padding: 0.2rem 0.4rem;
border-radius: 4px;
```

### 9. **Media Queries**
- **768px**: Reduzir tamanhos e padding
- **480px**: Reduzir ainda mais para mobile

## 🎯 Desafios Extras:
1. **Adicione animações** nos títulos ao carregar a página
2. **Crie um tema escuro** com uma classe `.dark-theme`
3. **Adicione mais cards** com conteúdo próprio
4. **Experimente outras fontes** do Google Fonts

## 🔍 Como Testar:
1. Abra o arquivo no navegador
2. Redimensione a janela para testar responsividade
3. Passe o mouse sobre os cards para ver o efeito hover
4. Verifique se as cores e fontes estão aplicadas corretamente

## 💡 Dicas:
- Use `clamp()` para tamanhos de fonte responsivos
- Teste em diferentes tamanhos de tela
- Mantenha consistência visual com as variáveis
- Use transições suaves para melhor UX

**Boa sorte com o exercício! 🚀**