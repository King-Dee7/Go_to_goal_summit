@echo off
setlocal
cd /d "%~dp0"
where npm.cmd >nul 2>&1 || (echo npm.cmd not found. Please install Node.js.& exit /b 1)
if not exist node_modules (
  echo Installing dependencies...
  call npm.cmd install || exit /b 1
)
echo Starting dev server at http://localhost:3000
call npm.cmd run dev:win

