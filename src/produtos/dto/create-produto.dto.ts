import { IsString, IsNotEmpty } from 'class-validator';

export class CreateProdutoDto{
    @IsString()
    @IsNotEmpty({message:"Nome é obrigatorio"})
    nome:string;

    @IsString()
    @IsNotEmpty({message:"Informe um preço valido"})
    preco:string;

    @IsString()
    @IsNotEmpty({message:"validade é obrigatoria"})
    validade:string;
}