#!/bin/bash

VERDE="\033[0;32m"
VERMELHO="\033[0;31m"
AMARELO="\033[1;33m"
RESET="\033[0m"

echo ""
echo "========================================="
echo "  Setup do Workshop SEMAE"
echo "  Testes Automatizados - Dia 2"
echo "========================================="
echo ""

# Detectar SO
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
  SO="Linux"
elif [[ "$OSTYPE" == "darwin"* ]]; then
  SO="macOS"
else
  echo -e "${VERMELHO}Sistema operacional não suportado: $OSTYPE${RESET}"
  echo "Use o script setup.ps1 para Windows."
  exit 1
fi
echo -e "${VERDE}Sistema detectado: $SO${RESET}"
echo ""

# 1. Verificar Node.js
echo "Verificando Node.js..."
if command -v node &> /dev/null; then
  NODE_VERSAO=$(node --version | sed 's/v//' | cut -d. -f1)
  if [ "$NODE_VERSAO" -ge 18 ]; then
    echo -e "${VERDE}Node.js $(node --version) instalado (mínimo: 18)${RESET}"
  else
    echo -e "${AMARELO}Node.js $(node --version) encontrado, mas a versão mínima é 18.${RESET}"
    echo "Instale uma versão mais recente em: https://nodejs.org/"
    echo "Ou use nvm: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash"
  fi
else
  echo -e "${VERMELHO}Node.js não encontrado.${RESET}"
  echo "Instale Node.js 18+ em: https://nodejs.org/"
  echo "Ou use nvm: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash"
  echo ""
  read -p "Deseja tentar instalar o Node.js automaticamente? (s/N): " INSTALAR_NODE
  if [[ "$INSTALAR_NODE" =~ ^[Ss]$ ]]; then
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
    nvm install 18
    nvm use 18
  fi
fi
echo ""

# 2. Verificar Java
echo "Verificando Java..."
if command -v java &> /dev/null; then
  JAVA_VERSAO=$(java -version 2>&1 | head -1 | cut -d'"' -f2 | cut -d. -f1)
  if [ "$JAVA_VERSAO" -ge 17 ]; then
    echo -e "${VERDE}Java $JAVA_VERSAO instalado (mínimo: 17)${RESET}"
  else
    echo -e "${AMARELO}Java $JAVA_VERSAO encontrado, mas a versão mínima é 17.${RESET}"
    echo "Instale Java 17+ em: https://adoptium.net/temurin/releases/"
  fi
else
  echo -e "${VERMELHO}Java não encontrado.${RESET}"
  echo "Java 17+ é necessário para o Maestro."
  echo "Instale em: https://adoptium.net/temurin/releases/"
  echo ""
  if [[ "$SO" == "Linux" ]]; then
    echo -e "${AMARELO}No Ubuntu/Debian, você pode instalar com:${RESET}"
    echo "  sudo apt update && sudo apt install openjdk-17-jdk"
  elif [[ "$SO" == "macOS" ]]; then
    echo -e "${AMARELO}No macOS, você pode instalar com Homebrew:${RESET}"
    echo "  brew install openjdk@17"
  fi
fi
echo ""

# 3. Verificar/Instalar Maestro CLI
echo "Verificando Maestro CLI..."
if command -v maestro &> /dev/null; then
  echo -e "${VERDE}Maestro CLI instalado: $(maestro --version 2>&1 | head -1)${RESET}"
else
  echo "Maestro CLI não encontrado. Instalando..."
  curl -fsSL "https://get.maestro.mobile.dev" | bash
  export PATH="$PATH:$HOME/.maestro/bin"
  if command -v maestro &> /dev/null; then
    echo -e "${VERDE}Maestro CLI instalado com sucesso!${RESET}"
  else
    echo -e "${VERMELHO}Falha ao instalar o Maestro CLI.${RESET}"
    echo "Tente instalar manualmente: curl -fsSL https://get.maestro.mobile.dev | bash"
    echo "Adicione ao PATH: export PATH=\$PATH:\$HOME/.maestro/bin"
  fi
fi
echo ""

# 4. Verificar Maestro Studio
echo "Verificando Maestro Studio..."
if command -v MaestroStudio &> /dev/null || [ -f "/Applications/Maestro Studio.app/Contents/MacOS/Maestro Studio" ]; then
  echo -e "${VERDE}Maestro Studio encontrado.${RESET}"
else
  echo -e "${AMARELO}Maestro Studio não encontrado.${RESET}"
  echo "Download: https://studio.maestro.dev/"
  if [[ "$SO" == "macOS" ]]; then
    echo "Baixe o .dmg e arraste para Applications."
  else
    echo "Baixe o .AppImage, dê permissão de execução e rode com --no-sandbox."
  fi
fi
echo ""

# 5. Instalar dependências JavaScript (Jest)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
JS_DIR="$SCRIPT_DIR/javascript"
if [ -d "$JS_DIR" ]; then
  echo "Instalando dependências JavaScript (Jest)..."
  cd "$JS_DIR"
  if [ -f "package.json" ]; then
    npm install
    echo -e "${VERDE}Dependências JavaScript instaladas.${RESET}"
  else
    echo -e "${AMARELO}package.json não encontrado em $JS_DIR${RESET}"
  fi
  cd "$SCRIPT_DIR"
else
  echo -e "${AMARELO}Pasta javascript/ não encontrada.${RESET}"
fi
echo ""

# 6. Resetar dados do site
echo ""
echo "Para resetar os dados do site (restaurar chamados e contas originais):"
echo "  1. Abra o site no navegador"
echo "  2. Abra o Console (F12) e digite: resetarDados()"
echo "  3. Recarregue a página"
echo ""

# Resumo
echo "========================================="
echo -e "${VERDE}  Setup concluído!${RESET}"
echo "========================================="
echo ""
echo "Próximos passos:"
echo "  1. Acesse o site do workshop"
echo "  2. Abra o Maestro Studio"
echo "  3. Comece pelo desafio 00 (Demo)"
echo ""
