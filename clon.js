function copiarArchivos() {
    var carpetaOrigenId = "ID_Carpeta_origen"; //Id de la carpeta de origen
    var carpetaDestinoId = "ID_Carpeta_Destino"; //Id de la carpeta de destino

    var carpetaOrigen = DriveApp.getFolderById(carpetaOrigenId);
    var carpetaDestino = DriveApp.getFolderById(carpetaDestinoId);
  
  var archivosOrigen = carpetaOrigen.getFiles();
  var nombresArchivosDestino = obtenerNombresArchivos(carpetaDestino);
  
  while (archivosOrigen.hasNext()) {
    var archivoOrigen = archivosOrigen.next();
    var nombreArchivoOrigen = archivoOrigen.getName();
    
    if (!nombresArchivosDestino.has(nombreArchivoOrigen)) {
      archivoOrigen.makeCopy(nombreArchivoOrigen, carpetaDestino);
      Logger.log("Archivo copiado: " + nombreArchivoOrigen);
    } else {
      Logger.log("El archivo ya existe en la carpeta destino: " + nombreArchivoOrigen);
    }
  }
}

function obtenerNombresArchivos(carpeta) {
  var nombresArchivos = new Set();
  var archivos = carpeta.getFiles();
  
  while (archivos.hasNext()) {
    var archivo = archivos.next();
    nombresArchivos.add(archivo.getName());
  }
  
  return nombresArchivos;
}