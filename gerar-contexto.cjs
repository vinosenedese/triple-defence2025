const fs = require('fs');
const path = require('path');

// Configurações
// Configurações
const DIR = __dirname; // Raiz do projeto
const OUTPUT_FILE = 'projeto-completo.txt'; // Arquivo de saída

// Pastas a ignorar
const IGNORED_DIRS = ['node_modules', '.git', 'dist', 'out', '.vscode', '.idea'];

// Extensões que queremos ler (para ignorar imagens, fontes, etc.)
const EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.html', '.json', '.md'];

// Função recursiva para ler arquivos
function readDir(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            if (!IGNORED_DIRS.includes(file)) {
                readDir(filePath, fileList);
            }
        } else {
            const ext = path.extname(file).toLowerCase();
            if (EXTENSIONS.includes(ext)) {
                fileList.push(filePath);
            }
        }
    });
    return fileList;
}

// Execução
try {
    const allFiles = readDir(DIR);
    let outputContent = `DATA DE GERAÇÃO: ${new Date().toISOString()}\n`;
    outputContent += `TOTAL DE ARQUIVOS: ${allFiles.length}\n\n`;

    allFiles.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        outputContent += `================================================================\n`;
        outputContent += `FILE: ${file}\n`;
        outputContent += `================================================================\n`;
        outputContent += `${content}\n\n`;
    });

    fs.writeFileSync(OUTPUT_FILE, outputContent);
    console.log(`✅ Sucesso! Arquivo criado: ${OUTPUT_FILE}`);
    console.log(`📂 Total de arquivos processados: ${allFiles.length}`);
} catch (err) {
    console.error('❌ Erro ao gerar arquivo:', err);
}