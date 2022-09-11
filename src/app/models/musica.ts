export class Musica {
  private _id: any;
  private _nome: string;
  private _cantor: string;
  private _genero: string;
  private _album: string;
  private _nomeAlbum: string;
  private _plataforma: string;
  private _nota: number;
  private _ano_lancamento: string;

  constructor(nome: string, cantor: string,
    nomeAlbum: string, album: string, genero: string,
    plataforma: string, nota: number, ano_lancamento: string){
    let chave = new Date;
    this._id = chave.getTime();
    this._nome = nome;
    this._cantor = cantor;
    this._nomeAlbum = nomeAlbum;
    this._album = album;
    this._genero = genero;
    this._plataforma = plataforma;
    this._nota = nota;
    this._ano_lancamento = ano_lancamento;
  }

  public get id(): any{
    return this._id;
  }

  public get nome(): string{
    return this._nome;
  }

  public set nome(nome: string){
    this._nome = nome;
  }

  public get cantor(): string{
    return this._cantor;
  }

  public set cantor(cantor: string){
    this._cantor = cantor;
  }

  public get album():string{
    return this._album;
  }

  public set album(album: string){
    this._album = album;
  }

  public get nomeAlbum():string{
    return this._nomeAlbum;
  }

  public set nomeAlbum(nomeAlbum: string){
    this._nomeAlbum = nomeAlbum;
  }

  public get genero(): string{
    return this._genero;
  }

  public set genero(genero: string){
    this._genero = genero;
  }

  public get plataforma(){
    return this._plataforma;
  }

  public set plataforma(plataforma: string){
    this._plataforma = plataforma;
  }

  public get nota():number{
    return this._nota;
  }

  public set nota(nota: number){
    this._nota = nota;
  }
  public get ano_lancamento(): string{
    return this._ano_lancamento;
  }

  public set ano_lancamento(ano_lancamento: string){
    this._ano_lancamento = ano_lancamento;
  }
}
