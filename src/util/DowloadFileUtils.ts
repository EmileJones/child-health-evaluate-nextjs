export default class DownloadFileUtils {
    public static dowloadFile(base64string: string, fileName: string): void{
        const fileBlob = this.convertBase64ToBlob(base64string);
        let downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(fileBlob);
        downloadLink.download = fileName;
        downloadLink.click();
    }

    public static convertBase64ToBlob(base64string: string): Blob{
        const base64Decode: string = atob(base64string)
        const byteArray = new Uint8Array(base64Decode.length);
        for (let i = 0; i < base64Decode.length; i++) {
            byteArray[i] = base64Decode.charCodeAt(i);
        }
        return new Blob([byteArray])
    }
}