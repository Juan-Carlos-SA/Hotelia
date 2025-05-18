function getfilePath (file){
    const filePath = file.path;
    const fileSplit = filePath.split("\\"); // Divide la ruta en partes
    const uploadsIndex = fileSplit.indexOf("uploads"); // Encuentra el índice de la carpeta "uploads"
    if (uploadsIndex !== -1) {
        // Devuelve la ruta relativa desde "uploads"
        return fileSplit.slice(uploadsIndex).join("/");
    }
    return filePath; // Si no encuentra "uploads", devuelve la ruta completa
}

module.exports={
    getfilePath,
};