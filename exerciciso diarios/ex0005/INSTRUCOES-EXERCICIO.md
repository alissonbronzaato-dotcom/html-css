# 🎯 EXERCÍCIO PRÁTICO: PORTFÓLIO PESSOAL

## 📚 **CONCEITOS QUE VOCÊ VAI PRATICAR:**

✅ **HTML5 Semântico** (header, nav, main, section, footer)
✅ **Modelo de Caixas** (padding, margin, border)  
✅ **Flexbox** (justify-content, align-items, flex-direction)
✅ **Posicionamento** (margin: auto, centralização)
✅ **Pseudo-elementos** (::after, ::before)
✅ **Efeitos CSS** (hover, transitions, transforms)
✅ **Box-shadow** e **border-radius**

---

## 📋 **INSTRUÇÕES:**

1. **Abra o arquivo `exercicio-pratico.html`**
2. **Complete TODOS os "TODO" numerados** (de 1 a 13)
3. **Teste no navegador após cada TODO**
4. **Se conseguir completar tudo, tente os BONUS!**

---

## 🎯 **LISTA DE TODOs:**

### **TODO 1: Header**
```css
header {
    background-color: #2c3e50;
    color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
```

### **TODO 2: Título do Header**
```css
header h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
}
```

### **TODO 3: Navegação**
```css
nav {
    background-color: #34495e;
    display: flex;
    justify-content: center;
    padding: 15px 0;
    max-width: 800px;
    margin: 0 auto;
}
```

### **TODO 4: Links da Navegação**
```css
nav a {
    text-decoration: none;
    color: white;
    padding: 10px 20px;
    transition: all 0.3s;
    border-radius: 5px;
}
```

### **TODO 5: Hover nos Links**
```css
nav a:hover {
    background-color: #3498db;
    transform: scale(1.05);
}
```

### **TODO 6: Main**
```css
main {
    max-width: 1000px;
    margin: 20px auto;
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
}
```

### **TODO 7: Sections**
```css
section {
    margin-bottom: 40px;
    padding-bottom: 20px;
    border-bottom: 2px solid #eee;
}

section:last-child {
    border-bottom: none;
}
```

### **TODO 8: Títulos h2**
```css
h2 {
    color: #2c3e50;
    font-size: 2em;
    margin-bottom: 15px;
    position: relative;
}
```

### **TODO 9: Linha Decorativa nos h2**
```css
h2::after {
    content: '';
    width: 50px;
    height: 3px;
    background: #3498db;
    position: absolute;
    left: 0;
    bottom: -5px;
}
```

### **TODO 10: Container de Habilidades**
```css
.habilidades-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
}
```

### **TODO 11: Cada Habilidade**
```css
.habilidade {
    flex: 1 1 200px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    transform: translateY(0);
    transition: all 0.3s ease;
}
```

### **TODO 12: Hover nas Habilidades**
```css
.habilidade:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}
```

### **TODO 13: Footer**
```css
footer {
    background: #2c3e50;
    color: white;
    text-align: center;
    padding: 20px;
    position: relative;
}
```

---

## 🚀 **DESAFIOS BONUS** (Só depois de completar todos os TODOs!)

### **BONUS 1: Gradiente no Background**
```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}
```

### **BONUS 2: Animação no Título**
```css
@keyframes slideIn {
    from { transform: translateY(-50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

header h1 {
    animation: slideIn 1s ease-out;
}
```

### **BONUS 3: Responsividade**
```css
@media (max-width: 768px) {
    nav { 
        flex-direction: column; 
    }
    .habilidades-container { 
        flex-direction: column; 
    }
    main { 
        margin: 10px; 
        padding: 20px; 
    }
}
```

---

## 🎨 **DICAS IMPORTANTES:**

1. **Teste cada TODO no navegador** antes de passar para o próximo
2. **Use as ferramentas de desenvolvedor** (F12) para ver os efeitos
3. **Experimente mudar cores e valores** para personalizar
4. **Se algo não funcionar, verifique:**
   - Sintaxe do CSS (ponto e vírgula, chaves)
   - Nome das classes e IDs
   - Ordem das propriedades

---

## 🏆 **RESULTADO ESPERADO:**

- ✅ Header azul escuro centralizado
- ✅ Navegação com hover azul
- ✅ Main centralizado com sombra
- ✅ Sections com linhas decorativas
- ✅ Habilidades em cards com gradiente
- ✅ Efeitos hover suaves
- ✅ Layout responsivo e profissional

---

**🎉 BOA SORTE! Lembre-se: programação é prática. Quanto mais você fizer, melhor ficará!**