export class EsercizioGriglia {
    
	public idEsercizio: number;
    public tipologia: number;
    public testoEsercizio: any;
	public passaggi: any;
	public data: Date;
	public nomeAlunno: string;
	public cognomeAlunno: string;

    constructor() {
        this.idEsercizio = null;
        this.testoEsercizio = [];
        this.tipologia = null;
        this.passaggi = [];
        this.data = null;
        this.nomeAlunno = null;
        this.cognomeAlunno = null;
    }
}