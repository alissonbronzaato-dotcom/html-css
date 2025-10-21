# 🎯 EXERCÍCIO: CARTÃO DE PERFIL

## 📋 Objetivo
Criar um cartão de perfil responsivo e moderno usando HTML e CSS, praticando conceitos fundamentais de layout e estilização.

## 🎓 O que você vai aprender
- Flexbox para layout
- Bordas arredondadas
- Sombras
- Transições CSS
- Media queries (responsividade)
- Pseudo-classes (:hover)
- Posicionamento e centralização

## 📁 Arquivos
1. **exercicio-cartao-perfil.html** - Arquivo para você completar
2. **exercicio-cartao-perfil-RESPOSTAS.html** - Arquivo com as respostas (só olhe depois!)

## 🚀 Como fazer o exercício

### Passo 1: Abra o arquivo `exercicio-cartao-perfil.html`
- Você verá vários comentários `/* TODO: ... */`
- Cada comentário indica o que você deve fazer

### Passo 2: Complete as propriedades CSS
Siga as instruções nos comentários para:

#### Para o body:
- Centralizar o conteúdo na página

#### Para .cartao:
- Definir largura máxima
- Adicionar fundo branco
- Fazer bordas arredondadas
- Adicionar sombra
- Centralizar na página

#### Para .foto-perfil:
- Tornar a imagem circular
- Definir tamanho
- Centralizar
- Adicionar borda

#### Para textos (.nome, .profissao, .bio):
- Definir cores
- Ajustar tamanhos de fonte
- Controlar margens
- Centralizar quando necessário

#### Para .redes-sociais:
- Usar flexbox
- Organizar os botões

#### Para .botao-social:
- Estilizar os botões das redes sociais
- Adicionar cores específicas para cada rede
- Criar efeitos hover

### Passo 3: Teste no navegador
- Abra o arquivo no navegador
- Veja como está ficando
- Teste redimensionando a janela (responsividade)

### Passo 4: Compare com as respostas
- Só depois de tentar, abra o arquivo de respostas
- Compare sua solução com a resposta
- Veja o que pode melhorar

## 💡 Dicas importantes

### Para centralizar elementos:
```css
display: flex;
justify-content: center;
align-items: center;
```

### Para fazer imagem circular:
```css
border-radius: 50%;
```

### Para sombras suaves:
```css
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
```

### Para transições:
```css
transition: all 0.3s ease;
```

### Para media queries:
```css
@media (max-width: 480px) {
    /* Estilos para telas pequenas */
}
```

## 🎨 Cores sugeridas
- Instagram: #E4405F
- LinkedIn: #0077B5
- GitHub: #333
- Fundo da página: #f0f2f5
- Texto principal: #333
- Texto secundário: #666 ou #555

## ✅ Checklist do exercício
- [ ] Cartão centralizado na página
- [ ] Foto circular com borda
- [ ] Textos bem estilizados
- [ ] Botões das redes sociais coloridos
- [ ] Efeito hover nos botões
- [ ] Layout responsivo para celular
- [ ] Sombras aplicadas corretamente

## 🏆 Desafios extras (opcional)
1. Adicione mais redes sociais
2. Crie animações mais elaboradas
3. Adicione ícones nos botões
4. Mude as cores para um tema escuro
5. Adicione mais informações no cartão

## 🔧 Problemas comuns
- **Imagem não fica circular**: Verifique se width e height são iguais
- **Cartão não centraliza**: Use flexbox no body
- **Botões não ficam lado a lado**: Use flexbox no container dos botões
- **Hover não funciona**: Verifique a sintaxe da pseudo-classe

Boa sorte! 🍀