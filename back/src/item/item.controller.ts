import { Controller, Post, Body, Get, Param, Patch, Delete, Query } from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemService.create(createItemDto);
  }

  @Get()
  findAll() {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.itemService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateItemDto: UpdateItemDto) {
    return this.itemService.update(id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.itemService.remove(id);
  }

  @Patch(':id/publish')
  publish(@Param('id') id: number) {
    return this.itemService.publish(id);
  }

  @Get('paginated')
  findPaginatedAndSorted(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('sortBy') sortBy: 'latest' | 'highest'
  ) {
    return this.itemService.findPaginatedAndSorted(page, limit, sortBy);
  }

  @Get('completed/paginated')
  findCompletedPaginatedAndSorted(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('sortBy') sortBy: 'latest' | 'highest'
  ) {
    return this.itemService.findCompletedPaginatedAndSorted(page, limit, sortBy);
  }
}