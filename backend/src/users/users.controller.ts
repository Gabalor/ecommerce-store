import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto'; // Importa el DTO
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger'; // Importa los decoradores de Swagger

@ApiTags('users') // Etiqueta de Swagger para este controlador
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los usuarios' })
  async findAll() {
    return this.usersService.findAll();
  }

  @Post() // Decorador para manejar las solicitudes POST
  @ApiOperation({ summary: 'Crear un nuevo usuario' })
  @ApiCreatedResponse({ description: 'El usuario ha sido creado correctamente.' })
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
