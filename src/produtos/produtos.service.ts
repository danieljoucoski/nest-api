import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Produto } from './entities/produto.entity.js';
import { CreateProdutoDto } from './dto/create-produto.dto.js';
import { randomUUID } from 'crypto';

@Injectable()
export class ProdutosService {
    private produtos: Produto[]=[]
    //criar
    create(createProdutoDto:CreateProdutoDto):Produto{
        const novoProduto:Produto={
            id:randomUUID(),
            ...createProdutoDto,
            criadoEm:new Date()
        }
        this.produtos.push(novoProduto)
        return novoProduto;
    }

    //ler todos
    findAll(): Produto[]{
        return this.produtos;
    }

    //apagar
    remove(id:string):{message:string}{
        const index=this.produtos.findIndex((a)=>a.id===id);
        if(index===-1){
            throw new NotFoundException("Produto não encontrado.")
        }
        this.produtos.splice(index,1)
        return {message:`Produto com id ${id} removido com sucesso.`}
    }
}
