export class HandleError {
    static catch(error){
        switch (error.response.status) {
            case 500:
                throw "Erreur du serveur";
            case 404:
                throw "Page introuvalble";
            case 422:
                throw "Mauvaise data";
            case 401:
                throw "Veuillez se reconnecter";
            default:
                throw "Erreur inconnue";
        }
    }
}