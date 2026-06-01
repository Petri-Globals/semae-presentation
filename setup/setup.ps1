# Setup do Workshop SEMAE - Testes Automatizados (Dia 2)
# Execute no PowerShell: .\setup.ps1

Write-Host ""
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "  Setup do Workshop SEMAE" -ForegroundColor Cyan
Write-Host "  Testes Automatizados - Dia 2" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Sistema: Windows" -ForegroundColor Green
Write-Host ""

# 1. Verificar Node.js
Write-Host "Verificando Node.js..." -ForegroundColor White
if (Get-Command node -ErrorAction SilentlyContinue) {
    $nodeVersion = (node --version).TrimStart("v").Split(".")[0]
    if ([int]$nodeVersion -ge 18) {
        Write-Host "Node.js $(node --version) instalado (minimo: 18)" -ForegroundColor Green
    } else {
        Write-Host "Node.js $(node --version) encontrado, mas a versao minima e 18." -ForegroundColor Yellow
        Write-Host "Instale em: https://nodejs.org/"
    }
} else {
    Write-Host "Node.js nao encontrado." -ForegroundColor Red
    Write-Host "Instale Node.js 18+ em: https://nodejs.org/"
}
Write-Host ""

# 2. Verificar Java
Write-Host "Verificando Java..." -ForegroundColor White
if (Get-Command java -ErrorAction SilentlyContinue) {
    $javaOutput = java -version 2>&1 | Select-Object -First 1
    $javaVersion = ($javaOutput -match '"(\d+)' | Out-Null; $Matches[1])
    if ([int]$javaVersion -ge 17) {
        Write-Host "Java $javaVersion instalado (minimo: 17)" -ForegroundColor Green
    } else {
        Write-Host "Java $javaVersion encontrado, mas a versao minima e 17." -ForegroundColor Yellow
        Write-Host "Instale em: https://adoptium.net/temurin/releases/"
    }
} else {
    Write-Host "Java nao encontrado." -ForegroundColor Red
    Write-Host "Java 17+ e necessario para o Maestro."
    Write-Host "Instale em: https://adoptium.net/temurin/releases/"
}
Write-Host ""

# 3. Verificar/Instalar Maestro CLI
Write-Host "Verificando Maestro CLI..." -ForegroundColor White
if (Get-Command maestro -ErrorAction SilentlyContinue) {
    Write-Host "Maestro CLI instalado." -ForegroundColor Green
} else {
    Write-Host "Maestro CLI nao encontrado." -ForegroundColor Yellow
    Write-Host "Para instalar o Maestro CLI no Windows:"
    Write-Host "  1. Acesse: https://github.com/mobile-dev-inc/maestro/releases"
    Write-Host "  2. Baixe o maestro.zip mais recente"
    Write-Host "  3. Extraia para C:\maestro"
    Write-Host "  4. Adicione C:\maestro\bin ao PATH:"
    Write-Host '     setx PATH "%PATH%;C:\maestro\bin"'
    Write-Host "  5. Reinicie o terminal"
}
Write-Host ""

# 4. Maestro Studio
Write-Host "Verificando Maestro Studio..." -ForegroundColor White
Write-Host "Download: https://studio.maestro.dev/" -ForegroundColor Yellow
Write-Host "Baixe o MaestroStudio.exe e instale normalmente." -ForegroundColor Yellow
Write-Host ""

# 5. Instalar dependencias JavaScript (Jest)
$jsDir = Join-Path $PSScriptRoot "..\javascript"
if (Test-Path $jsDir) {
    Write-Host "Instalando dependencias JavaScript (Jest)..." -ForegroundColor White
    Push-Location $jsDir
    if (Test-Path "package.json") {
        npm install
        Write-Host "Dependencias JavaScript instaladas." -ForegroundColor Green
    } else {
        Write-Host "package.json nao encontrado em $jsDir" -ForegroundColor Yellow
    }
    Pop-Location
} else {
    Write-Host "Pasta javascript/ nao encontrada." -ForegroundColor Yellow
}
Write-Host ""

Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "  Setup concluido!" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Proximos passos:"
Write-Host "  1. Acesse o site do workshop"
Write-Host "  2. Abra o Maestro Studio"
Write-Host "  3. Comece pelo desafio 00 (Demo)"
Write-Host ""
