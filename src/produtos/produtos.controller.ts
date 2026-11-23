import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { ProdutosService } from './produtos.service.js';
import { CreateProdutoDto } from './dto/create-produto.dto.js';


@Controller('produtos')
export class ProdutosController {
    constructor (private readonly produtoService:ProdutosService){}
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body()createProdutoDto:CreateProdutoDto){
        return this.produtoService.create(createProdutoDto);
    }
    @Get()
    findAll(){
        return this.produtoService.findAll();
    }
    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    remove(@Param('id') id:string){
        return this.produtoService.remove(id);
    }
}


